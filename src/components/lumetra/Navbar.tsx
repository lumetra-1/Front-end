import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/#platform" },
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("platform");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    // Handle navbar styling on scroll
    const handleScroll = () => {
      setScrolled(container.scrollTop > 24);
    };
    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });

    // Handle active section using IntersectionObserver
    const sections = [
      "platform",
      "about",
      "how",
      "features",
      "pricing",
      "testimonials",
      "faq",
      "contact",
      "footer"
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,
        rootMargin: "-30% 0px -60% 0px", // Trigger when element hits the top 30% of the screen
        threshold: 0,
      }
    );

    // Give a tiny delay to ensure DOM is fully rendered before observing
    setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 transition-all duration-300 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] xl:w-[70%] max-w-6xl"
    >
      <nav
        className={`flex items-center justify-between bg-background text-foreground transition-all duration-300 shadow-[0_8px_30px_rgb(0_0_0/0.3)] rounded-b-[24px] lg:rounded-b-[32px] ${
          scrolled 
            ? "py-2 px-3 sm:px-4 lg:px-8" 
            : "py-3 px-4 sm:px-6 lg:px-8"
        }`}
      >
        <a href="/#platform" className="flex items-center pl-2 relative z-10">
          <img src="/Logo.svg" alt="Lumetra Logo" className="h-10 md:h-12 w-auto" />
        </a>

        <ul className="hidden xl:flex items-center gap-2 text-sm text-foreground/75 relative">
          {links.map((l) => {
            const sectionId = l.href.startsWith("/#") ? l.href.substring(2) : l.href.substring(1);
            const isActive = activeSection === sectionId;
            const isHovered = hoveredSection === sectionId;
            
            return (
              <li
                key={l.href}
                className="relative"
                onMouseEnter={() => setHoveredSection(sectionId)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <a
                  href={l.href}
                  className={`relative z-10 px-4 py-2 block transition-colors duration-200 font-heading ${
                    isActive ? "text-black font-semibold tracking-wide" : "text-foreground/80 hover:text-foreground font-medium"
                  }`}
                >
                  {l.label}
                </a>
                
                {/* Hover pill — glass outline */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-white/8 border border-white/15"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}

                {/* Active pill — solid primary */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 relative z-10">
          <a
            href="/Product"
            className="hidden lg:inline-flex btn-keycap"
          >
            <span className="text">Get Started</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:bg-white/5 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl p-4 shadow-2xl"
          >
            <ul className="grid gap-1">
              {links.map((l) => {
                const sectionId = l.href.startsWith("/#") ? l.href.substring(2) : l.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-full px-4 py-3 text-sm transition-all font-heading relative ${
                        isActive
                          ? "text-black font-semibold bg-primary"
                          : "text-foreground/80 hover:text-foreground font-medium hover:bg-white/8"
                      }`}
                    >
                      <span className="relative z-10">{l.label}</span>
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="/Product"
                  onClick={() => setOpen(false)}
                  className="mt-4 w-full btn-keycap"
                >
                  <span className="text">Get Started</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
