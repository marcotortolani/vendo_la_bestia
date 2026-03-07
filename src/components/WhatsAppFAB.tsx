"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SALE_DATA } from "@/lib/constants";

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 200);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={SALE_DATA.contact.waLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-cyber text-void font-mono font-bold text-xs rounded-full px-5 py-3 shadow-[0_0_20px_rgba(13,242,147,0.4)] hover:shadow-[0_0_30px_rgba(13,242,147,0.6)] transition-shadow"
          aria-label="Contactar por WhatsApp"
        >
          <span className="text-base">💬</span>
          <span className="tracking-wider">WHATSAPP</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
