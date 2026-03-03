"use client";

import * as React from "react";
import { MoonStar, Sun, FlaskConical } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/lib/i18n/i18n-context";
import { useEasterEgg } from "@/components/easter-eggs/easter-egg-experimental-theme";

export function ModeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const { t } = useTranslation();
  const { experimentalUnlocked } = useEasterEgg();

  const isExperimental = theme === "experimental";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Sun
            size={16}
            strokeWidth={2}
            className="text-iron-200 scale-100 transition-all dark:scale-0"
            absoluteStrokeWidth={true}
            style={{ display: isExperimental ? "none" : undefined }}
          />
          <MoonStar
            size={16}
            strokeWidth={2}
            className="text-iron-200 absolute scale-0 transition-all dark:scale-100"
            absoluteStrokeWidth={true}
            style={{ display: isExperimental ? "none" : undefined }}
          />
          <FlaskConical
            size={16}
            strokeWidth={2}
            absoluteStrokeWidth={true}
            className="absolute transition-all"
            style={{ display: isExperimental ? undefined : "none" }}
          />
          <span className="sr-only">{t("THEME_SR")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-px">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("THEME_LIGHT")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("THEME_DARK")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("THEME_SYSTEM")}
        </DropdownMenuItem>
        {experimentalUnlocked && (
          <DropdownMenuItem onClick={() => setTheme("experimental")}>
            {t("THEME_EXPERIMENTAL")}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
