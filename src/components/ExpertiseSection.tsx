import { Trees, Scale, Megaphone } from "lucide-react";

const pillars = [
  {
    icon: Trees,
    title: "Wildlife Tourism & Conservation Management",
    description:
      "Researching sustainable models that protect ecosystems and support local livelihoods.",
  },
  {
    icon: Scale,
    title: "Migration Law & Policy",
    description:
      "Applying postgraduate legal expertise to human migration challenges linked to environmental and economic factors.",
  },
  {
    icon: Megaphone,
    title: "Strategic Advocacy & Communication",
    description:
      "Harnessing executive education from Harvard Kennedy School to campaign for policy change and public engagement.",
  },
];

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-forest">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            What I Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            Interdisciplinary
            <br />
            <span className="text-gold">Pillars</span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-forest-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:bg-forest-light hover:border-gold/30 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <pillar.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Number */}
              <span className="absolute top-8 right-8 font-heading text-6xl font-bold text-cream/5 group-hover:text-cream/10 transition-colors duration-300">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl lg:text-2xl font-semibold text-cream mb-4 leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="font-body text-cream/70 leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
