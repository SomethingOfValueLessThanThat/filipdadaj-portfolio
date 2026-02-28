"use client";

import { useTranslation } from "@/lib/i18n/i18n-context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-screen mt-auto bg-background pt-16">
      <div className="w-full h-px bg-gradient-to-r from-background via-neutral-300 dark:via-neutral-500 to-background"></div>
      <div className="flex flex-col gap-8 items-center max-w-xl mx-auto p-5 sm:p-8">
        <p>{t("FOOTER_COPYRIGHT")}</p>
      </div>
    </div>
  );
}
