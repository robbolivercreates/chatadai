"use client";

import { Download, RefreshCw } from "lucide-react";
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
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `data:${part.imageMimeType};base64,${part.imageBase64}`;
    a.download = `adforge-${part.templateId}-${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="ad-preview-card max-w-[420px] w-full">
      {/* Image */}
      <div className={`relative w-full overflow-hidden ${FORMAT_ASPECT[part.format] ?? "aspect-square"} bg-[#111]`}>
        <img
          src={`data:${part.imageMimeType};base64,${part.imageBase64}`}
          alt={`Ad: ${part.templateName}`}
          className="w-full h-full object-cover"
        />
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
  );
}
