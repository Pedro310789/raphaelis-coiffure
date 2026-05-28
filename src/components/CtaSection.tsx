import FadeIn from "@/components/ui/FadeIn";
import homepage from "@/data/homepage.json";

export default function CtaSection() {
  const { cta } = homepage;

  return (
    <section id="contact">
      <div className="max-w-[1440px] mx-auto flex">
      {/* Left — image */}
      <FadeIn direction="left" className="w-1/2 relative overflow-hidden min-h-[600px]">
        <img
          src={cta.image}
          alt="Maison Raphaëlis — intérieur"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </FadeIn>

      {/* Right — dark content */}
      <FadeIn
        direction="right"
        delay={0.1}
        className="w-1/2 bg-dark flex flex-col gap-12 items-start justify-center pl-20 pr-18 py-24"
      >
        {/* Info section */}
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-16 w-full">
            {/* Visit heading + description */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4">
                <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
                  {cta.label}
                </span>
                <div className="w-12 h-px bg-secondary" />
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-[46px] leading-none">
                  <span className="text-white block">{cta.titleLine1}</span>
                  <span className="text-white/70 block">{cta.titleLine2}</span>
                </h2>
                <p className="font-sans text-[14px] text-white/60 leading-[1.5] tracking-[0.14px]">
                  {cta.description}
                </p>
              </div>
            </div>

            {/* Address + Contact */}
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-4 w-1/2">
                <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
                  Adresse
                </span>
                <p className="font-serif text-[16px] text-white leading-[1.3] whitespace-pre-line">
                  {cta.address}
                </p>
              </div>
              <div className="flex flex-col gap-4 w-1/2">
                <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
                  Contact
                </span>
                <p className="font-serif text-[16px] text-white leading-[1.3] whitespace-pre-line">
                  {cta.contact}
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4 w-full">
            <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
              Heures d'ouverture
            </span>
            <div className="flex flex-col gap-4 font-serif text-[16px]">
              {cta.hours.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between pb-3 ${
                    i < cta.hours.length - 1 ? "border-b border-white/20" : ""
                  } ${row.closed ? "text-white/60" : "text-white"}`}
                >
                  <span className="leading-[1.3]">{row.days}</span>
                  <span className="leading-[1.3]">{row.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA button */}
        <a
          href={cta.ctaUrl}
          className="border border-stroke h-12 flex items-center justify-center px-8 font-sans text-[14px] text-white uppercase tracking-[0.42px] leading-[1.2] hover:bg-white/10 transition-colors duration-300"
        >
          {cta.cta}
        </a>
      </FadeIn>
      </div>
    </section>
  );
}
