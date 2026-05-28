import FadeIn from "@/components/ui/FadeIn";
import homepage from "@/data/homepage.json";

export default function PartnersSection() {
  const { partners } = homepage;

  return (
    <section className="bg-surface">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[72px] py-12 lg:py-[72px]">
        <FadeIn className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3 lg:gap-4">
            <span className="font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
              {partners.label}
            </span>
            <div className="w-12 h-px bg-secondary" />
          </div>

          {/* Logos — 3 per row on mobile, all in one row on desktop */}
          <div className="grid grid-cols-3 lg:flex lg:items-center lg:justify-center lg:gap-[185px] gap-x-8 gap-y-6 w-full lg:w-auto">
            {partners.items.map((partner, i) => (
              <div key={i} className="w-16 h-16 lg:w-24 lg:h-24 relative mx-auto lg:mx-0 shrink-0">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
