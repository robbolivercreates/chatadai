"use client";

import ReactMarkdown from "react-markdown";
import type { ChatMessage, MessagePart, CopyReviewPart, ActionButtonsPart, QuickRepliesPart } from "../types";
import { AdPreviewBubble } from "./AdPreviewBubble";
import { BrandDNACard } from "./BrandDNACard";
import { TemplateGallery } from "./TemplateGallery";
import { ImagePicker } from "./ImagePicker";
import { CopyReviewCard } from "./CopyReviewCard";

interface Props {
  message: ChatMessage;
  onRegenerate?: (msgId: string) => void;
  sendMessage?: (text: string) => void;
  isDevMode?: boolean;
  onImagesSelected?: (images: { data: string; mimeType: string }[]) => void;
}

// ─── Quick Reply Chips ────────────────────────────────────────────
function QuickReplies({ part, onSend }: { part: QuickRepliesPart; onSend?: (t: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2 chip-stagger">
      {part.replies.map((reply) => (
        <button
          key={reply}
          onClick={() => onSend?.(reply)}
          className="chip-animate px-3 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 text-[12px] font-medium transition-all duration-150 active:scale-[0.96]"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}

// ─── Action Buttons ───────────────────────────────────────────────
function ActionButtons({ part, onSend }: { part: ActionButtonsPart; onSend?: (t: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {part.buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={() => onSend?.(btn.prompt)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[12px] font-medium transition-all duration-150 active:scale-[0.97]"
        >
          {btn.icon && <span>{btn.icon}</span>}
          <span>{btn.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Part Renderer ────────────────────────────────────────────────
function renderPart(
  part: MessagePart,
  msgId: string,
  onRegenerate?: (msgId: string) => void,
  sendMessage?: (text: string) => void,
  isDevMode?: boolean,
  onImagesSelected?: (images: { data: string; mimeType: string }[]) => void,
) {
  switch (part.type) {
    case "text":
      return (
        <div key="text" className="prose prose-invert prose-sm max-w-none text-[14px] leading-relaxed">
          <ReactMarkdown>{part.content}</ReactMarkdown>
        </div>
      );

    case "brand_dna":
      return <BrandDNACard key="brand-dna" part={part} />;

    case "ad_preview":
      return (
        <AdPreviewBubble
          key={`ad-${part.templateId}`}
          part={part}
          onRegenerate={onRegenerate ? () => onRegenerate(msgId) : undefined}
        />
      );

    case "format_selector":
      // Rendered by parent page (needs state)
      return null;

    case "template_gallery":
      return <TemplateGallery key="template-gallery" sendMessage={sendMessage || (() => {})} isDevMode={isDevMode} />;

    case "scraped_images":
      return (
        <ImagePicker
          key="image-picker"
          images={part.images}
          onConfirm={(selected) => {
            if (onImagesSelected) {
              onImagesSelected(selected);
            }
          }}
        />
      );

    case "quick_replies":
      return <QuickReplies key="quick-replies" part={part} onSend={sendMessage} />;

    case "copy_review":
      return (
        <div key="copy-review" className="card-animate">
          <CopyReviewCard
            part={part as CopyReviewPart}
            onApprove={(prompt) => sendMessage?.(prompt)}
            onEdit={(_label, _val, editPrompt) => sendMessage?.(editPrompt)}
          />
        </div>
      );

    case "action_buttons":
      return <ActionButtons key="action-buttons" part={part as ActionButtonsPart} onSend={sendMessage} />;

    default:
      return null;
  }
}

// ─── MessageBubble ────────────────────────────────────────────────
export function MessageBubble({ message, onRegenerate, sendMessage, isDevMode, onImagesSelected }: Props) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end gap-3 px-4 py-1 msg-user-animate">
        <div
          className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed"
          style={{
            background: "rgba(99,102,241,0.18)",
            color: "var(--text-primary)",
            border: "1px solid rgba(99,102,241,0.24)",
          }}
        >
          {/* Show uploaded images */}
          {message.uploadedImages && message.uploadedImages.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {message.uploadedImages.map((img, i) => (
                <img
                  key={i}
                  src={img.preview}
                  alt="Upload"
                  className="w-20 h-20 rounded-lg object-cover ring-1 ring-white/10"
                />
              ))}
            </div>
          )}
          {message.content && (
            <p className="whitespace-pre-wrap">{message.content}</p>
          )}
        </div>
      </div>
    );
  }

  // Check if this is a gallery message - render full-width without avatar constraint
  const isGalleryMessage = message.parts?.some(p => p.type === "template_gallery");

  if (isGalleryMessage) {
    return (
      <div className="w-full px-2 py-1">
        {message.parts!.map((part, i) => (
          <div key={i}>{renderPart(part, message.id, onRegenerate, sendMessage, isDevMode, onImagesSelected)}</div>
        ))}
      </div>
    );
  }

  // Assistant message
  return (
    <div className="flex gap-3 px-4 py-1 max-w-[82%] msg-animate-in">
      {/* Avatar */}
      <div
        className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
        style={{ background: "rgba(99,102,241,0.22)", color: "#a5b4fc" }}
      >
        ✦
      </div>

      <div className="flex flex-col gap-2 min-w-0 flex-1">
        {message.parts && message.parts.length > 0 ? (
          message.parts.map((part, i) => (
            <div key={i}>{renderPart(part, message.id, onRegenerate, sendMessage, isDevMode, onImagesSelected)}</div>
          ))
        ) : (
          <div className="prose prose-invert prose-sm max-w-none text-[14px] leading-relaxed">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
