"use client";

// Nextjs
import Image from "next/image";

// Images
import aboutClimbing from "@/assets/images/about-climbing.jpg";
import aboutLaptop from "@/assets/images/about-laptop.jpg";
import aboutMe from "@/assets/images/about-me.jpg";
import aboutPasta from "@/assets/images/about-pasta.jpg";

import { useTranslation } from "@/lib/i18n/i18n-context";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="space-y-2">
      <h2 className="font-bold text-xl text-pretty">
        {t("HOME_HEADING")}
      </h2>
      <p className="text-pretty">
        {t("HOME_BODY_1")}
        <br />
        <br />
        {t("HOME_BODY_2")}
        <br />
        <br />
        {t("HOME_BODY_3")}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-8 sm:gap-2 w-full mt-8">
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-6">
          <Image
            src={aboutMe}
            alt="picture of the author"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-[-8deg] translate-y-3">
          <Image
            src={aboutPasta}
            alt="picture of a pasta home-made meal"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-3">
          <Image
            src={aboutLaptop}
            alt="picture in nature with shadow of two people"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
        <div className="bg-gray-300 dark:bg-neutral-800 w-full aspect-square border-4 border-white dark:border-neutral-700 shadow-3xl rounded-4xl overflow-hidden rotate-[-8deg] translate-y-2">
          <Image
            src={aboutClimbing}
            alt="picture of the author in moody lighting"
            className="w-full h-full pointer-events-none object-cover"
          />
        </div>
      </div>
    </section>
  );
}
