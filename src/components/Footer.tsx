import settings from "@/data/settings.json";

export default function Footer() {
  const { footer } = settings;

  return (
    <footer className="bg-bg">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[72px] pt-14 lg:pt-[72px] pb-10 lg:pb-[48px] flex flex-col gap-12 lg:gap-20 items-center">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-5 lg:gap-6 w-full">
          {/* Mobile : texte — Desktop : icône R */}
          <h2 className="font-serif text-[40px] text-heading leading-none text-center lg:hidden">
            Maison Raphaëlis
          </h2>
          <img
            src="/uploads/icone-R-Raphaelis-maison-coiffure.svg"
            alt="Maison Raphaëlis"
            className="hidden lg:block h-28 w-auto"
            style={{ filter: "brightness(0)" }}
          />
          <div className="w-16 h-px bg-secondary" />
          <p className="font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
            {footer.tagline}
          </p>
        </div>

        {/* 3 columns — stacked on mobile */}
        <div className="border-t border-stroke grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 pt-10 lg:pt-16 w-full">
          {/* Column 1 — Navigation */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <span className="font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
              {footer.columns.maison.label}
            </span>
            <nav className="flex flex-col gap-2 lg:gap-3">
              {footer.columns.maison.links.map((link) => (
                <a key={link.label} href={link.url} className="font-serif text-[16px] text-body leading-[1.3] hover:text-heading transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2 — Social */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <span className="font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
              {footer.columns.social.label}
            </span>
            <nav className="flex flex-col gap-2 lg:gap-3">
              {footer.columns.social.links.map((link) => (
                <a key={link.label} href={link.url} className="font-serif text-[16px] text-body leading-[1.3] hover:text-heading transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Newsletter */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <span className="font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
              {footer.columns.newsletter.label}
            </span>
            <p className="font-serif text-[16px] text-body leading-[1.3]">
              {footer.columns.newsletter.description}
            </p>
            <div className="border-b border-stroke flex items-center pb-px">
              <input
                type="email"
                placeholder={footer.columns.newsletter.placeholder}
                className="flex-1 bg-transparent font-sans text-[11px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] py-3 outline-none placeholder:text-secondary"
              />
              <button className="h-12 flex items-center gap-2 font-sans text-[13px] lg:text-[14px] text-heading uppercase tracking-[0.42px] leading-[1.2] hover:text-secondary transition-colors duration-200">
                {footer.columns.newsletter.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stroke pt-8 lg:pt-10 flex flex-col lg:flex-row items-center lg:justify-between gap-3 w-full">
          <span className="font-sans text-[10px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center lg:text-left">
            {footer.copyright}
          </span>
          <span className="font-sans text-[10px] lg:text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center lg:text-right">
            {footer.legal}
          </span>
        </div>
      </div>
    </footer>
  );
}
