// Import local font configuration function
import localFont from "next/font/local";

// Define the fontSans configuration
export const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/silka-medium-italic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "../assets/fonts/silka-medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../assets/fonts/silka-semibold-italic.otf",
      style: "italic",
      weight: "600",
    },
    {
      path: "../assets/fonts/silka-semibold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../assets/fonts/silka-bold-italic.otf",
      style: "italic",
      weight: "700",
    },
    {
      path: "../assets/fonts/silka-bold.otf",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-sans",
});
