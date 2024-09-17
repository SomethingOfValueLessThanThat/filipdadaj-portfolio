export default function Home() {
  return (
    <section>
      <h2 className="font-bold text-xl text-pretty">
        My Go-To Playlist/Artists while doing something creative
      </h2>
      <h3 className="text-base font-bold mt-4">Cyberia cafe</h3>
      <p className="text-pretty mb-3">
        My curated playlist for those deep, late-night coding sessions. Tune in
        and let the music keep you focused as you power through the night.
      </p>
      <div className="rounded-2xl w-full h-[370px] overflow-hidden bg-[#7b7099]">
        <iframe
          className="rounded-2xl h-[370px]"
          src="https://open.spotify.com/embed/playlist/0HBBBQbhnpJPxa3CA0wKab?utm_source=generator"
          width="100%"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen"
          loading="lazy"
        ></iframe>
      </div>
      <h3 className="text-base font-bold mt-8">Skeler</h3>
      <p className="text-pretty mb-3">
        This Artist is my personal refuge when I need to disconnect and find my
        rhythm. The intense, evocative sounds of this Australian artist always
        resonate, setting the perfect mood for any moment.
      </p>
      <div className="rounded-2xl w-full h-[370px] overflow-hidden bg-neutral-900">
        <iframe
          className="rounded-2xl h-[370px]"
          src="https://open.spotify.com/embed/artist/7ks4LdnBvp6HUsmVJiKgsB?utm_source=generator&theme=0"
          width="100%"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
