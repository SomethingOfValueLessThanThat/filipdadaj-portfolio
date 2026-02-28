"use client";

// Icons
import { Github } from "lucide-react";

// Globals Components
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/globals/header-components/mode-toggle";
import { ContactButton } from "@/components/globals/header-components/contact-button";
import { LanguageToggle } from "@/components/globals/header-components/language-toggle";

export function Header() {
  return (
    <header className="flex gap-2 w-full max-w-xl mx-auto p-5 xs:p-8">
      <ContactButton />
      <div className="w-full"></div>
      <ContactButton />
      <LanguageToggle />
      <ModeToggle />
    </header>
  );
}
