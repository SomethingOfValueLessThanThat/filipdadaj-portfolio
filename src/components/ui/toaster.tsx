"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { ShieldAlert } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <ShieldAlert size={48} className="stroke-red-500" />
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="font-bold text-lg text-pretty">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-xs text-balance sm:text-pretty text-neutral-500 dark:text-neutral-400">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
