import { GraduationCap, Building2 } from "lucide-react";

const credentials = [
  {
    degree: "Ph.D. in Wildlife Tourism Management",
    institution: "Kisumu City Campus College - Maseno University",
    status: "Current",
    highlight: true,
  },
  {
    degree: "Persuasive Communication in Leadership",
    institution: "Harvard Kennedy School Executive Education",
    status: "Completed",
  },
  {
    degree: "Postgraduate in Advocacy",
    institution: "University of New South Wales",
    status: "Completed",
  },
  {
    degree: "Master of Science in Project Management",
    institution: "Curtin University",
    status: "Completed",
  },
  {
    degree: "Postgraduate in Migration Law",
    institution: "Murdoch University School of Law and Criminology",
    status: "Completed",
  },
  {
    degree: "Bachelor of Tourism Management",
    institution: "Edith Cowan University (ECU)",
    status: "Completed",
  },
  {
    degree: "Secondary Education",
    institution: "Napata Secondary School",
    status: "Completed",
  },
];

export const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Radiating Colors Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold/20 via-forest/10 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        {/* Radiating Rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-forest/10 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-blue-500/10 rounded-full animate-ping"
          style={{ animationDuration: "5s" }}
        />
        {/* Orbiting Dots */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full blur-sm" />
        </div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-forest rounded-full blur-sm" />
        </div>
        {/* Corner Accents */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">Academic Journey</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-forest">
            Global
            <span className="text-gold"> Education</span>
          </h2>
          <p className="mt-5">
            Laat Maker is very learnt man. He has studied in various world class universities both in and out Africa.
            <br /> Glance at some of his majors and the institutions attended.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-forest/20 to-transparent transform md:-translate-x-1/2" />

          {/* Credentials */}
          <div className="space-y-8">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold transform -translate-x-1/2 z-10 shadow-gold">
                  {credential.highlight && (
                    <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-50" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div
                    className={`bg-white/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                      credential.highlight ? "border-gold/50" : ""
                    }`}
                  >
                    {/* Status Badge */}
                    {credential.highlight && (
                      <span className="inline-block bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full mb-3">
                        {credential.status}
                      </span>
                    )}

                    {/* Degree */}
                    <div className={`flex items-start gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <GraduationCap className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <h3 className="font-heading text-lg font-semibold text-forest leading-tight">
                        {credential.degree}
                      </h3>
                    </div>

                    {/* Institution */}
                    <div className={`flex items-center gap-2 mt-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <Building2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <p className="font-body text-sm text-muted-foreground">{credential.institution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
