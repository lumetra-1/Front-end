import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="platform"
      className="relative w-full overflow-hidden flex flex-col min-h-[640px] -mt-[4.5rem] lg:h-[calc(100vh-3rem)] xl:h-[calc(100vh-3rem)]"
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.png"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>


      {/* ── Bottom content ── */}
      <div className="relative z-10 mt-auto w-full px-6 pb-10 lg:px-10 lg:pb-12 xl:px-14 xl:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">

          {/* Left: big heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-light text-white leading-[1.05] tracking-tight
              text-4xl
              sm:text-5xl
              lg:text-[4rem]
              xl:text-[5rem]
              max-w-2xl"
          >
           Powering Vision,
            <br />
            <span className="text-primary">Delivering Intelligence</span>
          </motion.h1>

          {/* Right: description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start gap-5 max-w-xs lg:max-w-sm xl:max-w-md flex-shrink-0"
          >
            {/* Arrow + description */}
            <div className="flex items-start gap-3">
              <p className="text-sm xl:text-base font-light text-white/70 leading-relaxed">
                We process visual data in real time, enabling organisations to detect objects, analyse behaviour, and generate actionable intelligence from any camera source.
              </p>
            </div>

            {/* CTA button */}
            <a
              href="/Product"
              className="btn-keycap"
            >
              <span className="text">Explore LumetraX</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
