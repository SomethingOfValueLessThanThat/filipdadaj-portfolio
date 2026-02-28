"use client";

import { useTranslation } from "@/lib/i18n/i18n-context";

export default function Playlist() {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="font-bold text-xl text-pretty">
        {t("PLAYLIST_HEADING")}
      </h2>
      <p className="text-pretty mt-5 mb-2">Overwerk</p>
      <iframe
        className="rounded-2xl h-38"
        src="https://open.spotify.com/embed/artist/2f9PTWJfMMDTAFZcvHy1Z5?utm_source=generator&theme=0"
        width="100%"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen"
        loading="lazy"
      ></iframe>
      <p className="text-pretty mt-7 mb-2">Worakls</p>
      <iframe
        className="rounded-2xl h-38"
        src="https://open.spotify.com/embed/artist/5RPzPJCg4ER1LzQkorZ31p?utm_source=generator&theme=0"
        width="100%"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen"
        loading="lazy"
      ></iframe>
    </section>
  );
}
