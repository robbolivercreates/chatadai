"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

interface ScrapedImage {
  data: string;
  mimeType: string;
  url: string;
}

interface Props {
  images: ScrapedImage[];
  onConfirm: (selected: ScrapedImage[]) => void;
}

export function ImagePicker({ images, onConfirm }: Props) {
  const t = useTranslations("chat");
  const [selected, setSelected] = useState<Set<number>>(new Set(images.map((_, i) => i)));

  const toggleImage = (index: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleConfirm = () => {
    const selectedImages = images.filter((_, i) => selected.has(i));
    onConfirm(selectedImages);
  };

  return (
    <div className="w-full max-w-lg mt-3 mb-2">
      <p className="text-xs font-medium mb-3" style={{ color: "var(--text-secondary)" }}>
        {t("foundImages")}
      </p>

      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => toggleImage(i)}
            className="relative flex-shrink-0 cursor-pointer group transition-all duration-200"
            style={{
              width: 120,
              height: 120,
              borderRadius: 12,
              overflow: "hidden",
              border: selected.has(i) ? "2px solid #6366f1" : "2px solid transparent",
              boxShadow: selected.has(i) ? "0 0 16px rgba(99,102,241,0.3)" : "0 2px 8px rgba(0,0,0,0.3)",
              opacity: selected.has(i) ? 1 : 0.5,
            }}
          >
            <img
              src={`data:${img.mimeType};base64,${img.data}`}
              alt={`Product ${i + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Selection indicator */}
            <div
              className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={{
                background: selected.has(i) ? "#6366f1" : "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.6)",
              }}
            >
              {selected.has(i) ? "✓" : ""}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirm}
        disabled={selected.size === 0}
        className="mt-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
        style={{
          background: selected.size > 0 ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.05)",
          color: selected.size > 0 ? "#a5b4fc" : "var(--text-tertiary)",
          border: selected.size > 0 ? "1px solid rgba(99,102,241,0.4)" : "1px solid var(--border-main)",
          cursor: selected.size > 0 ? "pointer" : "not-allowed",
        }}
      >
        {selected.size === 1 ? t("useImage") : t("useImages").replace("{count}", String(selected.size))}
      </button>
    </div>
  );
}
