"use client";
// Nextjs
import Image from "next/image";

// Hooks
import { useToast } from "@/hooks/use-toast";

// Icons
import { Box, Brush, CodeXml, File, Move3D } from "lucide-react";

// Images
import uiUxPismoletkaXl from "@/assets/images/ui-ux-pismoletka-xl.jpg";
import uiUxTnyliXl from "@/assets/images/ui-ux-tnyli-xl.jpg";
import renderLamborghiniXl from "@/assets/images/render-lamborghini-xl.jpg";
import renderGpuXl from "@/assets/images/render-gpu-xl.jpg";
import workbenchLamborghinyXl from "@/assets/images/workbench-lamborghini-xl.jpg";
import workbenchGpuXl from "@/assets/images/workbench-gpu-xl.jpg";
import printerBase from "@/assets/images/printer-base.jpeg";
import printerDragon from "@/assets/images/printer-dragon.jpeg";
import printerTurtle from "@/assets/images/printer-turtle.jpeg";

// Globals Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { toast } = useToast();

  return (
    <section className="space-y-3">
      <h1 className="font-bold text-xl text-pretty">
        Klíčové momenty a zkušenosti z mé praxe
      </h1>
      <p className="text-pretty mt-2 mb-5">
        Krom startupů a menších firem, jsem úspěšně dokončil spoustu menších
        jiných projektů, které se sem nevešli
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>IPEX - Nov 2024 - Present</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              A landing page for seamless customer verification, allowing users
              to quickly verify their identity before purchasing cryptocurrency.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Webtoad - Nov 2024 - Mar 2025</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              A landing page for seamless customer verification, allowing users
              to quickly verify their identity before purchasing cryptocurrency.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Šikmo - Jan 2024 - Oct 2024</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              A landing page for seamless customer verification, allowing users
              to quickly verify their identity before purchasing cryptocurrency.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Hero Engineering SE - Jun 2022 - Dec 2023</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              A landing page for seamless customer verification, allowing users
              to quickly verify their identity before purchasing cryptocurrency.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
