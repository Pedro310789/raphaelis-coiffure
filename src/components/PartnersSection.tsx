import FadeIn from "@/components/ui/FadeIn";
import homepage from "@/data/homepage.json";

export default function PartnersSection() {
  const { partners } = homepage;

  return (
    <section className="bg-surface">
      <div className="max-w-[1440px] mx-auto px-[72px] py-[72px]">
      <FadeIn className="flex flex-col items-center gap-8">
        {/* Label */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
            {partners.label}
          </span>
          <div className="w-12 h-px bg-secondary" />
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center gap-[185px] flex-wrap">
          {partners.items.map((partner, i) => (
            <div key={i} className="w-24 h-24 relative shrink-0">
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
