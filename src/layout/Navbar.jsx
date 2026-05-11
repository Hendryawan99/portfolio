import { Button } from "@/components/Button";
import {
  ListIcon,
  XIcon,
  DownloadSimpleIcon,
  SunIcon,
  MoonIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cv_link } from "@/config/cv";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  // {href: '#testimonials', label: 'Testimonials'},
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-3xl font-bold tracking-tight hover:text-primary transition-all duration-300"
        >
          HCM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="relative hidden md:flex rounded-full px-2 py-1 items-center gap-1">
          {/* Background Glass */}
          <div
            className={`absolute inset-0 rounded-full glass-strong transition-opacity duration-300 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Navigation Links */}
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="relative z-10 px-4 py-2 text-sm 
                         text-muted-foreground hover:text-foreground
                        rounded-full transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href={cv_link} target="_blank">
            <Button
              className="text-sm transition-colors duration-300"
              size="default"
            >
              <DownloadSimpleIcon size={20} />
              Download CV
            </Button>
          </a>

          {/* Toggle Theme Button PC */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex border border-border text-foreground 
            hover:border-primary hover:text-primary
            items-center justify-center 
            w-11.5 h-11.5 rounded-full 
            transition-colors duration-300"
          >
            {theme === "dark" ? (
              <SunIcon size={20} weight="fill" />
            ) : (
              <MoonIcon size={20} weight="fill" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex border border-border text-foreground 
            hover:border-primary hover:text-primary
            items-center justify-center 
            w-11.5 h-11.5 rounded-full 
            transition-colors duration-300"
          >
            {theme === "dark" ? (
              <SunIcon size={16} weight="fill" />
            ) : (
              <MoonIcon size={16} weight="fill" />
            )}
          </button>

          <button
            className="p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {/* Theme Toggle */}
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <a href={cv_link} target="_blank" className="w-full ">
              <Button
                size="sm"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <DownloadSimpleIcon />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
