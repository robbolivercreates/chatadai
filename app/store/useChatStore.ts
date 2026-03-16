"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ChatSession, ChatMessage, BrandDNA, MessagePart } from "../types";

function generateId(): string {
  return Math.random().toString(36).slice(2, 10);
}

/**
 * Strip heavy base64 data from messages before persisting to localStorage.
 * This prevents QuotaExceededError (localStorage limit is ~5MB).
 * In-memory state keeps full data for display.
 */
function sanitizeForStorage(sessions: ChatSession[]): ChatSession[] {
  return sessions.map((session) => ({
    ...session,
    messages: session.messages.map((msg) => ({
      ...msg,
      // Strip uploaded images (base64 product photos)
      uploadedImages: undefined,
      // Strip base64 from ad_preview parts but keep metadata
      parts: msg.parts?.map((part: MessagePart) => {
        if (part.type === "ad_preview") {
          return {
            ...part,
            imageBase64: "[stored_image]", // placeholder — image won't survive reload
          };
        }
        return part;
      }),
    })),
  }));
}

interface ChatStore {
  sessions: ChatSession[];
  activeChatId: string | null;

  createSession: () => string;
  setActiveSession: (id: string | null) => void;
  getActiveSession: () => ChatSession | null;
  updateMessages: (sessionId: string, messages: ChatMessage[]) => void;
  updateBrandDNA: (sessionId: string, dna: BrandDNA) => void;
  deleteSession: (sessionId: string) => void;
  clearAll: () => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      sessions: [],
      activeChatId: null,

      createSession: () => {
        const id = generateId();
        const session: ChatSession = {
          id,
          name: "New Session",
          messages: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        set((s) => ({ sessions: [session, ...s.sessions], activeChatId: id }));
        return id;
      },

      setActiveSession: (id) => {
        set({ activeChatId: id });
      },

      getActiveSession: () => {
        const { sessions, activeChatId } = get();
        return sessions.find((s) => s.id === activeChatId) ?? null;
      },

      updateMessages: (sessionId, messages) => {
        set((s) => ({
          sessions: s.sessions.map((session) =>
            session.id === sessionId
              ? {
                  ...session,
                  messages,
                  name: messages.find((m) => m.role === "user")?.content.slice(0, 40) || session.name,
                  updatedAt: Date.now(),
                }
              : session
          ),
        }));
      },

      updateBrandDNA: (sessionId, dna) => {
        set((s) => ({
          sessions: s.sessions.map((session) =>
            session.id === sessionId
              ? { ...session, brandDNA: dna, updatedAt: Date.now() }
              : session
          ),
        }));
      },

      deleteSession: (sessionId) => {
        set((s) => {
          const remaining = s.sessions.filter((x) => x.id !== sessionId);
          return {
            sessions: remaining,
            activeChatId:
              s.activeChatId === sessionId
                ? (remaining[0]?.id ?? null)
                : s.activeChatId,
          };
        });
      },

      clearAll: () => set({ sessions: [], activeChatId: null }),
    }),
    {
      name: "chatadai-store",
      // Custom storage: sanitize base64 before writing to localStorage
      storage: {
        getItem: (name) => {
          const raw = localStorage.getItem(name);
          if (!raw) return null;
          const parsed = JSON.parse(raw);
          // Always start on the welcome screen — clear activeChatId on load
          if (parsed?.state) {
            parsed.state.activeChatId = null;
          }
          return parsed;
        },
        setItem: (name, value) => {
          try {
            // Strip base64 from the state before persisting
            const sanitized = {
              ...value,
              state: {
                ...value.state,
                sessions: sanitizeForStorage(value.state.sessions || []),
              },
            };
            localStorage.setItem(name, JSON.stringify(sanitized));
          } catch (e) {
            console.warn("[ChatStore] localStorage write failed, clearing old data:", e);
            // If still over quota, clear and retry
            try {
              localStorage.removeItem(name);
              localStorage.setItem(name, JSON.stringify({
                ...value,
                state: { sessions: [], activeChatId: null },
              }));
            } catch {
              // Give up silently
            }
          }
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
