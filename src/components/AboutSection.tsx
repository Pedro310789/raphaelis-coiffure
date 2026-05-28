import FadeIn from "@/components/ui/FadeIn";
import homepage from "@/data/homepage.json";

export default function AboutSection() {
  const { about } = homepage;

  return (
    <section className="bg-surface">
      <div className="max-w-[1440px] mx-auto px-[72px] py-[96px]">
      <div className="flex items-center gap-[134px]">
        {/* Left — image + caption */}
        <FadeIn direction="left" className="flex flex-col gap-3 shrink-0">
          <div className="relative w-[526px] h-[745px] overflow-hidden">
            <img
              src={about.image}
              alt={about.imageCaption}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
            {about.imageCaption}
          </p>
        </FadeIn>

        {/* Right — text */}
        <FadeIn direction="right" delay={0.15} className="flex flex-col gap-14 w-[615px] shrink-0">
          {/* Heading block */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {/* Label */}
              <div className="flex flex-col gap-4">
                <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
                  {about.label}
                </span>
                <div className="w-12 h-px bg-secondary" />
              </div>
              {/* Title */}
              <h2 className="font-serif text-[56px] text-heading leading-none">
                {about.titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            {/* Description */}
            <p className="font-sans text-[16px] text-body leading-[1.5] whitespace-pre-line">
              {about.description}
            </p>
          </div>

          {/* Link CTA */}
          <a
            href={about.linkUrl}
            className="inline-flex items-center gap-2 font-sans text-[14px] text-heading uppercase tracking-[0.42px] leading-[1.2] group"
          >
            {about.linkText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeIn>
      </div>
      </div>
    </section>
  );
}
