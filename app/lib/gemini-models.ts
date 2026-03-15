/**
 * Gemini Model IDs — Single source of truth.
 * 
 * REGRA: Nunca use modelos 2.x ou 1.x. Apenas os modelos abaixo.
 * Para referência completa: /gemini-models workflow
 */

// ─── Text / Chat Models ──────────────────────────────────────────

/** Gemini 3.1 Pro — Raciocínio complexo, coding, agentes */
export const MODEL_PRO = "gemini-3.1-pro-preview";

/** Gemini 3 Flash — Uso geral, melhor custo-benefício ⚡ */
export const MODEL_FLASH = "gemini-3-flash-preview";

/** Gemini 3.1 Flash-Lite — Volume alto, tarefas simples */
export const MODEL_FLASH_LITE = "gemini-3.1-flash-lite-preview";

// ─── Image Models ────────────────────────────────────────────────

/** Nano Banana 2 — Geração/edição rápida e escalável 🖼️ */
export const MODEL_IMAGE = "gemini-3.1-flash-image-preview";

/** Nano Banana Pro — Imagens 4K, texto preciso, nível profissional ✨ */
export const MODEL_IMAGE_PRO = "gemini-3-pro-image-preview";

// ─── Defaults ────────────────────────────────────────────────────

/** Default model for chat/agent conversations */
export const MODEL_CHAT_DEFAULT = MODEL_FLASH;

/** Default model for image generation */
export const MODEL_IMAGE_DEFAULT = MODEL_IMAGE;
