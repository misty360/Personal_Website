import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-black"
    >
      {/* Cosmic animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-x"
        style={{
          background:
            "linear-gradient(130deg, #0f0c29, #302b63, #4a00e0, #8e2de2, #0f0c29)",
          backgroundSize: "600% 600%",
          zIndex: 0,
          filter: "blur(32px)",
          opacity: 0.65,
        }}
      />

      {/* Starfield overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "2px 2px",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <div className="relative z-10 container max-w-3xl mx-auto text-center space-y-8">
        <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight leading-tight text-white">
          <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="block text-primary mt-2 opacity-0 animate-fade-in-delay-1">
            Abirami Kathiresan
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto opacity-0 animate-fade-in-delay-2">
          Creating impact with code—<span className="font-semibold text-primary">building solutions</span> that matter.
        </p>

        <div className="pt-2 opacity-0 animate-fade-in-delay-3">
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg hover:bg-primary/90 transition"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-xs text-slate-400 mb-1 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 30s ease infinite;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s forwards;
          animation-delay: 0.3s;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s forwards;
          animation-delay: 0.6s;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s forwards;
          animation-delay: 0.9s;
        }
      `}</style>
    </section>
  );
};
