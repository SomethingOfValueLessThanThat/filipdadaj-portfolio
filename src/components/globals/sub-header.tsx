"use client";

// Nextjs
import Image from "next/image";

// Images
import profilePicture from "@/assets/images/profile-picture.png";

// Icons
import CheckMark from "@/assets/svgs/check-mark";

import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/i18n/i18n-context";
import { useEasterEgg, registerProfileClick } from "@/components/easter-eggs/easter-egg-experimental-theme";
import { HIDDEN_ROUTES } from "@/lib/hidden-routes";

export function SubHeader() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { justUnlocked } = useEasterEgg();

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-xl mx-auto px-5 xs:px-8">
      <Image
        src={profilePicture}
        alt="profile picture"
        width={96}
        height={96}
        className={`rounded-4xl cursor-pointer select-none${justUnlocked ? " animate-unlock" : ""}`}
        onClick={registerProfileClick}
      />
      <div className="inline-flex items-center gap-2">
        <h1 className="font-bold text-[32px] tracking-tight">Filip Dadaj</h1>
        <CheckMark />
      </div>
      <ul className="flex flex-col gap-4 text-center">
        <li>{t("SUBHEADER_ROLE_1")}</li>
        <li>{t("SUBHEADER_ROLE_2")}</li>
        <li>{t("SUBHEADER_STACK")}</li>
        <li>{t("SUBHEADER_TAGLINE_1")}</li>
        <li>{t("SUBHEADER_TAGLINE_2")}</li>
      </ul>
    </div>
  );
}
