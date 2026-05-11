import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hendryawan",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Hendryawan99",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/gwe.aan",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight hover:text-primary transition-all duration-300"
            >
              HCM<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Hendryawan Cipta Mulia. All rights reserved.
            </p>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground 
                        hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Social */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border 
                        flex items-center justify-center
                        text-muted-foreground
                        hover:text-primary hover:border-primary/50
                        transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
