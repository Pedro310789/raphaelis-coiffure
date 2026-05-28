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
      <div className="max-w-[1440px] mx-auto px-[72px] py-[104px]">
      {/* Heading */}
      <FadeIn className="flex flex-col items-center gap-6 mb-24">
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
            {testimonials.label}
          </span>
          <div className="w-12 h-px bg-secondary" />
        </div>
        <h2 className="font-serif text-[56px] leading-none text-center">
          <span className="text-white block">{testimonials.titleLine1}</span>
          <span className="text-secondary block">{testimonials.titleLine2}</span>
        </h2>
      </FadeIn>

      {/* Cards */}
      <div ref={ref} className="grid grid-cols-3 gap-6">
        {testimonials.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col"
          >
            {/* Opening quote */}
            <span className="font-serif text-[60px] text-white/60 leading-[60px]">
              «
            </span>

            {/* Quote */}
            <div className="pt-6 pr-2">
              <p className="font-serif italic text-[20px] text-white leading-[1.3]">
                {item.quote}
              </p>
            </div>

            {/* Author */}
            <div className="pt-10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-white/60" />
                <span className="font-sans text-[12px] text-white/60 uppercase tracking-[0.6px] leading-[1.3]">
                  {item.author}
                  {" "}
                  <span className="text-white/60">·</span>
                  {" "}
                  {item.city}
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
