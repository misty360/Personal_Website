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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/95 shadow-lg border-b border-primary/10 backdrop-blur-xl"
          : "py-4 bg-background/90 border-b border-primary/10 backdrop-blur-xl"
      )}
      style={{
        WebkitBackdropFilter: "blur(16px)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="container relative flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-2xl font-bold flex items-center tracking-tight group"
          href="#hero"
        >
          <span className="relative z-10 flex items-center">
            <span className="text-primary group-hover:text-fuchsia-600 transition-colors duration-300">
              Abirami
            </span>
            <span className="ml-1 text-foreground group-hover:text-primary transition-colors duration-300">
              Kathiresan
            </span>
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

        {/* Mobile Nav Dropdown */}
        <div
          className={cn(
            "absolute top-full right-0 mt-3 w-52 rounded-2xl border border-primary/10 bg-background/95 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="flex flex-col py-2">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="px-5 py-3 text-foreground/90 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};