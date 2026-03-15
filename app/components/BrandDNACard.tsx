"use client";

import type { BrandDNAPart } from "../types";

interface Props {
  part: BrandDNAPart;
}

export function BrandDNACard({ part }: Props) {
  return (
    <div className="brand-dna-card max-w-[520px] w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
          style={{ background: "rgba(99,102,241,0.24)", color: "#a5b4fc" }}
        >
          ✦
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            {part.brandName}
          </p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Brand DNA · {part.productName}
          </p>
        </div>
      </div>

      {/* Colors */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-6 h-6 rounded-full ring-1 ring-white/10"
          style={{ background: part.primaryColor }}
          title={`Primary: ${part.primaryColor}`}
        />
        <div
          className="w-6 h-6 rounded-full ring-1 ring-white/10"
          style={{ background: part.secondaryColor }}
          title={`Secondary: ${part.secondaryColor}`}
        />
        {part.accentColor && part.accentColor !== part.secondaryColor && (
          <div
            className="w-6 h-6 rounded-full ring-1 ring-white/10"
            style={{ background: part.accentColor }}
            title={`Accent: ${part.accentColor}`}
          />
        )}
        <span className="text-xs ml-1" style={{ color: "var(--text-tertiary)" }}>
          {part.primaryColor} · {part.secondaryColor}
          {part.accentColor && part.accentColor !== part.secondaryColor ? ` · ${part.accentColor}` : ""}
        </span>
      </div>

      {/* Tone */}
      <div className="flex flex-wrap gap-1.5 mb-4">

        {/* Typography (inline with tone pills) */}
        {part.typographyStyle && (
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{ background: "rgba(99,102,241,0.12)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            🅰 {part.typographyStyle}
          </span>
        )}

        {part.toneAdjectives.map((adj) => (
          <span
            key={adj}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{ background: "rgba(255,255,255,0.07)", color: "var(--text-secondary)", border: "1px solid var(--border-main)" }}
          >
            {adj}
          </span>
        ))}
      </div>

      {/* Positioning */}
      <p className="text-[13px] leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
        {part.positioning}
      </p>

      {/* Benefits */}
      {part.keyBenefits.length > 0 && (
        <ul className="space-y-1">
          {part.keyBenefits.slice(0, 4).map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "#a5b4fc" }}>•</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
