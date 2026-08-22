import { Button } from "@/components/Button";
import {
  ArrowRightIcon,
  DownloadSimpleIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { NonAnimatedButton } from "@/components/NonAnimatedButton";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { cv_link } from "@/config/cv";

const skills = [
  "SQL",
  "Python",
  "Tableau",
  "Power BI",
  "Microsoft Excel",
  "Data Studio",
  "BigQuery",
  "Data Visualization",
  "Statistical Analysis",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* <img
          src=""
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        /> */}
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div> */}

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column -  Text Content */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Data Analyst
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Data Speaks.
                <span className="block text-primary glow-text">
                  I Translate.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Data analyst with hands-on experience processing 670K+ records,
                building dashboards from scratch, and surfacing insights.
                Certified by BNSP. 5+ Projects. Fresh graduate and ready to go!
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 animation-delay-300 animate-fade-in">
              <Button
                size="lg"
                className="cursor-default transition-all duration-300"
              >
                Get in Touch <ArrowRightIcon size={21} />
              </Button>
              <a href={cv_link} target="_blank" download>
                <NonAnimatedButton className="">
                  <DownloadSimpleIcon size={21} className="" />
                  Download CV
                </NonAnimatedButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/hendryawan",
                },
                { icon: FaGithub, href: "https://github.com/Hendryawan99" },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/gwe.aan",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column -  Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-img.jpg"
                  alt="Hendryawan Cipta Mulia"
                  className="w-full object-[center_5%] aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-background rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-lg font-medium">
                      Currently Employed
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                {/* <div className="absolute -top-4 -left-4 bg-background rounded-xl px-4 py-2 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-default">Years Experience</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* KPI Impact Metrics */}
        <div className="mt-16 animate-fade-in animation-delay-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "670K+", label: "Records Analyzed" },
              { number: "5+", label: "Projects Delivered" },
              { number: "BNSP", label: "Associate Data Analyst" },
              { number: "3.85", label: "GPA" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl px-6 py-5 text-center hover:bg-primary/5 hover:scale-105 transition-all duration-300 isolate"
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600 pb-5">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            What I Work With
          </p>
          <div className="relative overflow-hidden">
            {/* Fade kiri */}
            <div className="absolute left-0 top-0 h-full w-10 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            {/* Fade kanan */}
            <div className="absolute right-0 top-0 h-full w-10 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee w-max">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <CaretDownIcon className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
