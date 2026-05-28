"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import settings from "@/data/settings.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-18 transition-colors duration-500 ${
        scrolled ? "bg-bg" : "bg-transparent"
      }`}
    >
      {/* Nav links — left */}
      <nav className="flex items-center gap-10">
        {settings.nav.items.map((item) => (
          <Link
            key={item.label}
            href={item.url}
            className={`font-sans text-[12px] uppercase tracking-[0.6px] leading-[1.3] transition-colors duration-300 ${
              scrolled ? "text-heading" : "text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Logo — center (visible quand scrollé) */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-[24px] text-heading tracking-[0.02em] whitespace-nowrap"
        >
          Maison Raphaëlis
        </Link>
      </div>

      {/* Language selector — right */}
      <div className="flex items-center gap-3">
        <button
          className={`font-sans text-[12px] uppercase tracking-[0.6px] transition-colors duration-300 ${
            scrolled ? "text-heading" : "text-white"
          }`}
        >
          FR
        </button>
        <div
          className={`w-px h-3 transition-colors duration-300 ${
            scrolled ? "bg-stroke" : "bg-white/40"
          }`}
        />
        <button
          className={`font-sans text-[12px] uppercase tracking-[0.6px] transition-colors duration-300 ${
            scrolled ? "text-secondary" : "text-white/60"
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
}
