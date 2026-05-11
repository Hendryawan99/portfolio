import {
  DatabaseIcon,
  StackIcon,
  PresentationChartIcon,
  QuestionIcon,
} from "@phosphor-icons/react";

const highlights = [
  {
    icon: DatabaseIcon,
    title: "End-to-End Thinker",
    description:
      "I don't just run queries. I ask what the business actually needs first.",
  },
  {
    icon: StackIcon,
    title: "One Stack, Many Problems",
    description:
      "SQL, Python, Power BI, Tableau, Looker Studio — I pick what fits, not what's familiar.",
  },
  {
    icon: PresentationChartIcon,
    title: "User-Centered Design",
    description:
      "Analysis that's easy to understand — not just a dashboard that looks good.",
  },
  {
    icon: QuestionIcon,
    title: "Detail-Oriented",
    description: "670K+ rows processed. Patterns tend to show up eventually.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-26 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              Raw Data is Just Potential,
              <span className="text-primary glow-text">
                {" "}
                Analysis is What Makes It Useful.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I turn raw data into decisions — across Excel, SQL, Python,
                Power BI, Tableau, and Looker Studio. I've processed 670K+
                transactions, shipped dashboards real teams rely on, and
                contributed to AI-driven credit research. <br />
                BNSP certified. 5+ Projects. Ready to go where the data actually
                matters.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-200">
              <p className="text-lg font-semibold italic justify-center items-center text-center text-foreground">
                "Every dataset has a story. I'll try to find it."
              </p>
            </div>
          </div>

          {/* Right Column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
