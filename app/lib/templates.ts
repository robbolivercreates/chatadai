import * as fs from "fs";
import * as path from "path";

// ─── Types ───────────────────────────────────────────────────────
export interface TemplateVariable {
  key: string;
  fill: "brand_dna" | "ai_copy" | "user_input";
  note?: string;
}

export type TemplateDifficulty = "Fácil" | "Médio" | "Avançado";

export interface TemplateData {
  id: number;
  category: string;
  name: string;
  name_pt?: string;
  strategyNote: string;
  strategyNote_pt?: string;
  formats: string[];
  recommendedFormat: string;
  variables: TemplateVariable[];
  prompt: string;
  /** Admin-only: invisible tags used for market segmentation and AI recommendations */
  marketTags: string[];
  /** User-facing: short description of what this template is best used for */
  useCase: string;
  /** User-facing: 2–4 audience/use-case chips */
  bestFor: string[];
  /** User-facing: complexity level */
  difficulty: TemplateDifficulty;
}

// ─── Singleton cache (mtime-aware so dev changes auto-reload) ────
const _cache = new Map<string, Map<number, TemplateData>>();
const _cacheMtime = new Map<string, number>();

/**
 * Parse TEMPLATES_{lang}.md and return a Map<id, TemplateData>.
 * Cache is invalidated whenever the file's mtime changes.
 */
export function loadTemplates(language: "en" | "pt" = "en"): Map<number, TemplateData> {
  const cacheKey = language;
  const fileName = language === "pt" ? "TEMPLATES_PT.md" : "TEMPLATES_EN.md";
  const filePath = path.join(process.cwd(), fileName);

  // Check if file has changed since last load
  let currentMtime = 0;
  try { currentMtime = fs.statSync(filePath).mtimeMs; } catch { /* file missing */ }

  if (_cache.has(cacheKey) && _cacheMtime.get(cacheKey) === currentMtime) {
    return _cache.get(cacheKey)!;
  }


  if (!fs.existsSync(filePath)) {
    console.error(`[Templates] ${fileName} not found at`, filePath);
    const emptyMap = new Map();
    _cache.set(cacheKey, emptyMap);
    return emptyMap;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const templates = new Map<number, TemplateData>();

  // Split by template headers: ### Template N — Name
  const templateSections = raw.split(/(?=### Template \d+)/);

  for (const section of templateSections) {
    const headerMatch = section.match(/^### Template (\d+)\s*[—–-]\s*(.+)/m);
    if (!headerMatch) continue;

    const id = parseInt(headerMatch[1], 10);
    const name = headerMatch[2].trim();

    // Extract YAML block
    const yamlMatch = section.match(/```yaml\s*([\s\S]*?)```/);
    if (!yamlMatch) continue;
    const yamlContent = yamlMatch[1].trim();

    // Parse YAML fields manually (simple parser)
    const category = yamlContent.match(/^category:\s*(.+)/m)?.[1]?.trim() || "";
    const strategyNote = yamlContent.match(/^strategy_note:\s*(.+)/m)?.[1]?.trim() || "";
    const namePt = yamlContent.match(/^name_pt:\s*"(.+)"/m)?.[1]?.trim();
    const strategyNotePt = yamlContent.match(/^strategy_note_pt:\s*"(.+)"/m)?.[1]?.trim();
    const formatsMatch = yamlContent.match(/^formats:\s*\[(.+)\]/m);
    const formats = formatsMatch
      ? formatsMatch[1].split(",").map((f) => f.trim().replace(/['"]/g, ""))
      : ["4:5"];
    const recommendedFormat = yamlContent.match(/^recommended_format:\s*(.+)/m)?.[1]?.trim() || "4:5";

    // New discovery fields — optional, fall back to defaults
    const marketTagsRaw = yamlContent.match(/^market_tags:\s*\[(.+)\]/m)?.[1] || "";
    const marketTags = marketTagsRaw
      ? marketTagsRaw.split(",").map((t) => t.trim().replace(/['"]/g, "")).filter(Boolean)
      : [];
    const useCase = yamlContent.match(/^use_case:\s*"?(.+?)"?$/m)?.[1]?.trim() || "";
    const bestForRaw = yamlContent.match(/^best_for:\s*\[(.+)\]/m)?.[1] || "";
    const bestFor = bestForRaw
      ? bestForRaw.split(",").map((b) => b.trim().replace(/['"]/g, "")).filter(Boolean)
      : [];
    const difficultyRaw = yamlContent.match(/^difficulty:\s*(.+)/m)?.[1]?.trim() || "Médio";
    const difficulty = (["Fácil", "Médio", "Avançado"].includes(difficultyRaw)
      ? difficultyRaw
      : "Médio") as TemplateData["difficulty"];

    // Parse variables
    const variables: TemplateVariable[] = [];
    const varBlocks = yamlContent.split(/(?=  - key:)/);
    for (const block of varBlocks) {
      const keyMatch = block.match(/- key:\s*(.+)/);
      if (!keyMatch) continue;
      const key = keyMatch[1].trim();
      const fillMatch = block.match(/fill:\s*(.+)/);
      const fill = (fillMatch?.[1]?.trim() || "user_input") as TemplateVariable["fill"];
      const noteMatch = block.match(/note:\s*(.+)/);
      const note = noteMatch?.[1]?.trim();
      variables.push({ key, fill, note });
    }

    // Extract prompt block (after "**Prompt:**")
    const promptSectionMatch = section.match(/\*\*Prompt:\*\*\s*```\s*([\s\S]*?)```/);
    const prompt = promptSectionMatch ? promptSectionMatch[1].trim() : "";

    if (!prompt) continue;

    templates.set(id, {
      id,
      category,
      name,
      name_pt: namePt,
      strategyNote,
      strategyNote_pt: strategyNotePt,
      formats,
      recommendedFormat,
      variables,
      prompt,
      marketTags,
      useCase,
      bestFor,
      difficulty,
    });
  }

  console.log(`[Templates] Loaded ${templates.size} templates from ${fileName}`);
  _cache.set(cacheKey, templates);
  _cacheMtime.set(cacheKey, currentMtime);
  return templates;
}

/**
 * Get a single template by ID.
 */
export function getTemplate(id: number, language: "en" | "pt" = "en"): TemplateData | undefined {
  return loadTemplates(language).get(id);
}

/**
 * Fill a template prompt by replacing [VARIABLE NAME] with actual values.
 * 
 * @param template - The template data
 * @param variables - Map of variable key → value (e.g. {"BRAND COLOR": "#D896FF"})
 * @param format - The selected format (e.g. "4:5")
 * @returns The fully assembled prompt string
 */
export function fillTemplatePrompt(
  template: TemplateData,
  variables: Record<string, string>,
  format: string
): string {
  let prompt = template.prompt;

  // Sort keys by length descending to prevent prefix collisions (e.g. "BRAND COLOR" before "BRAND")
  const sortedEntries = Object.entries(variables).sort((a, b) => b[0].length - a[0].length);

  // Helper: do one pass of variable replacement
  const replacePass = () => {
    for (const [key, value] of sortedEntries) {
      const cleanValue = value.replace(/^\[|\]$/g, "").trim();
      const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\[${escapedKey}(?:[\\s,:][^\\]]*)?\\]`, "gi");
      prompt = prompt.replace(regex, cleanValue);
    }
  };

  // ── Pass 1: Replace simple (innermost) variables first ──
  // This resolves nested brackets from the inside out.
  // e.g. "[TITULO like O Que Faz [PRODUTO] Ser Diferente]"
  //       → inner [PRODUTO] replaced → "[TITULO like O Que Faz Calça Capri Ser Diferente]"
  //       → then outer [TITULO ...] can be matched in pass 2
  replacePass();

  // Replace [FORMAT] placeholder
  prompt = prompt.replace(/\[FORMAT\]/gi, format);

  // ── Range variables: merge numbered values ──
  // Template: "[BENEFICIO 1-4 em portugues]" → agent sends BENEFICIO 1, BENEFICIO 2, etc.
  const rangeRegex = /\[([A-Za-zÀ-ÿ\s]+?)(\d+)-(\d+)([^\]]*)\]/g;
  let rangeMatch;
  while ((rangeMatch = rangeRegex.exec(prompt)) !== null) {
    const prefix = rangeMatch[1].trim();
    const start = parseInt(rangeMatch[2], 10);
    const end = parseInt(rangeMatch[3], 10);
    const fullMatch = rangeMatch[0];
    const parts: string[] = [];
    for (let i = start; i <= end; i++) {
      const val =
        variables[`${prefix} ${i}`] ||
        variables[`${prefix}${i}`] ||
        variables[`${prefix.toUpperCase()} ${i}`] ||
        variables[`${prefix.toLowerCase()} ${i}`];
      if (val) parts.push(val.replace(/^\[|\]$/g, "").trim());
    }
    if (parts.length > 0) {
      prompt = prompt.replace(fullMatch, parts.map((p) => `"${p}"`).join(", "));
    }
  }

  // ── Pass 2: Now replace outer brackets that were previously nested ──
  replacePass();

  // Generic fallbacks
  prompt = prompt.replace(/\[YOUR PRODUCT[^\]]*\]/gi, variables["YOUR PRODUCT"] || variables["SEU PRODUTO"] || "the product");
  prompt = prompt.replace(/\[SEU PRODUTO[^\]]*\]/gi, variables["SEU PRODUTO"] || variables["YOUR PRODUCT"] || "o produto");
  prompt = prompt.replace(/\[BRAND[^\]]*\]/gi, variables["BRAND"] || variables["BRAND NAME"] || variables["MARCA"] || "the brand");
  prompt = prompt.replace(/\[MARCA[^\]]*\]/gi, variables["MARCA"] || variables["BRAND"] || "a marca");
  prompt = prompt.replace(/\[PRODUTO[^\]]*\]/gi, variables["SEU PRODUTO"] || variables["YOUR PRODUCT"] || "o produto");

  // ── Pass 3 (final): Remove ALL remaining [brackets] ──
  // Any [text] left is an unreplaced placeholder — strip the brackets.
  prompt = prompt.replace(/\[([^\]]{1,120})\]/g, "$1");

  // ── Orphan bracket cleanup ──
  // Remove any stray ] that has no matching [ before it
  // (caused by nested bracket partial matches)
  prompt = prompt.replace(/(?<!\[)\](?!\[)/g, "");

  return prompt;
}

/**
 * Build the compressed template reference for the system prompt.
 * Includes variable info for each template so the agent knows what to collect.
 */
export function getTemplateReference(language: "en" | "pt" = "en"): string {
  const templates = loadTemplates(language);
  const lines: string[] = ["AVAILABLE TEMPLATES (with variable details):\n"];

  let currentCategory = "";

  for (const [, t] of templates) {
    if (t.category !== currentCategory) {
      currentCategory = t.category;
      lines.push(`\n--- CATEGORY ${currentCategory} ---`);
    }

    const varSummary = t.variables
      .map((v) => `${v.key}(${v.fill})`)
      .join(", ");

    lines.push(`[${t.id}] ${t.name} | Formats: ${t.formats.join(",")} | Vars: ${varSummary}`);
  }

  return lines.join("\n");
}
