"use client";

// Nextjs
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    setIsPresent(true);
    return () => setIsPresent(false);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isPresent && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            ease: [0.55, 0.085, 0.68, 0.53],
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
