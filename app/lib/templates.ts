import * as fs from "fs";
import * as path from "path";

// ─── Types ───────────────────────────────────────────────────────
export interface TemplateVariable {
  key: string;
  fill: "brand_dna" | "ai_copy" | "user_input";
  note?: string;
}

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
}

// ─── Singleton cache ─────────────────────────────────────────────
const _cache = new Map<string, Map<number, TemplateData>>();

/**
 * Parse TEMPLATES_{lang}.md and return a Map<id, TemplateData>.
 * Results are cached after first load per language.
 */
export function loadTemplates(language: "en" | "pt" = "en"): Map<number, TemplateData> {
  const cacheKey = language;
  if (_cache.has(cacheKey)) return _cache.get(cacheKey)!;

  const fileName = language === "pt" ? "TEMPLATES_PT.md" : "TEMPLATES_EN.md";
  const filePath = path.join(process.cwd(), fileName);

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
    });
  }

  console.log(`[Templates] Loaded ${templates.size} templates from ${fileName}`);
  _cache.set(cacheKey, templates);
  return templates;
}

/**
 * Get a single template by ID.
 */
export function getTemplate(id: number): TemplateData | undefined {
  return loadTemplates().get(id);
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

  // Replace each variable placeholder
  for (const [key, value] of sortedEntries) {
    // Match [KEY] or [KEY, ...] or [KEY: ...] or [KEY like ...]
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\[${escapedKey}(?:[\\s,:][^\\]]*)?\\]`, "gi");
    prompt = prompt.replace(regex, value);
  }

  // Replace [FORMAT] placeholder
  prompt = prompt.replace(/\[FORMAT\]/gi, format);

  // Replace [YOUR PRODUCT] if not already replaced (generic fallback)
  prompt = prompt.replace(/\[YOUR PRODUCT[^\]]*\]/gi, variables["YOUR PRODUCT"] || "the product");

  // Replace [BRAND] if not already replaced
  prompt = prompt.replace(/\[BRAND[^\]]*\]/gi, variables["BRAND"] || variables["BRAND NAME"] || "the brand");

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
