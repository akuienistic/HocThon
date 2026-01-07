import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Home, User, Briefcase, Award, Map, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#expertise", label: "Expertise", icon: Briefcase },
  { href: "#credentials", label: "Credentials", icon: Award },
  { href: "#background", label: "Background", icon: Map },
  { href: "#contact", label: "Contact", icon: Phone },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-cream/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className={`font-heading text-xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-forest" : "text-cream"
          }`}
        >
          HocThon<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-body text-sm font-medium transition-all duration-300 hover:text-accent ${
                isScrolled ? "text-forest/80 hover:text-forest" : "text-cream/80 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="gold"
            size="sm"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-forest" : "text-cream"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 w-1/2 bg-forest/95 backdrop-blur-md border-l border-cream/10 shadow-2xl transition-all duration-300 overflow-hidden rounded-bl-lg ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center gap-4 text-cream/80 hover:text-cream hover:bg-cream/10 font-body text-lg transition-all duration-200 py-3 px-4 rounded-lg group"
            >
              <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              {link.label}
            </a>
          ))}
          <div className="border-t border-cream/10 pt-6 mt-2">
            <Button
              variant="gold"
              className="w-full justify-center"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
