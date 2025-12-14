export const Footer = () => {
  return (
    <footer className="bg-forest-dark py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-body text-sm text-cream/60 text-center md:text-left">
            © 2026 HocThon Laat Maker Riak. All rights reserved.
          </p>

          {/* Logo */}
          <a href="#hero" className="font-heading text-xl font-bold text-cream">
            HocThon<span className="text-gold">.</span>
          </a>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
