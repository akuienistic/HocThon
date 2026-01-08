import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, Globe, Award } from "lucide-react";

// Hook to animate numbers when in view
const useCountUp = (endValue: number, duration: number = 2000, suffix: string = "") => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(easeOutQuart * endValue));
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(endValue);
              }
            };
            window.requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return { count, ref };
};

// Animated stat component
const StatItem = ({ value, label, suffix = "", icon: Icon, bgColor, iconColor }: { value: number; label: string; suffix?: string; icon: React.ElementType; bgColor: string; iconColor: string }) => {
  const { count, ref } = useCountUp(value, 2000, suffix);
  return (
    <div ref={ref} className={`${bgColor} rounded-xl p-6 text-center transition-transform hover:scale-105`}>
      <div className={`w-12 h-12 ${iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="font-heading text-3xl md:text-4xl font-bold text-forest mb-1">
        {count}{suffix}
      </p>
      <p className="font-body text-xs text-forest/70 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4 text-center">About Me</p>

          {/* Section Title */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-forest text-center mb-12">
            The Convergence of
            <br />
            <span className="text-gold">Expertise</span>
          </h2>
          <img src="/Laat.webp" alt="Laat" className="mx-auto mb-8 max-w-md w-full rounded-xl shadow-lg animate-fade-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }} />

          {/* Content */}
          <div className="relative">
            {/* Decorative Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent hidden md:block" />

            <div className="md:pl-12">
              <p className="font-body text-lg md:text-xl text-forest/80 leading-relaxed mb-8">
                <span className="text-gold font-semibold">HocThon Laat Maker Riak</span> is an <strong className="text-forest font-semibold">outspoken advocate</strong> and the FIRST Ph.D. candidate the country has ever had in
                Wildlife Tourism Management, driven by a mission to create sustainable futures.
              </p>

              <p className="font-body text-lg md:text-xl text-forest/80 leading-relaxed mb-8">
                His work sits at the unique intersection of{" "}
                <span className="text-gold font-semibold">environmental conservation</span>, human migration law, and
                strategic advocacy, informed by a global education and rooted in the context of South Sudan and the
                wider East African region.
              </p>

              <p className="font-body text-lg md:text-xl text-forest/80 leading-relaxed">
                With a community of over <span className="font-semibold text-forest">100,000 followers on Facebook</span>, he leverages
                persuasive communication to turn research into actionable impact.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-forest/10">
            <StatItem value={100} label="Followers" suffix="K+" icon={Users} bgColor="bg-gold/20" iconColor="bg-gold text-white" />
            <StatItem value={6} label="Degrees & Certs" icon={GraduationCap} bgColor="bg-forest/10" iconColor="bg-forest text-cream" />
            <StatItem value={4} label="Countries Studied In" icon={Globe} bgColor="bg-blue-100" iconColor="bg-blue-500 text-white" />
            <StatItem value={5} label="Years of Expertise" icon={Award} bgColor="bg-amber-100" iconColor="bg-amber-500 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
