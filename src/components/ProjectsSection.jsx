import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Deportation Risk Detector",
    description: `A machine learning-driven application that continuously scrapes, monitors, and analyzes immigration-related news articles from trusted sources. Utilizes advanced NLP and pattern recognition to assess the potential risk of deportation for international students. Results are presented through an interactive Streamlit dashboard, enabling real-time, personalized insights and pro-active risk management.`,
    tags: ["Python", "Machine Learning", "NLP", "Web Scraping", "Streamlit"],
  },
  {
    title: "ANCOR Political Literacy Platform",
    description: `A comprehensive full-stack platform designed to increase political literacy. Features a curated news feed, live ballot proposition updates, and a searchable glossary of political terms. Developed with a clean and responsive UI, backed by Firebase for scalable data and real-time functionality.`,
    tags: ["React", "Node.js", "Firebase", "CSS", "REST API"],
  },
  {
    title: "Focus Prediction BCI",
    description: `A novel Brain-Computer Interface pipeline for real-time focus detection built on EEG data. Combines signal acquisition using OpenBCI, feature extraction via MNE, and machine learning models for focus inference. Integrates a Python-Selenium automation module to control media playback (pause/resume) dynamically, creating seamless interaction between neurotechnology and real-world applications.`,
    tags: ["OpenBCI", "Python", "EEG", "MNE", "Machine Learning", "Selenium"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Featured <span className="text-primary text-glow">Projects</span>
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-center mb-14 text-primary/90">
          From concept to code—projects that tell a story through insight and innovation.
        </h3>
        <div className="flex flex-col items-center relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent rounded-full z-0" />
          {projects.map((project, idx) => (
            <div key={project.title} className="relative w-full mb-12 z-10">
              <div
                className={`
                  mx-auto max-w-xl px-7 py-8 rounded-2xl border 
                  border-primary/30 bg-card backdrop-blur-md
                  shadow-[0_0_10px_2px_rgba(168,85,247,0.35)]
                  ${idx % 2 === 0 ? "mr-auto" : "ml-auto"}
                `}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium uppercase tracking-wide bg-primary/10 text-primary border border-primary/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-glow">
                  {project.title}
                </h3>
                <p className="text-zinc-200 leading-relaxed font-medium whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="https://github.com/misty360"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-2 text-sm md:text-base font-semibold transition-all"
          >
            Check My GitHub
            <ArrowRight size={18} className="mt-[1px]" />
          </a>
        </div>
      </div>
    </section>
  );
};
