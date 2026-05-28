"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import homepage from "@/data/homepage.json";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesSection() {
  const { services } = homepage;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-bg">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[72px] py-16 lg:py-[96px]">
        {/* Heading */}
        <FadeIn className="flex flex-col items-center gap-4 lg:gap-6 mb-14 lg:mb-24">
          <div className="flex flex-col items-center gap-3 lg:gap-4">
            <span className="font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
              {services.label}
            </span>
            <div className="w-12 h-px bg-secondary" />
          </div>
          <h2 className="font-serif text-[34px] lg:text-[56px] text-heading leading-none text-center">
            {services.titleLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </FadeIn>

        {/* Cards — 1 col mobile, 4 col desktop */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
          {services.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-8"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[408/510] group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <span className="font-serif italic text-[20px] text-secondary leading-[1.3] w-5 shrink-0">
                    {item.number}
                  </span>
                  <div className="flex-1 h-px bg-secondary" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 lg:gap-4">
                    <h3 className="font-serif text-[26px] lg:text-[28px] text-heading leading-[1.2]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[14px] text-body leading-[1.6] lg:leading-[1.5] tracking-[0.14px]">
                      {item.description}
                    </p>
                  </div>
                  <a href={item.ctaUrl} className="inline-flex items-center gap-2 font-sans text-[13px] lg:text-[14px] text-heading uppercase tracking-[0.42px] leading-[1.2] group">
                    {item.cta}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
