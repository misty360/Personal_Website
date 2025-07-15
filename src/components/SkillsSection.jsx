import { useState } from "react";
import { cn } from "@/lib/utils";

const skillCategories = {
  Languages: [
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "C++",
    "R",
    "SQL",
    "Bash",
  ],
  "Frameworks & Libraries": [
    "Spring Boot",
    "React",
    "Node.js",
    "BrainFlow",
    "MNE",
    "scikit-learn",
  ],
  Tools: [
    "Git",
    "AWS",
    "Linux",
    "Docker",
    "Gradle",
    "Maven",
    "Jira",
    "Postman",
    "Figma",
    "Streamlit",
    "Oracle",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ],
};

const categories = Object.keys(skillCategories);

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12 border-b border-muted">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 text-lg font-semibold transition-colors duration-300 border-b-4",
                activeCategory === category
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills badges with About cards hover animation */}
        <div
          key={activeCategory}
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto animate-fade-in"
        >
          {skillCategories[activeCategory].map((skill) => (
            <div
              key={skill}
              className="rounded-xl bg-background border border-muted shadow-md px-6 py-3 flex items-center justify-center text-primary font-semibold cursor-default transition-transform duration-300 hover:shadow-lg hover:scale-[1.05]"
              style={{ minWidth: "140px", minHeight: "48px" }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};
