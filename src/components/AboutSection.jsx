import { Briefcase, Code, Settings } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-transparent">
      {/* Cosmic blur aurora */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] rounded-full pointer-events-none z-0 blur-3xl opacity-50 animate-fade-in"
        style={{
          background: "radial-gradient(circle at center, #4a00e0 0%, #0f0c29 50%, transparent 100%)",
        }}
      />

      <div className="relative container mx-auto max-w-5xl z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
          About <span className="text-primary">Me</span>
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-center mb-10 text-primary/80 animate-fade-in-delay-1">
          Hey there, nice to meet you!
        </h3>

        <div className="max-w-3xl mx-auto space-y-6 text-center text-slate-300">
          <p className="animate-fade-in-delay-2">
            I'm a <span className="font-semibold text-primary">Data Science</span> major at UC Davis, minoring in Computer Science and Technology Management. I’m passionate about building software that bridges technical precision with real-world impact—whether through <span className="font-semibold text-primary">data-driven tools</span>, intuitive user interfaces, or scalable backend systems.
          </p>
          <p className="animate-fade-in-delay-3">
            I’ve worked on diverse teams to design, build, and deploy real products. My experience spans <span className="font-semibold text-primary">web development</span>, <span className="font-semibold text-primary">machine learning</span>, and <span className="font-semibold text-primary">product management</span>. I enjoy collaborating across disciplines to turn complex problems into thoughtful, user-first solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition"
            >
              Contact Me
            </a>
            <a
              href="/Resume [2026].pdf"
              className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Code className="h-7 w-7 text-primary" />,
              title: "Web Development",
              desc: "From full-stack apps to responsive interfaces, I build fast, accessible websites using modern frameworks.",
            },
            {
              icon: <Briefcase className="h-7 w-7 text-primary" />,
              title: "Product Management",
              desc: "I translate user needs into product features, working across teams to deliver user-focused solutions that scale.",
            },
            {
              icon: <Settings className="h-7 w-7 text-primary" />,
              title: "Machine Learning",
              desc: "I apply ML to real-world data—from forecasting behavior to building intelligent tools that adapt and learn.",
            },
          ].map((card, idx) => (
            <div
              key={card.title}
              className={`rounded-xl p-7 bg-background border border-border text-center transition-all duration-300 hover:shadow-xl hover:border-primary/50 group animate-fade-in-delay-${5 + idx}`}
              style={{
                backgroundColor: "rgba(36, 36, 62, 0.5)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 w-14 h-14 group-hover:bg-primary/20 transition">
                  {card.icon}
                </span>
              </div>
              <h4 className="font-semibold text-lg text-white mb-2">{card.title}</h4>
              <p className="text-slate-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.7s forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.7s 0.2s forwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.7s 0.4s forwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.7s 0.6s forwards;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.7s 0.8s forwards;
        }

        .animate-fade-in-delay-5 {
          animation: fade-in 0.7s 1s forwards;
        }

        .animate-fade-in-delay-6 {
          animation: fade-in 0.7s 1.2s forwards;
        }

        .animate-fade-in-delay-7 {
          animation: fade-in 0.7s 1.4s forwards;
        }
      `}</style>
    </section>
  );
};
