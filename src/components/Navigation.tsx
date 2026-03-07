"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SALE_DATA } from "@/lib/constants";

const NAV_LINKS = [
  { label: "SPECS", href: "#specs" },
  { label: "CONDICIÓN", href: "#condicion" },
  { label: "PRECIO", href: "#precio" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 border-b transition-all duration-300 ${
        scrolled
          ? "border-border-dim/80 bg-void/95 backdrop-blur-md"
          : "border-border-dim/30 bg-void/60 backdrop-blur-sm"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-cyber text-xl font-mono">$</span>
        <h2 className="font-mono text-sm font-bold tracking-widest text-text-muted">
          VOID_ENGINEERING
        </h2>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-widest text-text-muted">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-cyber transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href={SALE_DATA.contact.waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center min-w-[100px] cursor-pointer justify-center rounded-sm h-9 px-4 bg-cyber text-void text-xs font-bold font-mono tracking-tighter hover:bg-cyber/90 transition-all"
      >
        COMPRAR
      </a>

      {/* Mobile: price badge */}
      <div className="md:hidden font-mono text-xs text-cyber font-bold">
        US$ {SALE_DATA.price.toLocaleString()}
      </div>
    </motion.header>
  );
}
