import { ArrowDown, ArrowUp, Briefcase, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/HocThon Laat Maker Riak.jpg";

export const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#expertise");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional academic setting" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-cream/10 rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight animate-fade-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            HocThon Laat
            <br />
            <span className="text-gold">Maker Riak</span>
            <br />
          </h1>

          {/* Subtitle */}
          <p
            className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            Wildlife Tourism Researcher • Advocacy Leader • Ph.D. Candidate
          </p>

          {/* Tagline */}
          <p
            className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            Bridging conservation, migration policy, and community development through research and persuasive
            leadership.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
            style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
          >
            <Button variant="hero" onClick={scrollToWork}>
              <Briefcase className="w-4 h-4" />
              View His Work
            </Button>
            <Button variant="heroOutline" onClick={scrollToContact}>
              <MessageCircle className="w-4 h-4" />
              Contact Him
            </Button>
          </div>

          {/* Arrow pointing to bottom */}
          <button
            onClick={scrollToBottom}
            className="flex mx-auto mt-10 text-cream/50 animate-bounce cursor-pointer bg-transparent border-none"
          >
            <ArrowDown size={28} />
          </button>

          {/* Follower Badge */}
          <div
            className="mt-10 mb-12 inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-6 py-3 animate-fade-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <div className="w-6 h-3 bg-gold rounded-full animate-pulse" />
            <span className="text-cream/90 font-body text-sm">
              100K+ Followers on Facebook • Commentator on Politics • First PhD in Tourism in South Sudan
            </span>
          </div>

          {/* Video Caption */}
          <p
            className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mt-8 mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
          >
            Featured Video
          </p>
          <p className="text-cream/90 mb-8 text-lg leading-relaxed">
            Featured below, is a video of Laat Maker during his PhD Proposal Presentation titled, "Determinance of
            Community based Tourism Practices & its Effects on sustainable Tourism Performace of National Parks in South
            Sudan".
          </p>

          {/* Video */}
          <div className="mx-auto max-w-4xl mb-10 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/awOzEdRq_9M?modestbranding=1&rel=0&iv_load_policy=3&controls=1&enablejsapi=1"
                title="Featured Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

