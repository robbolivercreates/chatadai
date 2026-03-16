"use client";

import { useState, useEffect, useCallback } from "react";
import { Download, RefreshCw, X, Maximize2 } from "lucide-react";
import type { AdPreviewPart, AdFormat } from "../types";

interface Props {
  part: AdPreviewPart;
  onRegenerate?: () => void;
}

const FORMAT_ASPECT: Record<AdFormat, string> = {
  "1:1":  "aspect-square",
  "4:5":  "aspect-[4/5]",
  "9:16": "aspect-[9/16]",
  "16:9": "aspect-video",
};

export function AdPreviewBubble({ part, onRegenerate }: Props) {
  const [showLightbox, setShowLightbox] = useState(false);

  // Close on ESC key
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setShowLightbox(false);
  }, []);

  useEffect(() => {
    if (showLightbox) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [showLightbox, handleEsc]);

  const imgSrc = `data:${part.imageMimeType};base64,${part.imageBase64}`;

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = imgSrc;
    a.download = `adforge-${part.templateId}-${Date.now()}.png`;
    a.click();
  };

  return (
    <>
      <div className="ad-preview-card max-w-[420px] w-full">
        {/* Image — click to enlarge */}
        <div
          className={`relative w-full overflow-hidden ${FORMAT_ASPECT[part.format] ?? "aspect-square"} bg-[#111] cursor-pointer group`}
          onClick={() => setShowLightbox(true)}
        >
          <img
            src={imgSrc}
            alt={`Ad: ${part.templateName}`}
            className="w-full h-full object-cover"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-full p-2.5">
              <Maximize2 size={18} className="text-white" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="text-[11px] font-medium px-2 py-0.5 rounded-full"
              style={{ background: "rgba(99,102,241,0.18)", color: "#a5b4fc" }}
            >
              {part.format}
            </span>
            <span className="text-xs truncate" style={{ color: "var(--text-secondary)" }}>
              {part.templateName}
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {onRegenerate && (
              <button
                onClick={onRegenerate}
                className="icon-btn w-8 h-8 text-xs"
                title="Regenerate"
                style={{ border: "1px solid var(--border-main)" }}
              >
                <RefreshCw size={14} />
              </button>
            )}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
              style={{
                background: "var(--btn-primary)",
                color: "#111",
              }}
            >
              <Download size={12} />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {showLightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md"
          onClick={() => setShowLightbox(false)}
        >
          {/* Close button — large and obvious */}
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 transition-colors"
          >
            <X size={18} className="text-white" />
            <span className="text-white text-xs font-medium">Fechar</span>
          </button>

          {/* Download button */}
          <button
            onClick={(e) => { e.stopPropagation(); handleDownload(); }}
            className="absolute top-4 right-16 z-10 flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          >
            <Download size={14} />
            Download
          </button>

          {/* Image — click also closes */}
          <img
            src={imgSrc}
            alt={`Ad: ${part.templateName}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-pointer"
            style={{ animation: "msg-slide-up 0.25s cubic-bezier(0.22, 1, 0.36, 1) both" }}
          />

          {/* Info bar */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm pointer-events-none"
          >
            <span
              className="text-[11px] font-medium px-2 py-0.5 rounded-full"
              style={{ background: "rgba(99,102,241,0.25)", color: "#a5b4fc" }}
            >
              {part.format}
            </span>
            <span className="text-xs text-white/70">{part.templateName}</span>
          </div>
        </div>
      )}
    </>
  );
}
