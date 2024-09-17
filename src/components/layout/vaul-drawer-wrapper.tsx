// Nextjs
import * as React from "react";

interface VaulDrawerWrapperProps {
  children: React.ReactNode;
}

export function VaulDrawerWrapper({ children }: VaulDrawerWrapperProps) {
  return (
    <div
      vaul-drawer-wrapper=""
      className="flex flex-col bg-background min-h-screen !rounded-2xl"
    >
      {children}
    </div>
  );
}
