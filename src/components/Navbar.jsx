import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/70 shadow-md border-b border-primary/10 backdrop-blur-lg"
          : "py-4 bg-background/40 border-b border-transparent"
      )}
      style={{
        WebkitBackdropFilter: "blur(16px)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - No dot */}
        <a
          className="text-2xl font-bold flex items-center tracking-tight group"
          href="#hero"
        >
          <span className="relative z-10 flex items-center">
            <span className="text-primary group-hover:text-fuchsia-600 transition-colors duration-300">Abirami</span>
            <span className="ml-1 text-foreground group-hover:text-primary transition-colors duration-300">Kathiresan</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-7">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "relative text-foreground/80 font-medium px-2 py-1 transition-colors duration-200 focus:outline-none group",
                "hover:text-primary"
              )}
              tabIndex={0}
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-primary via-fuchsia-400 to-primary scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left rounded"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 focus:outline-none focus:ring-2 focus:ring-primary rounded"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg transition-all duration-400 md:hidden z-40",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-8"
          )}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <div className="flex flex-col space-y-8 text-2xl font-semibold">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Custom underline animation for nav links (remains the same) */}
      <style jsx>{`
        .group:hover span,
        .group:focus span {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
};
