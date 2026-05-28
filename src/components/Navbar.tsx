"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import settings from "@/data/settings.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkColor = scrolled ? "text-heading" : "text-white";
  const dividerColor = scrolled ? "bg-stroke" : "bg-white/40";
  const secondaryColor = scrolled ? "text-secondary" : "text-white/60";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-5 lg:px-[72px] transition-colors duration-500 ${
          scrolled ? "bg-bg" : "bg-transparent"
        }`}
      >
        {/* Nav links — desktop only */}
        <nav className="hidden lg:flex items-center gap-10">
          {settings.nav.items.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className={`font-sans text-[12px] uppercase tracking-[0.6px] leading-[1.3] transition-colors duration-300 ${linkColor}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo — center on mobile (always), center on desktop when scrolled */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex-1 lg:flex-none flex justify-center lg:block">
          <Link
            href="/"
            className={`transition-all duration-500 inline-flex items-center ${
              scrolled ? "opacity-100 translate-y-0" : "lg:opacity-0 lg:-translate-y-1"
            }`}
          >
            <img
              src="/uploads/icone-R-Raphaelis-maison-coiffure.svg"
              alt="Maison Raphaëlis"
              className="h-10 w-auto transition-all duration-500"
              style={{
                filter: scrolled
                  ? "brightness(0.15)"          /* fond beige → R très foncé */
                  : "invert(1) brightness(10)",  /* fond sombre → R blanc vif */
              }}
            />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 lg:gap-3">
          {/* Language selector — desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button className={`font-sans text-[12px] uppercase tracking-[0.6px] transition-colors duration-300 ${linkColor}`}>FR</button>
            <div className={`w-px h-3 transition-colors duration-300 ${dividerColor}`} />
            <button className={`font-sans text-[12px] uppercase tracking-[0.6px] transition-colors duration-300 ${secondaryColor}`}>EN</button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden flex flex-col gap-[5px] p-1 transition-colors duration-300 ${linkColor}`}
            aria-label="Ouvrir le menu"
          >
            <span className="w-6 h-px bg-current block" />
            <span className="w-6 h-px bg-current block" />
            <span className="w-4 h-px bg-current block" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-bg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-24">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/uploads/icone-R-Raphaelis-maison-coiffure.svg"
                alt="Maison Raphaëlis"
                className="h-10 w-auto"
                style={{ filter: "brightness(0.15)" }}
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-heading p-1"
              aria-label="Fermer le menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-5 pt-8 gap-8 flex-1">
            {settings.nav.items.map((item, i) => (
              <Link
                key={item.label}
                href={item.url}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-[36px] text-heading leading-none"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-5 pb-10 flex items-center gap-4">
            <span className="font-sans text-[12px] text-heading uppercase tracking-[0.6px]">FR</span>
            <div className="w-px h-3 bg-stroke" />
            <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px]">EN</span>
          </div>
        </div>
      )}
    </>
  );
}
