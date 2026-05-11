import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { NonAnimatedButton } from "@/components/NonAnimatedButton";

const projects = [
  {
    title: "Performance Analytics Kimia Farma Business Year 2020-2023",
    description:
      "Queried 672,458 transactions using BigQuery + SQL across 4 consolidated tables to compute net sales, profit, and gross margin, uncovering a 0.4-point service gap between branch (4.4) and transaction ratings (4.0) and identifying Jawa Barat as the top-performing province — delivered via a Looker Studio dashboard tracking IDR 321.2M net sales and IDR 91.2M net profit over 4 years.",
    image: "/projects/project-1.png",
    tags: ["Google BigQuery", "Google Data Studio", "SQL"],
    link: "https://datastudio.google.com/reporting/b14aac88-7c5e-4c02-96e5-1d248c307de4",
    github: "#",
  },
  {
    title: "Airline Customer Experience & Service Quality Analysis",
    description:
      "Built a Tableau dashboard analyzing 1,324 customer reviews across 7 service dimensions — surfacing an overall satisfaction score of 4.2/10, flagging food (2.4/10) as critical gaps, and benchmarking fleet performance from Boeing 747-400 (4.7/10) down to A321 (3.6/10) to directly inform service improvement priorities.",
    image: "/projects/project-2.png",
    tags: ["Tableau"],
    link: "https://drive.google.com/file/d/1Lks-mRA-59qGDWMAqopDItaKteSP-QPv/view?usp=drive_link",
    github: "#",
  },
  {
    title: "Data Job Market Analysis in Malaysia",
    description:
      "Analyzed Malaysian data job market using Python (Pandas, NumPy, Matplotlib, Seaborn), identifying SQL, Excel, and Python as the top 3 universal skills across 3 data roles, and surfacing Excel and SQL as the most strategic skills for Data Analysts — appearing in ~40–45% of job postings with $70K–$90K median salary — directly informing strategic upskilling priorities for aspiring data professionals in Malaysia.",
    image: "/projects/project-3.png",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/Hendryawan99/data_job_analysis",
    github: "#",
  },
  {
    title: "Customer Segmentation & Purchase Trend Analysis",
    description:
      "Analyzed and cleaned 1,000+ customer records in Excel using Pivot Tables, data validation, and logical functions to uncover key purchasing trends, revealing that 80% of buyers were middle-aged, low-income, short-distance commuters; developed an interactive dashboard with dynamic segmentation filters that translated insights into targeted marketing recommendations to improve campaign focus and customer conversion.",
    image: "/projects/project-4.png",
    tags: ["Microsoft Excel"],
    link: "https://drive.google.com/file/d/1a6BA88SZUkz80bGfgqiv7bk3K2Y_xyZd/view?usp=drive_link",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Backgroud Glow */}
      <div className="absolute top1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 ralative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            From Messy Data <span className="block mt-2" />
            <span className="text-primary glow-text">
              to Meaningful Output.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects that demonstrate my skills in data analysis,
            visualization, and storytelling. Each project highlights my ability
            to turn complex data into actionable insights that drive
            decision-making and business value.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden aspect-video cursor-pointer block shrink-0"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 rounded-full border-none glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRightIcon className="h-10 w-10" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRightIcon className="w-6 h-6 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://drive.google.com/drive/folders/1ntAlfNjTTZcH2T3-2RcrRaeUGwuBdsNe?usp=sharing"
            target="_blank"
          >
            <NonAnimatedButton>
              View All Projects
              <ArrowUpRightIcon size={23} className="" />
            </NonAnimatedButton>
          </a>
        </div>
      </div>
    </section>
  );
};
