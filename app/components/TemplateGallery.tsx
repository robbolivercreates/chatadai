"use client";

import { useEffect, useState, useRef } from "react";
import { useChatStore } from "../store/useChatStore";

interface Template {
  id: number;
  category: string;
  name: string;
  name_pt?: string;
  strategyNote: string;
  strategyNote_pt?: string;
  formats: string[];
  recommendedFormat?: string;
}

const CATEGORY_NAMES: Record<string, string> = {
  A: "Performance",
  B: "Social Proof",
  C: "UGC / Native",
  D: "Educational",
  E: "Advanced Visual",
  F: "Brand Building",
  G: "Infoprodutos / Digital"
};

const CATEGORY_NAMES_PT: Record<string, string> = {
  A: "Performance Direta",
  B: "Prova Social Máxima",
  C: "Conteúdo Nativo (UGC)",
  D: "Educação Analítica",
  E: "Avanço Visual",
  F: "Branding de Luxo",
  G: "Infoprodutos & Mercado Digital"
};

import { useSettingsStore } from "../store/useSettingsStore";

// The simplified gallery now only shows 4:5 format thumbnails
const THUMB_FORMAT = "4:5";
// --- Simplified Card Component ---
function TemplateCard({ template, onClick, isDevMode, language, refreshSignal }: { template: Template, onClick: () => void, isDevMode?: boolean, language: string, refreshSignal?: number }) {
  const [imageError, setImageError] = useState<boolean>(false);
  const [thumbnailTimestamp, setThumbnailTimestamp] = useState(Date.now());
  const [isGenerating, setIsGenerating] = useState(false);

  // Refresh image check when parent triggers a batch-generation update
  useEffect(() => {
    if (refreshSignal) {
      setImageError(false);
      setThumbnailTimestamp(Date.now());
    }
  }, [refreshSignal]);

  const imageUrl = `/thumbnails/${language}/${template.id}_4x5.jpg?t=${thumbnailTimestamp}`;

  const generateThumbnail = async () => {
    setIsGenerating(true);
    const apiKey = useSettingsStore.getState().geminiApiKey;
    try {
      const res = await fetch("/api/generate-thumbnail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey, templateId: template.id, format: THUMB_FORMAT, language }),
      });
      if (res.ok) {
        setImageError(false);
        setThumbnailTimestamp(Date.now());
      }
    } catch (e) {
      console.error(`Error generating ${THUMB_FORMAT}:`, e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div
      className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-black/30 hover:border-white/25 transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      {/* === IMAGE AREA === */}
      <div className="relative overflow-hidden w-full aspect-[4/5]" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-full bg-black/60">
          {!imageError ? (
            <img
              src={imageUrl}
              onError={() => setImageError(true)}
              className="absolute inset-0 w-full h-full object-contain"
              alt={`${template.name} ${THUMB_FORMAT}`}
              draggable={false}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{THUMB_FORMAT}</span>
            </div>
          )}
          <div className="absolute top-1 left-1 px-1 py-0.5 rounded text-[7px] font-bold bg-black/70 text-white/40">{THUMB_FORMAT}</div>
        </div>

        {/* ⚡ Generate Button — visible on hover */}
        {!isGenerating && (
          <button
            className="absolute top-1.5 right-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-400/90 hover:bg-amber-300 text-black text-[9px] font-bold shadow-lg"
            onClick={(e) => { e.stopPropagation(); generateThumbnail(); }}
            title={`Gerar thumbnail (${THUMB_FORMAT})`}
          >
            ⚡ Gerar
          </button>
        )}

        {/* Generating overlay */}
        {isGenerating && (
          <div className="absolute inset-0 z-20 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5">
            <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[9px] text-amber-400 uppercase font-bold tracking-wider">Gerando…</span>
          </div>
        )}
      </div>

      {/* === INFO AREA === */}
      <div className="flex flex-col px-2 py-1.5">
        <span className="text-[7px] uppercase font-mono tracking-widest text-white/25 group-hover:text-amber-400 transition-colors">
          {String(template.id).padStart(2, "0")}
        </span>
        <h3 className="text-[10px] font-semibold text-white/75 leading-snug group-hover:text-white transition-colors line-clamp-2">
          {template.name}
        </h3>
      </div>
    </div>
  );
}

export function TemplateGallery({ sendMessage, isDevMode }: { sendMessage: (text: string) => void, isDevMode?: boolean }) {
  const { language } = useSettingsStore();

  const [templates, setTemplates] = useState<Template[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("A");
  const [loading, setLoading] = useState(true);
  const [bulkGenerating, setBulkGenerating] = useState(false);
  const [bulkProgress, setBulkProgress] = useState({ done: 0, total: 0 });
  const [refreshSignals, setRefreshSignals] = useState<Record<number, number>>({});

  useEffect(() => {
    async function fetchTemplates() {
      try {
        setLoading(true);
        const res = await fetch(`/api/templates?lang=${language}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Template[] = await res.json();
        setTemplates(data);
      } catch (err) {
        console.error("Failed to load templates", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, [language]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-8 text-white/50 animate-pulse text-sm">
        Loading template gallery...
      </div>
    );
  }

  // Get unique sorted categories
  const categories = Array.from(new Set(templates.map((t) => t.category))).sort();
  
  // Logic for Developer Mode vs Normal Mode
  let visibleTemplates = templates;
  if (isDevMode) {
    // In DevMode, show ALL templates. Sort Brazilian exclusives (IDs 29-44 as an example range, or Category C/D/E) to the top.
    // Let's assume Brazilian templates are those with ID >= 29
    visibleTemplates = [...templates].sort((a, b) => {
      const aIsBr = a.id >= 29;
      const bIsBr = b.id >= 29;
      if (aIsBr && !bIsBr) return -1;
      if (!aIsBr && bIsBr) return 1;
      return a.id - b.id; // secondary sort by ID
    });
  } else {
    // Normal Mode: filter by category
    visibleTemplates = templates.filter((t) => t.category === activeCategory);
  }

  const handleSelect = (template: Template) => {
    const msg = language === "pt" 
      ? `Quero usar o template ${template.id} (${template.name}).`
      : `I want to use template ${template.id} (${template.name}).`;
    sendMessage(msg);
  };

  const generateAllMissing = async () => {
    const apiKey = useSettingsStore.getState().geminiApiKey;
    if (!apiKey || bulkGenerating) return;
    setBulkGenerating(true);
    const toGenerate = [...visibleTemplates];
    setBulkProgress({ done: 0, total: toGenerate.length });
    // Process 3 at a time
    const CONCURRENCY = 3;
    for (let i = 0; i < toGenerate.length; i += CONCURRENCY) {
      const batch = toGenerate.slice(i, i + CONCURRENCY);
      await Promise.allSettled(
        batch.map(async (t) => {
          try {
            await fetch("/api/generate-thumbnail", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ apiKey, templateId: t.id, format: "4:5", language }),
            });
            // Trigger re-render for this specific card
            setRefreshSignals(prev => ({ ...prev, [t.id]: Date.now() }));
          } catch {/* skip */}
        })
      );
      setBulkProgress(prev => ({ ...prev, done: Math.min(i + CONCURRENCY, toGenerate.length) }));
    }
    setBulkGenerating(false);
  };

  return (
    <div className="w-full mt-2 mb-4">
      {/* Category Pills (Horizontal Scroll) - Hide in Dev Mode */}
      {!isDevMode && (
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
              {language === "pt" ? (CATEGORY_NAMES_PT[cat] || `Categoria ${cat}`) : (CATEGORY_NAMES[cat] || `Category ${cat}`)}
            </button>
          ))}
        </div>
      )}

      {/* Dev Mode Banner */}
      {isDevMode && (
        <div className="w-full mb-4 rounded border border-amber-500/20 bg-amber-500/10 overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-3 py-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              DEV MODE • {templates.length} TEMPLATES
            </span>
            <button
              onClick={generateAllMissing}
              disabled={bulkGenerating}
              className="shrink-0 px-3 py-1 text-xs font-bold rounded bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {bulkGenerating
                ? `⏳ ${bulkProgress.done}/${bulkProgress.total} geradas...`
                : "⚡ Gerar Todas"}
            </button>
          </div>
          {bulkGenerating && (
            <div className="w-full h-1 bg-amber-500/10">
              <div
                className="h-full bg-amber-500 transition-all duration-300"
                style={{ width: `${bulkProgress.total ? (bulkProgress.done / bulkProgress.total) * 100 : 0}%` }}
              />
            </div>
          )}
        </div>
      )}

      {/* Template Grid */}
    <div className={`grid mt-2 ${isDevMode ? "grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5" : "grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2"}`}>
        {visibleTemplates.map((template) => (
          <TemplateCard 
            key={template.id} 
            template={template} 
            onClick={() => handleSelect(template)} 
            isDevMode={isDevMode}
            language={language}
            refreshSignal={refreshSignals[template.id]}
          />
        ))}
      </div>
    </div>
  );
}
