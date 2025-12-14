import { MapPin } from "lucide-react";
import landscapeImg from "@/assets/south-sudan-landscape.jpg";

export const BackgroundSection = () => {
  return (
    <section id="background" className="py-24 md:py-32 bg-forest overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={landscapeImg}
                alt="South Sudan landscape with savanna and acacia trees"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />

              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-body text-sm text-cream">
                  Akot, Bahr Al Ghazal
                </span>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              My Origins
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream mb-8">
              Roots &<br />
              <span className="text-gold">Focus</span>
            </h2>

            <div className="space-y-6">
              <p className="font-body text-lg text-cream/80 leading-relaxed">
                Originally from and based in <strong className="text-cream">Akot, Bahr Al Ghazal, South Sudan</strong>, my work is intrinsically linked to the development and resilience of my community and region.
              </p>

              <p className="font-body text-lg text-cream/80 leading-relaxed">
                This ground-level perspective informs all my academic and advocacy pursuits on the global stage, ensuring that my research remains anchored in real-world challenges and opportunities.
              </p>

              <div className="pt-6 border-t border-cream/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-heading text-xl text-gold">🇸🇸</span>
                  </div>
                  <div>
                    <p className="font-body text-sm text-cream/60 uppercase tracking-wider">
                      Based In
                    </p>
                    <p className="font-heading text-lg text-cream font-medium">
                      South Sudan, East Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
