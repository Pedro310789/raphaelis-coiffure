import settings from "@/data/settings.json";

export default function Footer() {
  const { footer } = settings;

  return (
    <footer className="bg-bg">
      <div className="max-w-[1440px] mx-auto px-[72px] pt-[72px] pb-[48px] flex flex-col gap-20 items-center">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col items-center pb-2 w-full">
              <h2 className="font-serif text-[56px] text-heading leading-none text-center">
                Maison Raphaëlis
              </h2>
            </div>
            <div className="w-16 h-px bg-secondary" />
            <p className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] text-center">
              {footer.tagline}
            </p>
          </div>
        </div>

        {/* 3 columns */}
        <div className="border-t border-stroke grid grid-cols-3 gap-6 pt-16 w-full">
          {/* Column 1 — Navigation */}
          <div className="flex flex-col gap-6">
            <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
              {footer.columns.maison.label}
            </span>
            <nav className="flex flex-col gap-3">
              {footer.columns.maison.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="font-serif text-[16px] text-body leading-[1.3] hover:text-heading transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2 — Social */}
          <div className="flex flex-col gap-6">
            <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
              {footer.columns.social.label}
            </span>
            <nav className="flex flex-col gap-3">
              {footer.columns.social.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="font-serif text-[16px] text-body leading-[1.3] hover:text-heading transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Newsletter */}
          <div className="flex flex-col gap-6 pb-20">
            <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
              {footer.columns.newsletter.label}
            </span>
            <p className="font-serif text-[16px] text-body leading-[1.3]">
              {footer.columns.newsletter.description}
            </p>
            <div className="border-b border-stroke flex items-center pb-px">
              <input
                type="email"
                placeholder={footer.columns.newsletter.placeholder}
                className="flex-1 bg-transparent font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3] py-3 outline-none placeholder:text-secondary"
              />
              <button className="h-12 flex items-center gap-2 font-sans text-[14px] text-heading uppercase tracking-[0.42px] leading-[1.2] hover:text-secondary transition-colors duration-200">
                {footer.columns.newsletter.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stroke pt-10 flex items-center justify-between w-full">
          <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
            {footer.copyright}
          </span>
          <span className="font-sans text-[12px] text-secondary uppercase tracking-[0.6px] leading-[1.3]">
            {footer.legal}
          </span>
        </div>
      </div>
    </footer>
  );
}
