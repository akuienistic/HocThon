import { useState } from "react";
import {
  Mail,
  BookOpen,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Loader2,
  User,
  AtSign,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: (
        <div className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
          Thank you for reaching out. I'll get back to you soon.
        </div>
      ),
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">Connect with him</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6">
            Collaborate &<span className="text-gold"> Connect</span>
          </h2>
          <p className="font-body text-lg text-forest/70 max-w-2xl mx-auto">
            Laat is open to speaking engagements, academic collaboration, consulting projects, and media inquiries
            related to wildlife tourism, migration, and advocacy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-soft">
            <h3 className="font-heading text-2xl font-semibold text-forest mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 font-body text-sm font-medium text-forest mb-2"
                >
                  <User className="w-4 h-4 text-gold" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 font-body text-sm font-medium text-forest mb-2"
                >
                  <AtSign className="w-4 h-4 text-gold" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 font-body text-sm font-medium text-forest mb-2"
                >
                  <MessageSquare className="w-4 h-4 text-gold" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  placeholder="Elucidate your concern or inquiry here..."
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Email */}
            <div className="group">
              <div className="flex items-center gap-4 p-6 bg-forest/5 rounded-xl transition-colors hover:bg-forest/10">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-forest/60 uppercase tracking-wider mb-1">Send an Email</p>
                  <a
                    href="mailto:contact@hocthonriak.com"
                    className="font-heading text-lg text-forest hover:text-gold transition-colors"
                  >
                    hocthonriak@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Research Publications */}
            <div className="group">
              <a
                href="#"
                className="flex items-center gap-4 p-6 bg-forest/5 rounded-xl transition-colors hover:bg-forest/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-forest/60 uppercase tracking-wider mb-1">Academic Profile</p>
                  <span className="font-heading text-lg text-forest group-hover:text-gold transition-colors">
                    View My Research Publications
                  </span>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-forest/10">
              <p className="font-body text-sm text-forest/60 uppercase tracking-wider mb-4">
                Follow Laat on His social Media Handles.
              </p>
              <div className="flex gap-4 justify-start">
                <a
                  href="https://web.facebook.com/hocthon.laat.maker.riak.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center text-cream hover:bg-forest-light transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center text-cream hover:bg-forest-light transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center text-cream hover:bg-forest-light transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
