import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  // Show scroll-to-top button after scrolling down a bit
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border mt-12 pt-12 pb-8 flex flex-col items-center justify-center">
      <p className="text-sm text-muted-foreground select-none mb-2">
        &copy; {new Date().getFullYear()} Abirami Kathiresan. All rights reserved.
      </p>

      {/* Floating Scroll-to-Top Button */}
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300
          ${showTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <span className="scroll-top-btn flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-fuchsia-400 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/70 backdrop-blur-lg">
          <ArrowUp size={28} className="text-white drop-shadow" />
        </span>
      </button>

      <style jsx>{`
        .scroll-top-btn {
          width: 56px;
          height: 56px;
          box-shadow: 0 8px 32px 0 rgba(99,102,241,0.12);
          background: linear-gradient(135deg, #6366f1 60%, #d946ef 100%);
          transition:
            box-shadow 0.25s cubic-bezier(.4,0,.2,1),
            transform 0.18s cubic-bezier(.4,0,.2,1),
            background 0.25s cubic-bezier(.4,0,.2,1);
        }
        .scroll-top-btn:hover {
          box-shadow: 0 12px 36px 0 rgba(99,102,241,0.18), 0 0 0 4px #f3e8ff77;
          background: linear-gradient(120deg, #d946ef 0%, #6366f1 100%);
        }
      `}</style>
    </footer>
  );
};
