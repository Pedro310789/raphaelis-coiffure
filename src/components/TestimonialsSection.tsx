"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import homepage from "@/data/homepage.json";
import FadeIn from "@/components/ui/FadeIn";

export default function TestimonialsSection() {
  const { testimonials } = homepage;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-dark">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[72px] py-16 lg:py-[104px]">
        {/* Heading */}
        <FadeIn className="flex flex-col items-center gap-4 lg:gap-6 mb-14 lg:mb-24">
          <div className="flex flex-col items-center gap-3 lg:gap-4">
            <span className="font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
              {testimonials.label}
            </span>
            <div className="w-12 h-px bg-secondary" />
          </div>
          <h2 className="font-serif text-[34px] lg:text-[56px] leading-none text-center">
            <span className="text-white block">{testimonials.titleLine1}</span>
            <span className="text-secondary block">{testimonials.titleLine2}</span>
          </h2>
        </FadeIn>

        {/* Cards — 1 col mobile, 3 col desktop */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
          {testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col"
            >
              <span className="font-serif text-[60px] text-white/60 leading-[60px]">«</span>
              <div className="pt-6 pr-2">
                <p className="font-serif italic text-[18px] lg:text-[20px] text-white leading-[1.4] lg:leading-[1.3]">
                  {item.quote}
                </p>
              </div>
              <div className="pt-8 lg:pt-10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-white/60" />
                  <span className="font-sans text-[11px] lg:text-[12px] text-white/60 uppercase tracking-[0.6px] leading-[1.3]">
                    {item.author} <span>·</span> {item.city}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
