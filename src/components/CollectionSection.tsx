"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import homepage from "@/data/homepage.json";
import FadeIn from "@/components/ui/FadeIn";

export default function CollectionSection() {
  const { collection } = homepage;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-surface">
      <div className="max-w-[1440px] mx-auto px-[72px] py-[96px]">
      {/* Heading */}
      <FadeIn className="flex flex-col items-center gap-6 mb-24">
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
            {collection.label}
          </span>
          <div className="w-12 h-px bg-secondary" />
        </div>
        <h2 className="font-serif text-[56px] text-heading leading-none text-center">
          {collection.title}
        </h2>
      </FadeIn>

      {/* Images + CTA */}
      <div className="flex flex-col gap-14 items-center">
        <div ref={ref} className="grid grid-cols-4 gap-6 w-full">
          {collection.items.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col gap-4"
            >
              <div className="relative overflow-hidden aspect-[308/410] group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
                {item.caption}
              </span>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <a
            href={collection.ctaUrl}
            className="border border-heading h-12 flex items-center justify-center px-8 font-sans text-[14px] text-heading uppercase tracking-[0.42px] leading-[1.2] hover:bg-heading hover:text-white transition-colors duration-300"
          >
            {collection.cta}
          </a>
        </FadeIn>
      </div>
      </div>
    </section>
  );
}
