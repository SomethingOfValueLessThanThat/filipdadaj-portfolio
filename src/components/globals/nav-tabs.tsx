"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NavTabs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const pathname = usePathname();

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const navItems = [
    { href: "/", label: "ABOUT ME", emoji: "&#128104;&#8205;&#128188;" },
    { href: "/projects", label: "PROJECTS", emoji: "&#128736;" },
    { href: "/work-setup", label: "WORK SETUP", emoji: "&#129716;" },
    { href: "/playlist", label: "PLAYLIST", emoji: "&#127926;" },
    { href: "/blog", label: "PERSONAL BLOG", emoji: "&#9999;&#65039;" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto p-5 xs:p-8">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex gap-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <Button
                className={`${pathname === item.href ? "bg-iron-100 dark:bg-iron-500" : ""}`}
              >
                <span>{item.label}</span>
                <span className="w-1" />
                <span
                  className="text-xs"
                  dangerouslySetInnerHTML={{ __html: item.emoji }}
                />
              </Button>
            </Link>
          ))}
        </div>
      </div>
      {canScrollPrev && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-5 xs:left-8 top-1/2 -translate-y-1/2 z-10 size-6 rounded-[10px] border-iron-50 dark:border-iron-700 hover:bg-background"
          onClick={scrollPrev}
        >
          <ChevronLeft
            size={16}
            strokeWidth={4}
            className="text-iron-200 -translate-x-px"
            absoluteStrokeWidth={true}
          />
        </Button>
      )}
      {canScrollNext && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-5 xs:right-8 top-1/2 -translate-y-1/2 z-10 size-6 rounded-[10px] border-iron-50 dark:border-iron-700 hover:bg-background"
          onClick={scrollNext}
        >
          <ChevronRight
            size={16}
            strokeWidth={4}
            className="text-iron-200 translate-x-px"
            absoluteStrokeWidth={true}
          />
        </Button>
      )}
    </div>
  );
}
