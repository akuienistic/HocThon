import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { BackgroundSection } from "@/components/BackgroundSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <CredentialsSection />
      <BackgroundSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
