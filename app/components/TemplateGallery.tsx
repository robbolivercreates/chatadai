"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useChatStore } from "../store/useChatStore";
import { useSettingsStore } from "../store/useSettingsStore";

// ─── Types ────────────────────────────────────────────────────────

type Difficulty = "Fácil" | "Médio" | "Avançado";

interface Template {
  id: number;
  category: string;
  name: string;
  name_pt?: string;
  strategyNote: string;
  strategyNote_pt?: string;
  formats: string[];
  recommendedFormat?: string;
  marketTags: string[];
  useCase: string;
  bestFor: string[];
  difficulty: Difficulty;
}

// ─── Constants ────────────────────────────────────────────────────

const CATEGORY_NAMES: Record<string, string> = {
  A: "Performance",
  B: "Social Proof",
  C: "UGC / Native",
  D: "Educational",
  E: "Advanced Visual",
  F: "Brand Building",
  G: "Infoprodutos / Digital",
};

const CATEGORY_NAMES_PT: Record<string, string> = {
  A: "Performance Direta",
  B: "Prova Social Máxima",
  C: "Conteúdo Nativo (UGC)",
  D: "Educação Analítica",
  E: "Avanço Visual",
  F: "Branding de Luxo",
  G: "Infoprodutos & Mercado Digital",
};

// Market segments — the tags map to invisible marketTags on each template
const MARKET_SEGMENTS = [
  { id: "all", label: "Todos", emoji: "🛒", tags: [] },
  { id: "oferta", label: "Oferta & Preço", emoji: "💰", tags: ["pix", "parcelamento", "frete-gratis", "oferta", "preco"] },
  { id: "prova", label: "Prova Social", emoji: "⭐", tags: ["depoimento", "review", "reclame-aqui", "ugc", "prova-social", "trust"] },
  { id: "redes", label: "Redes Sociais", emoji: "📱", tags: ["instagram", "stories", "ugc", "native", "advertorial", "scroll-stop"] },
  { id: "ecommerce", label: "E-commerce", emoji: "🏪", tags: ["ecommerce", "produto-fisico", "kit", "mercado-livre", "comparacao"] },
  { id: "saude", label: "Saúde & Beleza", emoji: "🧴", tags: ["saude", "suplemento", "beleza", "antes-depois", "stats"] },
  { id: "infoproduto", label: "Infoprodutos", emoji: "🎓", tags: ["infoproduto", "curso", "digital", "editorial", "viral"] },
  { id: "branding", label: "Branding", emoji: "🏆", tags: ["branding", "manifesto", "editorial", "imprensa", "autoridade", "luxo"] },
];

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  "Fácil": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "Médio": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  "Avançado": "text-rose-400 bg-rose-400/10 border-rose-400/30",
};

// BR default recommendations used before the AI populates them
const BR_DEFAULT_RECOMMENDATIONS = [2, 6, 11, 3];

const THUMB_FORMAT = "4:5";

// ─── Tooltip ──────────────────────────────────────────────────────

function TemplateTooltip({ template }: { template: Template }) {
  const diffColor = DIFFICULTY_COLORS[template.difficulty] ?? DIFFICULTY_COLORS["Médio"];
  return (
    <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-50 w-52 rounded-xl border border-white/15 bg-[#12131a]/95 backdrop-blur-md shadow-2xl p-3 pointer-events-none">
      {/* Arrow */}
      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#12131a] border-r border-b border-white/15" />
      {template.useCase ? (
        <>
          <p className="text-[10px] text-white/70 leading-snug mb-2">{template.useCase}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {template.bestFor?.slice(0, 3).map((tag) => (
              <span key={tag} className="px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                {tag}
              </span>
            ))}
          </div>
          <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[8px] font-semibold ${diffColor}`}>
            {template.difficulty === "Fácil" ? "●" : template.difficulty === "Médio" ? "●●" : "●●●"} {template.difficulty}
          </span>
        </>
      ) : (
        <p className="text-[10px] text-white/40 italic">Template {template.id}</p>
      )}
    </div>
  );
}

// ─── Info Drawer ──────────────────────────────────────────────────

function TemplateDrawer({
  template,
  onClose,
  onUse,
  isDevMode,
  language,
}: {
  template: Template;
  onClose: () => void;
  onUse: (t: Template) => void;
  isDevMode?: boolean;
  language: string;
}) {
  const [devOpen, setDevOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageUrl = `/thumbnails/${language}/${template.id}_4x5.jpg`;
  const displayName = language === "pt" && template.name_pt ? template.name_pt : template.name;
  const diffColor = DIFFICULTY_COLORS[template.difficulty] ?? DIFFICULTY_COLORS["Médio"];

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm flex flex-col bg-[#0e0f17] border-l border-white/10 shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/8">
          <div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Template {String(template.id).padStart(2, "0")}</span>
            <h2 className="text-sm font-semibold text-white leading-snug mt-0.5">{displayName}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Thumbnail */}
          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-black/50 border border-white/8">
            {!imageError ? (
              <img
                src={imageUrl}
                onError={() => setImageError(true)}
                className="w-full h-full object-contain"
                alt={displayName}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <span className="text-xs text-white/20">Thumbnail não gerada</span>
                </div>
              </div>
            )}
          </div>

          {/* Use case */}
          {template.useCase && (
            <div className="rounded-lg bg-indigo-500/8 border border-indigo-500/20 px-3 py-2.5">
              <p className="text-[11px] text-indigo-200/80 leading-relaxed">{template.useCase}</p>
            </div>
          )}

          {/* Difficulty + Category */}
          <div className="flex items-center gap-2 flex-wrap">
            {template.difficulty && (
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-[10px] font-semibold ${diffColor}`}>
                {template.difficulty === "Fácil" ? "●" : template.difficulty === "Médio" ? "●●" : "●●●"} {template.difficulty}
              </span>
            )}
            <span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-white/50">
              Categoria {template.category} · {language === "pt" ? CATEGORY_NAMES_PT[template.category] : CATEGORY_NAMES[template.category]}
            </span>
          </div>

          {/* Best For */}
          {template.bestFor?.length > 0 && (
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-1.5">Ideal para</p>
              <div className="flex flex-wrap gap-1.5">
                {template.bestFor.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 border border-white/10 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Formats */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-1.5">Formatos</p>
            <div className="flex gap-1.5">
              {template.formats.map((f) => (
                <span
                  key={f}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                    f === template.recommendedFormat
                      ? "bg-amber-400/15 border-amber-400/40 text-amber-300"
                      : "bg-white/5 border-white/10 text-white/40"
                  }`}
                >
                  {f} {f === template.recommendedFormat ? "★" : ""}
                </span>
              ))}
            </div>
          </div>

          {/* Dev notes — only in Dev Mode */}
          {isDevMode && (
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 overflow-hidden">
              <button
                onClick={() => setDevOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-bold text-amber-500/80 uppercase tracking-widest hover:bg-amber-500/10 transition-colors"
              >
                <span>⚙️ Dev Notes</span>
                <span>{devOpen ? "▲" : "▼"}</span>
              </button>
              {devOpen && (
                <div className="px-3 pb-3 space-y-2">
                  <div>
                    <p className="text-[8px] text-amber-500/50 uppercase mb-1">Market Tags (invisíveis ao usuário)</p>
                    <div className="flex flex-wrap gap-1">
                      {template.marketTags?.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[8px] font-mono text-amber-400">
                          {t}
                        </span>
                      ))}
                      {(!template.marketTags || template.marketTags.length === 0) && (
                        <span className="text-[8px] text-amber-500/30 italic">Sem tags</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-[8px] text-amber-500/50 uppercase mb-1">Strategy Note</p>
                    <p className="text-[9px] text-amber-400/60 leading-relaxed">{template.strategyNote}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div className="px-5 py-4 border-t border-white/8">
          <button
            onClick={() => { onUse(template); onClose(); }}
            className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-[0.98]"
          >
            Usar este template →
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Template Card ────────────────────────────────────────────────

function TemplateCard({
  template,
  onClick,
  isDevMode,
  language,
  refreshSignal,
  compact,
}: {
  template: Template;
  onClick: () => void;
  isDevMode?: boolean;
  language: string;
  refreshSignal?: number;
  compact?: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const [thumbnailTimestamp, setThumbnailTimestamp] = useState(Date.now());
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (refreshSignal) {
      setImageError(false);
      setThumbnailTimestamp(Date.now());
    }
  }, [refreshSignal]);

  const imageUrl = `/thumbnails/${language}/${template.id}_4x5.jpg?t=${thumbnailTimestamp}`;
  const displayName = language === "pt" && template.name_pt ? template.name_pt : template.name;

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

  const handleMouseEnter = () => {
    tooltipTimeout.current = setTimeout(() => setShowTooltip(true), 400);
  };
  const handleMouseLeave = () => {
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    setShowTooltip(false);
  };

  return (
    <div
      className="group relative flex flex-col rounded-xl overflow-visible border border-white/10 bg-black/30 hover:border-white/25 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-200 cursor-pointer"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover tooltip */}
      {showTooltip && template.useCase && (
        <TemplateTooltip template={template} />
      )}

      {/* Image */}
      <div className="relative overflow-hidden w-full aspect-[4/5] rounded-t-xl">
        <div className="relative w-full h-full bg-black/60">
          {!imageError ? (
            <img
              src={imageUrl}
              onError={() => setImageError(true)}
              className="absolute inset-0 w-full h-full object-contain"
              alt={displayName}
              draggable={false}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{THUMB_FORMAT}</span>
            </div>
          )}
          <div className="absolute top-1 left-1 px-1 py-0.5 rounded text-[7px] font-bold bg-black/70 text-white/40">{THUMB_FORMAT}</div>
        </div>

        {/* Generate button */}
        {!isGenerating && (
          <button
            className="absolute top-1.5 right-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-400/90 hover:bg-amber-300 text-black text-[9px] font-bold shadow-lg"
            onClick={(e) => { e.stopPropagation(); generateThumbnail(); }}
            title={`Gerar thumbnail (${THUMB_FORMAT})`}
          >
            ⚡ Gerar
          </button>
        )}

        {isGenerating && (
          <div className="absolute inset-0 z-20 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5">
            <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[9px] text-amber-400 uppercase font-bold tracking-wider">Gerando…</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col px-2 py-1.5">
        <span className="text-[7px] uppercase font-mono tracking-widest text-white/25 group-hover:text-amber-400 transition-colors">
          {String(template.id).padStart(2, "0")}
        </span>
        <h3 className={`font-semibold text-white/75 leading-snug group-hover:text-white transition-colors line-clamp-2 ${compact ? "text-[9px]" : "text-[10px]"}`}>
          {displayName}
        </h3>
        {/* Difficulty dot — small visual cue */}
        {template.difficulty && !compact && (
          <span className={`mt-1 text-[7px] font-semibold uppercase tracking-wide ${
            template.difficulty === "Fácil" ? "text-emerald-400/60" :
            template.difficulty === "Médio" ? "text-amber-400/60" : "text-rose-400/60"
          }`}>
            {template.difficulty}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main Gallery ─────────────────────────────────────────────────

export function TemplateGallery({
  sendMessage,
  isDevMode,
  recommendedIds,
}: {
  sendMessage: (text: string) => void;
  isDevMode?: boolean;
  recommendedIds?: number[];
}) {
  const { language } = useSettingsStore();

  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [activeMarket, setActiveMarket] = useState("all");
  const [activeCategory, setActiveCategory] = useState("A");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [bulkGenerating, setBulkGenerating] = useState(false);
  const [bulkProgress, setBulkProgress] = useState({ done: 0, total: 0 });
  const [refreshSignals, setRefreshSignals] = useState<Record<number, number>>({});

  useEffect(() => {
    async function fetchTemplates() {
      try {
        setLoading(true);
        const res = await fetch(`/api/templates?lang=${language}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
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

  const handleSelect = useCallback((template: Template) => {
    const msg =
      language === "pt"
        ? `Quero usar o template ${template.id} (${template.name}).`
        : `I want to use template ${template.id} (${template.name}).`;
    sendMessage(msg);
  }, [language, sendMessage]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-8 text-white/50 animate-pulse text-sm">
        Carregando galeria...
      </div>
    );
  }

  const templateMap = Object.fromEntries(templates.map((t) => [t.id, t]));

  // Resolve recommended IDs
  const effectiveRecommendedIds = recommendedIds ?? BR_DEFAULT_RECOMMENDATIONS;
  const recommendedTemplates = effectiveRecommendedIds
    .map((id) => templateMap[id])
    .filter(Boolean) as Template[];

  // Market filter for expanded view
  const activeSegment = MARKET_SEGMENTS.find((s) => s.id === activeMarket)!;
  const filteredByMarket =
    activeMarket === "all"
      ? templates
      : templates.filter((t) =>
          activeSegment.tags.some((tag) => t.marketTags?.includes(tag))
        );

  // Category filter in expanded view
  const categories = Array.from(new Set(filteredByMarket.map((t) => t.category))).sort();
  const visibleTemplates = isDevMode
    ? templates
    : filteredByMarket.filter((t) => t.category === activeCategory);

  const generateAllMissing = async () => {
    const apiKey = useSettingsStore.getState().geminiApiKey;
    if (!apiKey || bulkGenerating) return;
    setBulkGenerating(true);
    const toGenerate = [...visibleTemplates];
    setBulkProgress({ done: 0, total: toGenerate.length });
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
            setRefreshSignals((prev) => ({ ...prev, [t.id]: Date.now() }));
          } catch {/* skip */}
        })
      );
      setBulkProgress((prev) => ({ ...prev, done: Math.min(i + CONCURRENCY, toGenerate.length) }));
    }
    setBulkGenerating(false);
  };

  return (
    <>
      {/* Info Drawer */}
      {selectedTemplate && (
        <TemplateDrawer
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          onUse={handleSelect}
          isDevMode={isDevMode}
          language={language}
        />
      )}

      <div className="w-full mt-2 mb-4">

        {/* ══════════ COLLAPSED VIEW: Recommendations ══════════ */}
        {!isDevMode && (
          <>
            {/* Recommended section header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-white/70">✨ Recomendados para o seu projeto</span>
              </div>
              {recommendedIds && (
                <span className="text-[9px] text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full font-medium">
                  IA selecionou
                </span>
              )}
            </div>

            {/* 4 Recommended Cards */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {(recommendedTemplates.length > 0 ? recommendedTemplates : templates.slice(0, 4)).map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onClick={() => handleSelect(template)}
                  language={language}
                  refreshSignal={refreshSignals[template.id]}
                />
              ))}
            </div>

            {/* Expand button */}
            {!expanded ? (
              <button
                onClick={() => setExpanded(true)}
                className="w-full py-2.5 rounded-xl border border-white/10 bg-white/3 hover:bg-white/7 text-white/50 hover:text-white/80 text-xs font-medium transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Ver todas as categorias</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </button>
            ) : (
              <>
                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-white/8" />
                  <span className="text-[9px] uppercase tracking-widest text-white/25 font-bold">Todos os templates</span>
                  <div className="flex-1 h-px bg-white/8" />
                </div>

                {/* Market Segment Bar */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 mb-3">
                  {MARKET_SEGMENTS.map((seg) => (
                    <button
                      key={seg.id}
                      onClick={() => {
                        setActiveMarket(seg.id);
                        // Reset category to first available
                        const filtered = seg.id === "all"
                          ? templates
                          : templates.filter((t) => seg.tags.some((tag) => t.marketTags?.includes(tag)));
                        const cats = Array.from(new Set(filtered.map((t) => t.category))).sort();
                        setActiveCategory(cats[0] || "A");
                      }}
                      className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                        activeMarket === seg.id
                          ? "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50"
                          : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
                      }`}
                    >
                      <span>{seg.emoji}</span>
                      <span>{seg.label}</span>
                    </button>
                  ))}
                </div>

                {/* Category Pills */}
                <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-2 px-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                        activeCategory === cat
                          ? "bg-white/15 text-white ring-1 ring-white/20"
                          : "bg-white/5 text-white/40 hover:bg-white/8 hover:text-white/70"
                      }`}
                    >
                      {language === "pt" ? CATEGORY_NAMES_PT[cat] || `Categoria ${cat}` : CATEGORY_NAMES[cat] || `Category ${cat}`}
                    </button>
                  ))}
                </div>

                {/* Full Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 mt-2">
                  {visibleTemplates.map((template) => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      onClick={() => handleSelect(template)}
                      language={language}
                      refreshSignal={refreshSignals[template.id]}
                      compact
                    />
                  ))}
                </div>

                {/* Collapse button */}
                <button
                  onClick={() => setExpanded(false)}
                  className="w-full mt-4 py-2 text-white/30 hover:text-white/50 text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <span className="rotate-180 inline-block">↓</span> Recolher
                </button>
              </>
            )}
          </>
        )}

        {/* ══════════ DEV MODE ══════════ */}
        {isDevMode && (
          <>
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
                  {bulkGenerating ? `⏳ ${bulkProgress.done}/${bulkProgress.total} geradas...` : "⚡ Gerar Todas"}
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

            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5">
              {templates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onClick={() => setSelectedTemplate(template)}
                  isDevMode
                  language={language}
                  refreshSignal={refreshSignals[template.id]}
                  compact
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
