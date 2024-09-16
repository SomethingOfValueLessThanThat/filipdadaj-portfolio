"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Box, Brush, CodeXml, File, Move3D } from "lucide-react";
import uiUxPismoletka from "@/assets/images/ui-ux-pismoletka.jpeg";
import uiUxPismoletkaXl from "@/assets/images/ui-ux-pismoletka-xl.jpg";
import uiUxTnyli from "@/assets/images/ui-ux-tnyli.jpeg";
import uiUxTnyliXl from "@/assets/images/ui-ux-tnyli-xl.jpg";
import renderLamborghini from "@/assets/images/render-lamborghini.jpeg";
import renderLamborghiniXl from "@/assets/images/render-lamborghini-xl.jpg";
import renderGpu from "@/assets/images/render-gpu.jpeg";
import renderGpuXl from "@/assets/images/render-gpu-xl.jpg";
import workbenchLamborghiny from "@/assets/images/workbench-lamborghini.jpeg";
import workbenchLamborghinyXl from "@/assets/images/workbench-lamborghini-xl.jpg";
import workbenchGpu from "@/assets/images/workbench-gpu.jpeg";
import workbenchGpuXl from "@/assets/images/workbench-gpu-xl.jpg";
import printerBase from "@/assets/images/printer-base.jpeg";
import printerDragon from "@/assets/images/printer-dragon.jpeg";
import printerTurtle from "@/assets/images/printer-turtle.jpeg";
import Image from "next/image";
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
        Building digital worlds, one line of code at a time, shaping dreams into
        pixels.
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <CodeXml size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>Development</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <a
              href="https://cryptfinex.eu/en"
              className="font-bold mt-2 w-fit"
              target="_blank"
            >
              cryptfinex.eu
            </a>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              A landing page for seamless customer verification, allowing users
              to quickly verify their identity before purchasing cryptocurrency.
            </p>
            <div className="flex gap-2 mt-2">
              <Badge>Nextjs</Badge>
              <Badge>Shadcn/ui</Badge>
              <Badge>Tailwind CSS</Badge>
            </div>
            <a
              href="https://marali-receptury.vercel.app/"
              className="font-bold mt-5 w-fit"
              target="_blank"
            >
              marali-receptury.cz
            </a>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              A dedicated page providing detailed cocktail tutorials and drink
              recipes for employee training and skill development.
            </p>
            <div className="flex gap-2 mt-2">
              <Badge>React</Badge>
              <Badge>GSAP</Badge>
              <Badge>Tailwind CSS</Badge>
            </div>
            <button
              className="font-bold mt-5 flex w-fit"
              onClick={() => {
                toast({
                  title: "Access denied",
                  description:
                    "This application is for internal use only and is not accessible to the public",
                });
              }}
            >
              stage.tepp.io
            </button>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
              An internal web application designed exclusively for employees of
              the corporation, providing tools for managing attendance, vehicle
              assignments, staff oversight, customer contracts, and more.
            </p>
            <div className="flex gap-2 mt-2">
              <Badge>Nextjs</Badge>
              <Badge>SASS</Badge>
              <Badge>Material/ui</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Brush size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>UI/UX Design</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="font-bold mb-1 mt-2">Písmoletka: web-based SaaS</p>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400 mb-3">
              A sleek web-based SaaS platform designed to teach efficient touch
              typing through interactive lessons and real-time progress
              tracking.
            </p>
            <Credenza>
              <CredenzaTrigger asChild>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl hover:cursor-pointer">
                  <Image
                    src={uiUxPismoletka}
                    alt="web based saas platform for touch typing"
                    fill
                    className="object-cover"
                  />
                </div>
              </CredenzaTrigger>
              <CredenzaContent className="max-w-[calc(100vw-48px)] xl:max-w-[1232px] p-0 border-neutral-800 bg-transparent overflow-hidden">
                <CredenzaBody className="p-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={uiUxPismoletkaXl}
                      alt="web based saas platform for touch typing preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
            <p className="font-bold mb-1 mt-6 ">Tny.li: url shortener</p>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400 mb-3">
              Tny.li is a simple, fast web-based URL shortener for creating
              concise, shareable links with ease.
            </p>
            <Credenza>
              <CredenzaTrigger asChild>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl hover:cursor-pointer">
                  <Image
                    src={uiUxTnyli}
                    alt="web based app for shortening urls"
                    fill
                    className="object-cover"
                  />
                </div>
              </CredenzaTrigger>
              <CredenzaContent className="max-w-[calc(100vw-48px)] xl:max-w-[1232px] p-0 border-neutral-800 bg-transparent overflow-hidden">
                <CredenzaBody className="p-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={uiUxTnyliXl}
                      alt="web based app for shortening urls"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Move3D size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>3D Modeling &amp; Rendering</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="font-bold mb-1 mt-2">Lamborghini body-kit</p>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400 mb-3">
              A 3D render featuring a custom Lamborghini body kit, complete with
              procedural materials, a fully designed scene, and custom lighting
              for a striking and realistic presentation.aaaaaaaaaaaa
            </p>
            <Credenza>
              <CredenzaTrigger asChild>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl hover:cursor-pointer">
                  <Image
                    src={renderLamborghini}
                    alt="web based saas platform for touch typing"
                    fill
                    className="object-cover"
                  />
                </div>
              </CredenzaTrigger>
              <CredenzaContent className="max-w-[calc(100vw-48px)] xl:max-w-[1232px] p-0 border-neutral-800 bg-transparent overflow-hidden">
                <CredenzaBody className="p-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={renderLamborghiniXl}
                      alt="web based saas platform for touch typing preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
            <div className="spacer h-3"></div>
            <Credenza>
              <CredenzaTrigger asChild>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl hover:cursor-pointer">
                  <Image
                    src={workbenchLamborghiny}
                    alt="web based saas platform for touch typing"
                    fill
                    className="object-cover"
                  />
                </div>
              </CredenzaTrigger>
              <CredenzaContent className="max-w-[calc(100vw-48px)] xl:max-w-[1232px] p-0 border-neutral-800 bg-transparent overflow-hidden">
                <CredenzaBody className="p-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={workbenchLamborghinyXl}
                      alt="web based saas platform for touch typing preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
            <p className="font-bold mb-1 mt-6 ">Nvidia RTX 2080</p>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400 mb-3">
              A 3D render of a GPU, showcasing intricate modeling with
              custom-made procedural materials, set in a carefully crafted scene
              with dynamic lighting to emphasize the hardware&#39;s details and
              realism.
            </p>
            <Credenza>
              <CredenzaTrigger asChild>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl hover:cursor-pointer">
                  <Image
                    src={renderGpuXl}
                    alt="web based saas platform for touch typing"
                    fill
                    className="object-cover"
                  />
                </div>
              </CredenzaTrigger>
              <CredenzaContent className="max-w-[calc(100vw-48px)] xl:max-w-[1232px] p-0 border-neutral-800 bg-transparent overflow-hidden">
                <CredenzaBody className="p-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={renderGpu}
                      alt="web based saas platform for touch typing preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
            <div className="spacer h-3"></div>
            <Credenza>
              <CredenzaTrigger asChild>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl hover:cursor-pointer">
                  <Image
                    src={workbenchGpu}
                    alt="web based saas platform for touch typing"
                    fill
                    className="object-cover"
                  />
                </div>
              </CredenzaTrigger>
              <CredenzaContent className="max-w-[calc(100vw-48px)] xl:max-w-[1232px] p-0 border-neutral-800 bg-transparent overflow-hidden">
                <CredenzaBody className="p-0">
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={workbenchGpuXl}
                      alt="web based saas platform for touch typing preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Box size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>3D Printing</h2>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="font-bold mb-1 mt-2">
              Turning my models into physical creations
            </p>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400 mb-3">
              I do 3D printing because it brings my 3D models to life. As a 3D
              modeler, it’s exciting to see my digital designs transform into
              physical objects. 3D printing lets me explore creativity in a
              hands-on way.
            </p>
            <div className="grid grid-cols-12 gap-3">
              <div className="xs:col-span-6 col-span-12 relative w-full h-full max-xs:aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={printerTurtle}
                  alt="web based saas platform for touch typing preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="xs:col-span-6 col-span-12 grid gap-3">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={printerBase}
                    alt="web based saas platform for touch typing preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={printerDragon}
                    alt="web based saas platform for touch typing preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <File size={16} strokeWidth={2} absoluteStrokeWidth={true} />
            <h2>Others...</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-bold mb-1 mt-2">
              Creating my own monospace font
            </p>
            <p className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400 mb-1">
              I created Stellaris, a monospace font inspired by the game
              Starfield. Designing a font turned out to be much harder than I
              expected, but it was worth it! Stellaris has a clean, futuristic
              look.
            </p>
            <a
              href="https://drive.google.com/file/d/1wwDg43frvzSZdRA6MgaV-eTnQlIP1fOK/view?usp=sharing"
              className="text-xs font-bold mt-2 w-fit"
              target="_blank"
            >
              download
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
