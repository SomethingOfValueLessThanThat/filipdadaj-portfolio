"use client";

// Nextjs
import { useTheme } from "next-themes";

// Syntax Highlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export function ThemeSyntaxHighlighter({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  const { theme } = useTheme();

  return (
    <SyntaxHighlighter
      style={theme === "dark" ? oneDark : oneLight}
      language={language}
      PreTag="div"
      className="[&>*]:text-xs !bg-transparent [&>*]:!bg-transparent !p-0 !mb-4"
    >
      {children}
    </SyntaxHighlighter>
  );
}
