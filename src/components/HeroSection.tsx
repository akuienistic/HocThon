import { ArrowDown, Briefcase, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#expertise");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional academic setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-cream/10 rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            HocThon Laat
            <br />
            <span className="text-gold">Maker Riak</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-8 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Wildlife Tourism Researcher • Advocacy Leader • Ph.D. Candidate
          </p>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            Bridging conservation, migration policy, and community development
            through research and persuasive leadership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            <Button variant="hero" onClick={scrollToWork}>
              <Briefcase className="w-4 h-4" />
              View My Work
            </Button>
            <Button variant="heroOutline" onClick={scrollToContact}>
              <MessageCircle className="w-4 h-4" />
              Contact Me
            </Button>
          </div>

          {/* Follower Badge */}
          <div className="mt-16 inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-6 py-3 animate-fade-up opacity-0" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-cream/90 font-body text-sm">
              80K+ Followers • Outspoken TruthTeller
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cream/50" size={28} />
      </div>
    </section>
  );
};
