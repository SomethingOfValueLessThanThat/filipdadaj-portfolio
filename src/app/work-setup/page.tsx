"use client";

import * as React from "react";
import Image from "next/image";
import setupSide from "@/assets/images/setup-side.jpeg";
import setupFar from "@/assets/images/setup-far.jpg";
import setupFancy from "@/assets/images/setup-fancy.jpg";
import setupFront from "@/assets/images/setup-front.jpg";
import { workSetupData } from "@/lib/work-setup-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Define the types for the SectionProps
interface SectionProps {
  title: string;
  items: Array<{ name: string; description: string }>;
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="relative mt-16 space-y-8 sm:border-l border-neutral-200 dark:border-neutral-700 sm:pl-36 max-sm:pt-12">
    <h4 className="absolute sm:left-4 sm:top-[3px] text-xs">{title}</h4>
    {items.map((item, index) => (
      <div key={index} className="space-y-2">
        <h3 className="text-base font-bold">{item.name}</h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 text-pretty">
          {item.description}
        </p>
      </div>
    ))}
  </div>
);

export default function WorkSetup() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const images = [
    {
      src: setupSide,
      alt: "pc setup from the side",
    },
    {
      src: setupFront,
      alt: "setup fancy shot on torus light",
    },
    {
      src: setupFar,
      alt: "pc setup from far away",
    },
    {
      src: setupFancy,
      alt: "setup fancy shot on torus light",
    },
  ];

  return (
    <section className="space-y-2">
      <h2 className="font-bold text-xl text-pretty">
        Software I use, gadgets I love, and other things I can recommend.
      </h2>
      <p className="text-pretty !mb-5">
        Here are the things I use to build software, stay productive, or buy to
        fool myself into thinking I’m being productive when I’m really just
        procrastinating. Here’s a big list of all of my favorite stuff.
      </p>
      <div className="w-full">
        <Carousel
          setApi={setApi}
          className="w-full rounded-2xl overflow-hidden"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-iron-50">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "inline-block h-3 w-3 mx-1 border-2 rounded-full transition-colors",
                index === current
                  ? "border-iron-300 dark:border-iron-50"
                  : "border-iron-100 dark:border-iron-200",
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {workSetupData.map((section, index) => (
        <Section key={index} title={section.title} items={section.items} />
      ))}
    </section>
  );
}
