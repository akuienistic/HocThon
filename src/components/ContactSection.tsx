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
import emailjs from "@emailjs/browser";

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

  // Sanitize input to prevent XSS
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Limit message length to prevent abuse
    if (formData.message.length > 5000) {
      toast({
        title: "Message Too Long",
        description: "Please limit your message to 5000 characters.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Check if environment variables are defined
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("Missing EmailJS environment variables");
        toast({
          title: "Configuration Error",
          description: "Email service is not configured. Please contact the site administrator.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare sanitized template parameters
      const templateParams = {
        from_name: sanitizeInput(formData.name),
        from_email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message),
        to_name: "HocThon Laat Maker Riak",
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // Limit requests to 1 per 5 seconds
          },
        }
      );

      if (response.status === 200) {
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
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    href="mailto:laatabraham717@gmail.com"
                    className="font-heading text-lg text-forest hover:text-gold transition-colors"
                  >
                    laatabraham717@gmail.com
                  </a>
                </div>
              </div>
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
