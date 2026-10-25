import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const ids = [...navLinks].map((link) => link.id).reverse();
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 96) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.theme = next;
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="page-wrap flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="text-sm font-medium tracking-tight text-foreground"
        >
          {profile.name}
        </button>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Page">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={`text-sm transition-colors ${
                activeSection === link.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={activeSection === link.id ? "true" : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={profile.cvPath} className="btn-ghost hidden px-3 py-1.5 lg:inline-flex">
            CV
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 text-muted-foreground hover:text-foreground lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav id="mobile-nav" className="border-t border-border lg:hidden" aria-label="Page">
          <div className="page-wrap flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`rounded-md px-2 py-2 text-left text-sm ${
                  activeSection === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a href={profile.cvPath} className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-foreground">
              Download CV
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
