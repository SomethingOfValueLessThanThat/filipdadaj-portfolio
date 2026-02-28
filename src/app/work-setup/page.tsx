"use client";

// Nextjs
import Image from "next/image";

// Images
import setup from "@/assets/images/setup.jpeg";

import { getWorkSetupData } from "@/lib/work-setup-data";
import { useTranslation } from "@/lib/i18n/i18n-context";

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
  const { t } = useTranslation();
  const workSetupData = getWorkSetupData(t);

  return (
    <section className="space-y-2">
      <h2 className="font-bold text-xl text-pretty">
        {t("WORK_SETUP_HEADING")}
      </h2>
      <p className="text-pretty mb-5">
        {t("WORK_SETUP_SUBHEADING")}
      </p>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-iron-50 w-full">
        <Image
          src={setup}
          alt="pc setup from above"
          fill
          className="object-cover"
        />
      </div>
      {workSetupData.map((section, index) => (
        <Section key={index} title={section.title} items={section.items} />
      ))}
    </section>
  );
}
