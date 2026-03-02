"use client";

// Nextjs
import Link from "next/link";

// Globals Components
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/i18n-context";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-balance">{t("NOT_FOUND_HEADING")}</h2>
      <Button variant="linkHoverIn">
        <Link href="/">{t("NOT_FOUND_LINK")}</Link>
      </Button>
    </div>
  );
}
