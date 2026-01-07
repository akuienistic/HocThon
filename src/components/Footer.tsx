import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#credentials", label: "Credentials" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://web.facebook.com/hocthon.laat.maker.riak.2025",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://twitter.com",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
  },
];

export const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-forest-dark py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center text-cream hover:bg-forest-light transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">Contact</h3>
            <a
              href="mailto:abrahamlaat717@gmail.com"
              className="flex items-center gap-2 font-body text-sm text-cream/60 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4" />
              abrahamlaat717@gmail.com
            </a>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-start lg:items-end">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="font-heading text-xl font-bold text-cream mb-4"
            >
              HocThon<span className="text-gold">.</span>
            </a>
            <p className="font-body text-sm text-cream/60 text-left lg:text-right">
             |Wildlife Tourism Expert | PhD. Candidate in Wildlife Tourism | Speaker on Politics, Economy etc |
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/10 pt-8">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
