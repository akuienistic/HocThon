export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4 text-center">
            About Me
          </p>

          {/* Section Title */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-forest text-center mb-12">
            The Convergence of
            <br />
            <span className="text-gold">Expertise</span>
          </h2>

          {/* Content */}
          <div className="relative">
            {/* Decorative Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent hidden md:block" />

            <div className="md:pl-12">
              <p className="font-body text-lg md:text-xl text-forest/80 leading-relaxed mb-8">
                I am an <strong className="text-forest font-semibold">outspoken advocate</strong> and Ph.D. candidate in Wildlife Tourism Management, driven by a mission to create sustainable futures.
              </p>

              <p className="font-body text-lg md:text-xl text-forest/80 leading-relaxed mb-8">
                My work sits at the unique intersection of <span className="text-gold font-semibold">environmental conservation</span>, human migration law, and strategic advocacy, informed by a global education and rooted in the context of South Sudan and the wider East African region.
              </p>

              <p className="font-body text-lg md:text-xl text-forest/80 leading-relaxed">
                With a community of over <span className="font-semibold text-forest">80,000 followers</span>, I leverage persuasive communication to turn research into actionable impact.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-forest/10">
            {[
              { value: "80K+", label: "Followers" },
              { value: "6+", label: "Degrees & Certifications" },
              { value: "4", label: "Countries Studied" },
              { value: "10+", label: "Years in Advocacy" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-forest/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
