"use client";

import type { AdFormat } from "../types";

const FORMATS: { value: AdFormat; label: string; desc: string }[] = [
  { value: "4:5",  label: "4:5",  desc: "Meta Feed" },
  { value: "9:16", label: "9:16", desc: "Stories / Reels" },
  { value: "1:1",  label: "1:1",  desc: "Square" },
  { value: "16:9", label: "16:9", desc: "Landscape" },
];

interface Props {
  selected: AdFormat | null;
  onSelect: (format: AdFormat) => void;
}

export function FormatSelector({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {FORMATS.map((f) => (
        <button
          key={f.value}
          onClick={() => onSelect(f.value)}
          className={`format-pill ${selected === f.value ? "active" : ""}`}
        >
          <span className="font-semibold">{f.label}</span>
          <span className="opacity-60 text-[11px] ml-1">{f.desc}</span>
        </button>
      ))}
    </div>
  );
}
