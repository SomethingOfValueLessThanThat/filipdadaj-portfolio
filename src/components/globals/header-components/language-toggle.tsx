"use client";

import { useTranslation } from "@/lib/i18n/i18n-context";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <Button
      size="icon"
      onClick={() => setLocale(locale === "cs" ? "en" : "cs")}
    >
      <span className="text-iron-200 text-xs font-bold">
        {locale === "cs" ? "EN" : "CS"}
      </span>
    </Button>
  );
}
