"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStore {
  geminiApiKey: string;
  setGeminiApiKey: (key: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      geminiApiKey: "",
      setGeminiApiKey: (key) => set({ geminiApiKey: key }),
      language: "pt",
      setLanguage: (lang) => set({ language: lang }),
    }),
    { name: "chatadai-settings" }
  )
);
