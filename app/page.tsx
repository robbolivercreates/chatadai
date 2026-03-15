"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Send, Paperclip, Plus, Settings, Trash2, X,
  MessageSquare, Loader2, PanelLeft, Link, Upload
} from "lucide-react";
import { useChatStore } from "./store/useChatStore";
import { useSettingsStore } from "./store/useSettingsStore";
import { MessageBubble } from "./components/MessageBubble";
import { FormatSelector } from "./components/FormatSelector";
import { SettingsModal } from "./components/SettingsModal";
import type { ChatMessage, MessagePart, AdFormat, UploadedImage } from "./types";

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Welcome screen chips ─────────────────────────────────────────
const CHIPS = [
  { icon: "🔗", label: "Analisar site da marca", prompt: "Quero usar meu site da marca" },
  { icon: "📸", label: "Fazer upload de fotos", prompt: "Quero fazer upload de fotos do meu produto" },
];

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<AdFormat | null>(null);
  const [showFormatSelector, setShowFormatSelector] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loadingLabel, setLoadingLabel] = useState("Thinking...");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // Persists product images across the entire session so they're available at generation time
  const productImagesRef = useRef<UploadedImage[]>([]);

  const { sessions, activeChatId, createSession, setActiveSession, updateMessages, updateBrandDNA, deleteSession, getActiveSession } = useChatStore();
  const { geminiApiKey } = useSettingsStore();

  const activeSession = getActiveSession();

  // Sync messages when active session changes
  useEffect(() => {
    if (activeSession) {
      setMessages(activeSession.messages);
    } else {
      setMessages([]);
    }
    setSelectedFormat(null);
    setShowFormatSelector(false);
    setUploadedImages([]);
    productImagesRef.current = []; // Reset product images on session switch
  }, [activeChatId]);

  // Persist messages
  useEffect(() => {
    if (activeChatId && messages.length > 0) {
      updateMessages(activeChatId, messages);
    }
  }, [messages, activeChatId]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, [input]);

  // Show format selector when agent asks for format
  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (!lastMsg || lastMsg.role !== "assistant") return;
    const hasFmtPart = lastMsg.parts?.some((p) => p.type === "format_selector");
    setShowFormatSelector(!!hasFmtPart);
  }, [messages]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    files.slice(0, 3).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        const base64 = dataUrl.split(",")[1];
        setUploadedImages((prev) => [
          ...prev,
          { data: base64, mimeType: file.type || "image/jpeg", preview: dataUrl },
        ]);
      };
      reader.readAsDataURL(file);
    });

    // Reset input so same file can be re-selected
    e.target.value = "";
  };

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed && uploadedImages.length === 0) return;

    if (!geminiApiKey) {
      setSettingsOpen(true);
      return;
    }

    let sessionId = activeChatId;
    if (!sessionId) {
      sessionId = createSession();
    }

    const userMsg: ChatMessage = {
      id: generateId(),
      role: "user",
      content: trimmed || "(images uploaded)",
      uploadedImages: uploadedImages.length > 0 ? [...uploadedImages] : undefined,
      timestamp: Date.now(),
    };

    const imagesCopy = [...uploadedImages];
    // Accumulate product images for the session
    if (imagesCopy.length > 0) {
      productImagesRef.current = [...productImagesRef.current, ...imagesCopy];
    }
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setUploadedImages([]);
    setIsLoading(true);
    setLoadingLabel("Thinking...");
    setShowFormatSelector(false);

    const slowTimer = setTimeout(() => {
      setLoadingLabel("Creating your ad...");
    }, 6000);

    try {
      // Build API messages (omit base64 from history to keep payload light)
      const apiMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const body: Record<string, unknown> = {
        messages: apiMessages,
        apiKey: geminiApiKey,
        selectedFormat: selectedFormat || "4:5",
      };

      // Include ALL product images from the session (not just current upload)
      const allImages = productImagesRef.current;
      if (allImages.length > 0) {
        body.images = allImages.map((img) => ({
          data: img.data,
          mimeType: img.mimeType,
        }));
      }

      // Include existing Brand DNA from session if available
      if (activeSession?.brandDNA) {
        body.brandDNA = activeSession.brandDNA;
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      const parts: MessagePart[] = data.parts || [];

      // Extract Brand DNA if present
      const dnaPart = parts.find((p) => p.type === "brand_dna");
      if (dnaPart && dnaPart.type === "brand_dna" && sessionId) {
        updateBrandDNA(sessionId, {
          brand_name: dnaPart.brandName,
          product_name: dnaPart.productName,
          primary_color: dnaPart.primaryColor,
          secondary_color: dnaPart.secondaryColor,
          accent_color: dnaPart.accentColor,
          typography_style: dnaPart.typographyStyle,
          tone_adjectives: dnaPart.toneAdjectives,
          target_audience: dnaPart.targetAudience,
          positioning: dnaPart.positioning,
          key_benefits: dnaPart.keyBenefits,
          image_generation_modifier: dnaPart.imageGenerationModifier,
          website: dnaPart.website,
          social_handle: dnaPart.socialHandle,
          source: dnaPart.source,
          created_at: new Date().toISOString(),
        });
      }

      const assistantMsg: ChatMessage = {
        id: generateId(),
        role: "assistant",
        content: parts.find((p) => p.type === "text")?.type === "text"
          ? (parts.find((p) => p.type === "text") as { type: "text"; content: string }).content
          : "",
        parts,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Connection error";
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          content: `❌ Error: ${errorMsg}`,
          parts: [{ type: "text", content: `❌ Error: ${errorMsg}` }],
          timestamp: Date.now(),
        },
      ]);
    } finally {
      clearTimeout(slowTimer);
      setIsLoading(false);
      setLoadingLabel("Thinking...");
    }
  }, [messages, geminiApiKey, uploadedImages, selectedFormat, activeChatId, activeSession, createSession, updateBrandDNA]);

  const handleSend = () => sendMessage(input);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFormatSelect = (format: AdFormat) => {
    setSelectedFormat(format);
    sendMessage(`Format: ${format}`);
  };

  const handleNewChat = () => {
    setActiveSession(null);
    setMessages([]);
    setUploadedImages([]);
    setSelectedFormat(null);
    setShowFormatSelector(false);
    setInput("");
    productImagesRef.current = []; // Clear product images
  };

  const isInChat = messages.length > 0;

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--background-main)" }}>
      {/* ─── Sidebar ──────────────────────────────────────────────── */}
      {sidebarOpen && (
        <aside
          className="flex flex-col h-full flex-shrink-0 overflow-hidden"
          style={{
            width: 220,
            background: "var(--background-nav)",
            borderRight: "1px solid var(--border-main)",
          }}
        >
          {/* Top */}
          <div className="flex items-center justify-between px-3 pt-4 pb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                A
              </div>
              <span className="text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>
                AdForge
              </span>
            </div>
            <button className="icon-btn w-7 h-7" onClick={() => setSidebarOpen(false)}>
              <PanelLeft size={14} />
            </button>
          </div>

          {/* New chat button */}
          <div className="px-2 pb-2">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] transition-colors"
              style={{ color: "var(--text-secondary)", border: "1px solid var(--border-main)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--fill-tsp-white-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Plus size={14} />
              New session
            </button>
          </div>

          <div className="sidebar-divider" />

          {/* Chat list */}
          <div className="flex-1 overflow-y-auto dark-scrollbar py-2 px-1">
            {sessions.length === 0 && (
              <p className="px-3 pt-2 text-xs" style={{ color: "var(--text-tertiary)" }}>
                No sessions yet
              </p>
            )}
            {sessions.map((session) => (
              <div
                key={session.id}
                className="group flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors"
                style={{
                  background: session.id === activeChatId ? "var(--fill-tsp-white-main)" : "transparent",
                  color: session.id === activeChatId ? "var(--text-primary)" : "var(--text-secondary)",
                }}
                onClick={() => setActiveSession(session.id)}
                onMouseEnter={(e) => {
                  if (session.id !== activeChatId) {
                    (e.currentTarget as HTMLElement).style.background = "var(--fill-tsp-white-light)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (session.id !== activeChatId) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                <MessageSquare size={13} className="flex-shrink-0 opacity-60" />
                <span className="text-[12px] truncate flex-1">{session.name}</span>
                <button
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded"
                  onClick={(e) => { e.stopPropagation(); deleteSession(session.id); }}
                  title="Delete"
                >
                  <Trash2 size={11} style={{ color: "var(--text-tertiary)" }} />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom: Settings */}
          <div className="sidebar-divider" />
          <div className="p-2">
            <button
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setSettingsOpen(true)}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--fill-tsp-white-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Settings size={14} />
              Settings
            </button>
          </div>
        </aside>
      )}

      {/* ─── Main chat area ───────────────────────────────────────── */}
      <main className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
        {/* Top bar (when sidebar is collapsed) */}
        {!sidebarOpen && (
          <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ borderBottom: "1px solid var(--border-main)" }}>
            <button className="icon-btn w-8 h-8" onClick={() => setSidebarOpen(true)}>
              <PanelLeft size={16} />
            </button>
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              A
            </div>
            <span className="text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>
              AdForge
            </span>
            <div className="flex-1" />
            <button className="icon-btn w-8 h-8" onClick={() => setSettingsOpen(true)}>
              <Settings size={15} />
            </button>
          </div>
        )}

        {!isInChat ? (
          /* ─── Welcome screen ──────────────────────────────────── */
          <div className="flex-1 flex flex-col items-center justify-center px-4 gap-8">
            {/* Logo + title */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold"
                style={{ background: "linear-gradient(135deg, var(--accent), #8b5cf6)" }}
              >
                ✦
              </div>
              <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                AdForge
              </h1>
              <p className="text-sm max-w-xs" style={{ color: "var(--text-secondary)" }}>
                Turn your product photos into professional ad creatives. No design skills needed.
              </p>
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap gap-2 justify-center">
              {CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  className="action-pill"
                  onClick={() => sendMessage(chip.prompt)}
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="w-full max-w-xl">
              {renderInput("What's your brand or website? Let's create some ads...")}
            </div>
          </div>
        ) : (
          /* ─── Chat messages ───────────────────────────────────── */
          <>
            <div className="flex-1 overflow-y-auto dark-scrollbar py-6 flex flex-col gap-1">
              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  message={msg}
                  sendMessage={sendMessage}
                  onImagesSelected={(selectedImages) => {
                    // Store selected product images for ad generation
                    const asUploaded = selectedImages.map((img) => ({
                      data: img.data,
                      mimeType: img.mimeType,
                      preview: `data:${img.mimeType};base64,${img.data.slice(0, 100)}`,
                    }));
                    productImagesRef.current = asUploaded;
                    sendMessage(`I've selected ${selectedImages.length} product image${selectedImages.length > 1 ? "s" : ""} to use for my ads.`);
                  }}
                />
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-3 px-4 py-2">
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(99,102,241,0.22)", color: "#a5b4fc" }}
                  >
                    ✦
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="typing-dot" style={{ animationDelay: "0ms" }} />
                    <span className="typing-dot" style={{ animationDelay: "150ms" }} />
                    <span className="typing-dot" style={{ animationDelay: "300ms" }} />
                    <span className="text-xs ml-1" style={{ color: "var(--text-tertiary)" }}>
                      {loadingLabel}
                    </span>
                  </div>
                </div>
              )}

              {/* Format selector (inline after agent asks) */}
              {showFormatSelector && !isLoading && (
                <div className="px-4 py-2">
                  <div className="ml-10">
                    <FormatSelector selected={selectedFormat} onSelect={handleFormatSelect} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="flex-shrink-0 px-4 pb-4 pt-2 max-w-3xl mx-auto w-full">
              {renderInput("Reply here...")}
            </div>
          </>
        )}
      </main>

      {/* ─── Settings modal ───────────────────────────────────────── */}
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );

  // ─── Shared input renderer ───────────────────────────────────────
  function renderInput(placeholder: string) {
    return (
      <div className="chat-input-container flex flex-col gap-2 py-2.5 w-full">
        {/* Uploaded image previews */}
        {uploadedImages.length > 0 && (
          <div className="flex flex-wrap gap-2 px-4 pt-1">
            {uploadedImages.map((img, i) => (
              <div key={i} className="relative group">
                <img
                  src={img.preview}
                  alt=""
                  className="w-14 h-14 rounded-lg object-cover ring-1 ring-white/10"
                />
                <button
                  onClick={() => setUploadedImages((prev) => prev.filter((_, idx) => idx !== i))}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "#ef4444", color: "#fff" }}
                >
                  <X size={9} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="px-4">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            rows={1}
            className="w-full bg-transparent resize-none outline-none text-[14px] leading-6"
            style={{ color: "var(--text-primary)", maxHeight: 160 }}
          />
        </div>

        <div className="flex items-center gap-2 px-3">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="icon-btn w-8 h-8"
            style={{ border: "1px solid var(--border-main)" }}
            title="Upload product images"
          >
            <Paperclip size={14} />
          </button>

          <div className="flex-1" />

          <button
            onClick={handleSend}
            disabled={(!input.trim() && uploadedImages.length === 0) || isLoading}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors disabled:cursor-not-allowed"
            style={{
              background: (!input.trim() && uploadedImages.length === 0) || isLoading
                ? "var(--fill-tsp-white-dark)"
                : "var(--btn-primary)",
              color: (!input.trim() && uploadedImages.length === 0) || isLoading ? "var(--icon-disable)" : "#111",
            }}
          >
            {isLoading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Send size={13} />
            )}
          </button>
        </div>
      </div>
    );
  }
}
