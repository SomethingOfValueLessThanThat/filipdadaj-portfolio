// Nextjs
import type { Metadata } from "next";

// Styles CSS
import "@/styles/globals.css";

// Utility Functions
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/font-config";

// Globals Components
import { Header } from "@/components/globals/header";
import { SubHeader } from "@/components/globals/sub-header";
import { Footer } from "@/components/globals/footer";
import NavTabs from "@/components/globals/nav-tabs";

// Transition Components
import PageTransition from "@/components/transition/page-transition";

// Layout Components
import { ThemeProvider } from "@/components/layout/theme-provider";
import { VaulDrawerWrapper } from "@/components/layout/vaul-drawer-wrapper";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Filip Dadaj - Portfolio",
  description: "A showcase of my work, skills, and experiences as a developer",
  keywords: [
    "portfolio",
    "web development",
    "frontend",
    "backend",
    "full-stack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans font-semibold text-sm text-foreground selection:bg-violet-300 selection:text-violet-900 antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <VaulDrawerWrapper>
            <Header />
            <SubHeader />
            <NavTabs />
            <PageTransition>
              <main className="w-full max-w-xl mx-auto px-5 xs:px-8">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </VaulDrawerWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
