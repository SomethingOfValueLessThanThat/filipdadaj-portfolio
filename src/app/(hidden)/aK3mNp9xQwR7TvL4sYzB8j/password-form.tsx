"use client";

import { Lock } from "lucide-react";
import { authenticate } from "./actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/i18n-context";

export function PasswordForm({ error }: { error: boolean }) {
  const { t } = useTranslation();

  return (
    <section className="h-full">
      <div className="flex flex-col items-center justify-center gap-10 py-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <Button size="icon" disabled>
            <Lock size={16} strokeWidth={2} absoluteStrokeWidth={true} />
          </Button>
          <p className="text-sm text-muted-foreground">
            {t("PROTECTED_PAGE_LABEL")}
          </p>
        </div>

        <form
          action={authenticate}
          className="flex w-full max-w-xs flex-col gap-3"
        >
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">{t("PROTECTED_PAGE_PASSWORD")}</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder={t("PROTECTED_PAGE_PLACEHOLDER")}
              autoFocus
              autoComplete="current-password"
              className="rounded-xl"
            />
            {error && (
              <p className="text-xs text-destructive">
                {t("PROTECTED_PAGE_ERROR")}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            {t("PROTECTED_PAGE_SUBMIT")}
          </Button>
        </form>
      </div>
    </section>
  );
}
