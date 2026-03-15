"use client";

import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";

interface Template {
  id: number;
  category: string;
  name: string;
  strategyNote: string;
  formats: string[];
}

const CATEGORY_NAMES: Record<string, string> = {
  A: "Performance",
  B: "Social Proof",
  C: "UGC / Native",
  D: "Educational",
  E: "Advanced Visual",
  F: "Brand Building"
};

export function TemplateGallery({ sendMessage }: { sendMessage: (text: string) => void }) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("A");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data: Template[]) => {
        setTemplates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load templates", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-8 text-white/50 animate-pulse text-sm">
        Loading template gallery...
      </div>
    );
  }

  // Get unique sorted categories
  const categories = Array.from(new Set(templates.map((t) => t.category))).sort();
  const visibleTemplates = templates.filter((t) => t.category === activeCategory);

  const handleSelect = (template: Template) => {
    sendMessage(`I want to use template ${template.id} (${template.name}).`);
  };

  return (
    <div className="w-full max-w-2xl mt-2 mb-4">
      {/* Category Pills (Horizontal Scroll) */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2 mask-linear">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {CATEGORY_NAMES[cat] || `Category ${cat}`}
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        {visibleTemplates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleSelect(template)}
            className="group relative flex flex-col p-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:bg-white/[0.08] hover:border-white/15"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono font-medium text-white/40 group-hover:text-indigo-400 transition-colors">
                {String(template.id).padStart(2, "0")}
              </span>
              <div className="flex gap-1 flex-wrap justify-end">
                {template.formats.map((f) => (
                  <span key={f} className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-sm bg-white/10 text-white/70">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-[15px] font-semibold text-white/90 leading-snug mb-2 group-hover:text-white transition-colors line-clamp-2">
              {template.name}
            </h3>
            
            <p className="text-xs text-white/50 leading-relaxed line-clamp-3 mt-auto">
              {template.strategyNote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
