"use client";

import { Languages } from "lucide-react";
import { useTranslation } from "@/lib/i18n/i18n-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon">
            <Languages
              size={16}
              strokeWidth={2}
              className="text-iron-200"
              absoluteStrokeWidth={true}
            />
            <span className="sr-only">Language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mt-px">
          <DropdownMenuItem onClick={() => setLocale("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLocale("cs")}>
            Čeština
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
