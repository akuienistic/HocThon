export const Footer = () => {
  return (
    <footer className="bg-forest-dark py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-body text-sm text-cream/60 text-center md:text-left">
            © 2026 HocThon Laat Maker Riak. All rights reserved.
          </p>

          {/* Designer Credit */}
          <p className="font-body text-sm text-cream/60 text-center">
            Designed and Built by{" "}
            <a
              href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              Simon Akuien
            </a>
          </p>

          {/* Logo */}
          <a href="#hero" className="font-heading text-xl font-bold text-cream">
            HocThon<span className="text-gold">.</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
