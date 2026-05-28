"use client";

import { motion } from "framer-motion";
import homepage from "@/data/homepage.json";

export default function Hero() {
  const { hero } = homepage;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt="Maison Raphaëlis"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%)" }} />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-24 pb-8 px-5 lg:px-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center gap-8 lg:gap-10 w-full max-w-[467px]"
        >
          {/* Title group */}
          <div className="flex flex-col items-center gap-6 lg:gap-8 w-full">
            <div className="flex flex-col items-center gap-6 lg:gap-8 w-full">
              <h1 className="font-serif text-[42px] lg:text-[88px] text-white text-center tracking-[2px] lg:tracking-[3px] leading-none">
                {hero.title}
              </h1>
              <div className="w-24 lg:w-32 h-px bg-bg" />
            </div>
            <p className="font-sans text-[11px] lg:text-[12px] text-white/60 text-center uppercase tracking-[0.6px] leading-[1.3]">
              {hero.subtitle}
            </p>
          </div>

          {/* CTA button */}
          <motion.a
            href={hero.ctaUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border border-stroke/60 h-12 flex items-center justify-center px-8 font-sans text-[13px] lg:text-[14px] text-white uppercase tracking-[0.42px] leading-[1.2] hover:bg-white/10 transition-colors duration-300"
          >
            {hero.cta}
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom discover + slogans */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full"
      >
        {/* Discover */}
        <div className="flex flex-col items-center mb-[-8px]">
          <div className="flex flex-col items-center gap-3">
            <span className="font-sans text-[11px] lg:text-[12px] text-white/60 uppercase tracking-[0.6px] leading-[1.3]">
              Découvrir
            </span>
            <div className="w-px h-8 lg:h-10 bg-white/60" />
          </div>
        </div>

        {/* Slogans — hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex items-center justify-between px-[72px] pb-6">
          <span className="font-sans text-[12px] text-white/60 uppercase tracking-[0.6px] leading-[1.3]">
            {hero.taglineLeft}
          </span>
          <span className="font-sans text-[12px] text-white/60 uppercase tracking-[0.6px] leading-[1.3]">
            {hero.taglineRight}
          </span>
        </div>
        {/* Mobile: just bottom spacing */}
        <div className="lg:hidden pb-6" />
      </motion.div>
    </section>
  );
}
