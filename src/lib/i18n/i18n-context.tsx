"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Dictionary } from "./types";
import { cs } from "./dictionaries/cs";
import { en } from "./dictionaries/en";

type Locale = "cs" | "en";

const dictionaries: Record<Locale, Dictionary> = { cs, en };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Dictionary) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("cs");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "cs" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: keyof Dictionary) => dictionaries[locale][key];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LocaleProvider");
  }
  return context;
}
