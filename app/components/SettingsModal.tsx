"use client";

import { useState } from "react";
import { X, Key, Eye, EyeOff, Globe } from "lucide-react";
import { useSettingsStore } from "../store/useSettingsStore";
import { useTranslations } from "next-intl";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SettingsModal({ open, onClose }: Props) {
  const t = useTranslations("settings");
  const { geminiApiKey, setGeminiApiKey, language, setLanguage } = useSettingsStore();
  
  const [draft, setDraft] = useState(geminiApiKey);
  const [langDraft, setLangDraft] = useState(language);
  const [show, setShow] = useState(false);

  if (!open) return null;

  const handleSave = () => {
    setGeminiApiKey(draft.trim());
    
    // Only reload if language actually changed
    const languageChanged = langDraft !== language;
    
    if (languageChanged) {
      setLanguage(langDraft);
      document.cookie = `locale=${langDraft}; path=/; max-age=31536000`;
      window.location.reload();
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 flex flex-col gap-6"
        style={{ background: "var(--background-surface)", border: "1px solid var(--border-main)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
            {t("title")}
          </h2>
          <button className="icon-btn w-8 h-8" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* API Key */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            {t("apiKey")}
          </label>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "var(--fill-input-chat)", border: "1px solid var(--border-main)" }}>
            <Key size={14} style={{ color: "var(--icon-tertiary)" }} />
            <input
              type={show ? "text" : "password"}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="AIza..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--text-primary)" }}
            />
            <button onClick={() => setShow(!show)} className="icon-btn w-7 h-7">
              {show ? <EyeOff size={13} /> : <Eye size={13} />}
            </button>
          </div>
          <p className="text-[11px]" style={{ color: "var(--text-tertiary)" }}>
            Your key is stored locally. Get one at{" "}
            <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" className="underline" style={{ color: "var(--accent)" }}>
              aistudio.google.com
            </a>
          </p>
        </div>

        {/* Language Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            {t("language")}
          </label>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "var(--fill-input-chat)", border: "1px solid var(--border-main)" }}>
            <Globe size={14} style={{ color: "var(--icon-tertiary)" }} />
            <select
              value={langDraft}
              onChange={(e) => setLangDraft(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm appearance-none cursor-pointer"
              style={{ color: "var(--text-primary)" }}
            >
              <option value="en" style={{ background: "var(--background-surface)" }}>English</option>
              <option value="pt" style={{ background: "var(--background-surface)" }}>Português (BR)</option>
            </select>
          </div>
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          className="w-full py-2.5 rounded-xl text-sm font-semibold transition-colors mt-2"
          style={{ background: "var(--btn-primary)", color: "#111" }}
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
}
