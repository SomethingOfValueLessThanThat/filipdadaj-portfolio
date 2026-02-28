import type { Dictionary } from "./i18n/types";

interface Item {
  name: string;
  description: string;
}

interface SectionProps {
  title: string;
  items: Item[];
}

export function getWorkSetupData(
  t: (key: keyof Dictionary) => string,
): SectionProps[] {
  return [
    {
      title: "Workstation",
      items: [
        {
          name: "Macbook Pro M1 Pro 16GB RAM (2021)",
          description: t("SETUP_MACBOOK_DESC"),
        },
        {
          name: "DELL Ultrasharp U2520D",
          description: t("SETUP_DELL_DESC"),
        },
        {
          name: "razer deathadder v2 x hyperspeed",
          description: t("SETUP_RAZER_DESC"),
        },
      ],
    },
    {
      title: "Development",
      items: [
        {
          name: "Zed",
          description: t("SETUP_ZED_DESC"),
        },
        {
          name: "Next.js",
          description: t("SETUP_NEXTJS_DESC"),
        },
        {
          name: "Helium",
          description: t("SETUP_HELIUM_DESC"),
        },
      ],
    },
    {
      title: "Design",
      items: [
        {
          name: "Figma",
          description: t("SETUP_FIGMA_DESC"),
        },
      ],
    },
    {
      title: "Productivity",
      items: [
        {
          name: "Excalidraw",
          description: t("SETUP_EXCALIDRAW_DESC"),
        },
        {
          name: "Spotify",
          description: t("SETUP_SPOTIFY_DESC"),
        },
      ],
    },
  ];
}
