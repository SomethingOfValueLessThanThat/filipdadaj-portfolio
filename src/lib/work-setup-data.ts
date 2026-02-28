interface Item {
  name: string;
  description: string;
}

interface SectionProps {
  title: string;
  items: Item[];
}

export const workSetupData: SectionProps[] = [
  {
    title: "Workstation",
    items: [
      {
        name: "Macbook Pro M1 Pro 16GB RAM (2021)",
        description:
          "Na to že je pět let starej mi slouží fakt dobře. Co k tomu říct? Prostě moje lopata k práci :D. Nesmím zapomenout zmínit to že kupuju laptopy jen s ENG layoutem.",
      },
      {
        name: "DELL Ultrasharp U2520D",
        description:
          "25 palců je akorát pro mně a ideál na QHD rozlišení, které je ideální na MacOs kvůli škálovaní.",
      },
      {
        name: "razer deathadder v2 x hyperspeed",
        description:
          "Nemůžu si ji víc vynachválit. Bluetooth, výdrž několik měsíců na jednu AA baterku, žádné podsvícení, mapovatelný tlačítka (bohužel jen na Windows). Předtím jsem měl tu samou kabelovou bílou.",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        name: "Zed",
        description:
          "Ne moc známý code editor. Je opravdu rychlej, proto jsem si ho vybral a obsahuje vše, co potřebuju.",
      },
      {
        name: "Next.js",
        description:
          "Next je framework mýho výběru, důležitý je, že je postavenej na Reactu. Vanilla Reactu se taky nebráním.",
      },
      {
        name: "Helium",
        description:
          "Za mě úplně nejlepší prohlížeč na development. Je rychlej a minimální, přesně tak to mám rád.",
      },
    ],
  },
  {
    title: "Design",
    items: [
      {
        name: "Figma",
        description:
          "Standard ve světě UI/UX designu.  Zatím nikdo nepřisel s něčím lepším.",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        name: "Excalidraw",
        description:
          "Excalidraw mám na občasný poznámky a sketche. Má styl ručního psaní, který se mi líbí. Navíc je free to use.",
      },
      {
        name: "Spotify",
        description:
          "Jasná volba na přehrávání písniček a podcastů. Tohle používám furt, i mimo práci.",
      },
    ],
  },
];
