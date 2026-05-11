const experiences = [
  {
    period: "Feb 2025 - Jul 2025",
    role: "Data Scientist",
    company: "PT Menara Indonesia",
    description:
      "Contributed to 3 deliverables at PT Menara Indonesia's AI & Data Science division — a Looker Studio customer profile dashboard built with Python to inform UI/UX team decisions, a structured variable research document for an AI credit scoring model, and a beginner-friendly AI Agent slide.",
    technologies: ["Python", "Looker Studio", "Google Sheets"],
    current: true,
  },
  {
    period: "Jan 2025 - Feb 2025",
    role: "Project-Based Virtual Intern: Big Data Analyst Kimia Farma x Rakamin Academy	",
    company: "PT Kimia Farma Tbk X Rakamin Academy",
    description:
      "Queried 672,458 transactions to compute net sales and gross margin, uncovering a 0.4-point service gap between branch and transaction ratings and identifying Jawa Barat as the top revenue province, delivered via a Looker Studio dashboard tracking IDR 321.2M net sales and IDR 91.2M net profit to support provincial benchmarking.",
    technologies: ["SQL", "Google BigQuery", "Google Data Studio"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full 
            blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground 
                 text-sm font-medium tracking-wider uppercase animate-fade-in"
          >
            My Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 
                 animate-fade-in animation-delay-100
                  "
          >
            <span className="text-primary glow-text">Experience</span>, Not Just
            Exposure
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A short track record, but a deliberate one. Each role added
            something concrete: a new tool, a sharper process, or a better
            understanding of how data fits into business.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 
                    w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent
                    md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178, 166, 0.5)]"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 md:-translate-x-1/2">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacoty-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          className="px-3 py-1 bg-surface border border-border/50 text-xs rounded-full text-muted-foreground"
                          key={techIdx}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
