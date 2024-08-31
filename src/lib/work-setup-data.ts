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
          "The new MacBook Pro is a game-changer. It’s seamless performance and incredible battery life make even the most demanding tasks feel effortless. The display is stunning, with vibrant colors and crisp detail. It's the perfect companion for anyone serious about their craft.",
      },
      {
        name: "DELL Ultrasharp U2520D",
        description:
          "The color accuracy and sharpness on this monitor are phenomenal. It has significantly improved my productivity and the overall quality of my work. Hands down, the best small monitor for Mac.",
      },
      {
        name: "HHKB Profesional Hybrid Type-S keyboard",
        description:
          "Typing on this keyboard is an absolute joy. The quiet keys and compact layout make it perfect for long coding sessions.",
      },
      {
        name: "Logitech g502 Lightspeed",
        description:
          "The responsiveness and ergonomic design of this mouse are unmatched. It has enhanced my productivity tasks immensely.",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        name: "Zed code editor",
        description:
          "I don’t like visual studio code it is so overwhelming for me. Zed is incredibly fast and efficient. Its minimalist design helps me focus on coding without any distractions.",
      },
      {
        name: "Next.js",
        description:
          "Next.js makes building React applications a breeze. The server-side rendering and static site generation features are top-notch.",
      },
      {
        name: "Blender",
        description:
          "A powerful tool for 3D modeling and animation. Its comprehensive feature set rivals even the most expensive software out there.",
      },
      {
        name: "Arc",
        description:
          "Arc's browser by the The Browser Company is seamless and fast. It has quickly become my go-to for browsing and research.",
      },
    ],
  },
  {
    title: "Design",
    items: [
      {
        name: "Figma",
        description:
          "Figma's collaborative design features are incredible. It's streamlined my workflow and improved team collaboration.",
      },
      {
        name: "Photoshop",
        description:
          "Great software and powerful editing tools are unparalleled. It's my go-to software for any graphic design project.",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        name: "Excalidraw",
        description:
          "A fantastic tool for creating sketches, diagrams, and visual notes with a hand-drawn aesthetic. The interface is straightforward and intuitive, allowing users to start drawing without a steep learning curve.",
      },
      {
        name: "Spotify",
        description:
          "Spotify offers an extensive music library and personalized playlists that perfectly match my taste. It's user-friendly interface make it convenient for any situation. Plus, the ability to discover new music keeps my listening experience fresh.",
      },
    ],
  },
];
