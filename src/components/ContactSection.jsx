import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon!",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-xl md:text-2xl font-medium text-primary/80 animate-fade-in-delay-1">
          Feel free to reach out—my inbox is always open!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-10 text-center md:text-left">
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-primary" />,
                  label: "Email",
                  value: (
                    <a
                      href="mailto:akathiresan@ucdavis.edu"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      akathiresan@ucdavis.edu
                    </a>
                  ),
                },
                {
                  icon: <Phone className="h-6 w-6 text-primary" />,
                  label: "Phone",
                  value: (
                    <a
                      href="tel:+14082178537"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (408) 217-8537
                    </a>
                  ),
                },
                {
                  icon: <MapPin className="h-6 w-6 text-primary" />,
                  label: "Location",
                  value: (
                    <span className="text-muted-foreground">
                      California, USA
                    </span>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 justify-center md:justify-start"
                >
                  <div className="p-3 rounded-full bg-primary/10 contact-icon">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-medium mb-4">Socials</h4>
              <div className="flex justify-center md:justify-start gap-5 flex-wrap">
                {[
                  {
                    href: "https://www.linkedin.com/in/abirami-kathiresan/",
                    icon: Linkedin,
                  },
                  {
                    href: "https://github.com/misty360",
                    icon: Github,
                  },
                  {
                    href: "https://app.joinhandshake.com/profiles/g6cugx",
                    icon: Briefcase,
                  },
                  {
                    href: "https://www.instagram.com/abirami.vkat/",
                    icon: Instagram,
                  },
                ].map(({ href, icon: Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 shadow hover:shadow-lg social-icon"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-background/70 border border-muted p-8 rounded-2xl shadow-lg backdrop-blur-md form-glass">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/abirami.vkathir@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Send me a message!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition-all duration-300 send-btn"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send
                  size={18}
                  className={isSubmitting ? "animate-spin ml-1" : "ml-1"}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .form-glass {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.11);
        }
        .contact-icon,
        .social-icon {
          transition: transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s cubic-bezier(.4,0,.2,1);
        }
        .contact-icon:hover,
        .social-icon:hover {
          transform: scale(1.12) translateY(-2px);
          box-shadow: 0 4px 16px 0 rgba(99,102,241,0.18);
        }
        .send-btn:active {
          transform: scale(0.98);
        }
      `}</style>
    </section>
  );
};
