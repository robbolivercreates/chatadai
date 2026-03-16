"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStore {
  geminiApiKey: string;
  setGeminiApiKey: (key: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

// Cookie helpers (365-day expiry, SameSite=Strict, path=/)
function setCookie(name: string, value: string) {
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};SameSite=Strict`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function removeCookie(name: string) {
  document.cookie = `${name}=;path=/;max-age=0`;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      geminiApiKey: "",
      setGeminiApiKey: (key) => set({ geminiApiKey: key }),
      language: "pt",
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "chatadai-settings",
      // Persist to both localStorage (Zustand default) and cookies
      storage: {
        getItem: (name) => {
          // Try localStorage first, fall back to cookies
          const raw = localStorage.getItem(name);
          if (raw) return JSON.parse(raw);

          // Recover from cookies if localStorage was cleared
          const apiKey = getCookie("chatadai-apikey") || "";
          const language = getCookie("chatadai-lang") || "pt";
          if (apiKey) {
            return {
              state: { geminiApiKey: apiKey, language },
              version: 0,
            };
          }
          return null;
        },
        setItem: (name, value) => {
          // Write to localStorage
          localStorage.setItem(name, JSON.stringify(value));
          // Mirror to cookies
          const state = value?.state;
          if (state) {
            if (state.geminiApiKey) {
              setCookie("chatadai-apikey", state.geminiApiKey);
            } else {
              removeCookie("chatadai-apikey");
            }
            setCookie("chatadai-lang", state.language || "pt");
          }
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
          removeCookie("chatadai-apikey");
          removeCookie("chatadai-lang");
        },
      },
    }
  )
);
