import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const cols = [
  {
    title: "Quick Links",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Story", href: "/#about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="relative w-full pt-16 pb-8 md:pb-12 bg-transparent overflow-hidden">
      <div className="container-page">
        {/* Giant branding background text */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% auto" }}
          className="relative select-none pointer-events-none text-center font-heading font-black tracking-tighter text-[13vw] sm:text-[15vw] md:text-[17vw] uppercase leading-none bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent opacity-95 translate-y-[20%] z-0"
        >
          LUMETRA
        </motion.div>

        {/* Footer floating card */}
        <div className="relative z-10 rounded-[28px] sm:rounded-[36px] border border-white/10 bg-black/60 backdrop-blur-xl p-8 sm:p-10 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">

            {/* Left Column - Branding */}
            <div className="flex flex-col gap-4 lg:max-w-xs">
              <div className="flex items-center">
                <img src="/Logo.svg" alt="Lumetra Logo" className="h-14 sm:h-16 w-auto" />
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Turning visual data into actionable intelligence, helping enterprises monitor, detect, and respond in real time.
              </p>
            </div>

            {/* Right Column - Navigation + Socials */}
            <div className="flex flex-wrap gap-10 md:gap-14">
              {cols.map((c) => (
                <div key={c.title} className="flex flex-col gap-4 min-w-[120px]">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-primary">
                    {c.title}
                  </span>
                  <ul className="flex flex-col gap-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-sm text-white/55 hover:text-primary transition-colors duration-200"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col gap-5">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-primary">
                  Socials
                </span>
                <div className="grid grid-cols-3 gap-3 w-fit">
                  <a href="https://www.facebook.com/Lumetra.one/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/60 hover:text-black hover:-translate-y-1 transition-all duration-300" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.youtube.com/@Lumetra-ONE" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/60 hover:text-black hover:-translate-y-1 transition-all duration-300" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/lumetra-one/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/60 hover:text-black hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://x.com/LumetraONE" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/60 hover:text-black hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://www.pinterest.com/LumetraONE/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/60 hover:text-black hover:-translate-y-1 transition-all duration-300" aria-label="Pinterest">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.14-1.6.03-2.31.15-.62.98-4.14.98-4.14s-.25-.5-.25-1.24c0-1.16.67-2.03 1.51-2.03.71 0 1.05.53 1.05 1.17 0 .72-.45 1.79-.69 2.78-.2.83.42 1.51 1.23 1.51 1.48 0 2.62-1.56 2.62-3.82 0-1.99-1.43-3.38-3.47-3.38-2.36 0-3.75 1.77-3.75 3.6 0 .71.27 1.48.61 1.9.06.07.06.13.04.19-.06.23-.19.76-.21.85-.03.11-.11.13-.23.08-1.27-.58-2.06-2.42-2.06-3.89 0-3.17 2.3-6.08 6.64-6.08 3.49 0 6.2 2.49 6.2 5.81 0 3.47-2.18 6.26-5.21 6.26-1.02 0-1.98-.53-2.31-1.16l-.63 2.39c-.23.87-.85 1.96-1.27 2.62A12.01 12.01 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center text-center">
            <span className="text-sm text-white/45">© 2026 Lumetra. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

