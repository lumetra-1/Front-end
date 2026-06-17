import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Lumetra?",
    a: "Lumetra is an intelligent computer vision platform that turns images, video, and camera feeds into real-time, actionable insights for your business.",
  },
  {
    q: "How does it work?",
    a: "Our platform connects to your existing camera infrastructure and uses advanced vision models to analyse video streams, detect events, and deliver insights in real time.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We use enterprise-grade encryption, strict access controls, and comply with industry security standards to protect your data at every stage.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time with no hidden fees or lock-in contracts.",
  },
  {
    q: "Which camera systems are supported?",
    a: "Lumetra integrates with most IP cameras, NVR and VMS systems, and standard streaming protocols including RTSP, ONVIF, and HLS.",
  },
  {
    q: "Is cloud deployment supported?",
    a: "Lumetra supports cloud, on-premise, and hybrid deployments to meet enterprise compliance and latency requirements.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 lg:py-16">
      <div className="container-page">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 xl:gap-12 items-start">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 lg:sticky lg:top-32"
          >
            {/* Main heading card */}
            <div className="rounded-2xl bg-black border border-white/8 p-7 xl:p-8">
              <span className="block text-sm uppercase tracking-widest text-primary font-medium font-heading">
                FAQ
              </span>
              <h2 className="mt-3 font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm font-light text-white/55 leading-relaxed">
               Lumetra is a cloud-based intelligent vision platform that helps you identify, track, and act on real-world events across your camera infrastructure, built to make your daily work faster, simpler, and smarter.
              </p>
            </div>

            {/* Still Have Questions card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 xl:p-7">
              <h3 className="font-heading font-light text-xl text-white leading-snug mb-2">
                Still Have <span className="text-primary">Questions?</span>
              </h3>
              <p className="text-sm font-light text-white/55 leading-relaxed mb-5">
                Our team is here to help. Reach out and we will walk you through everything you need to know about our platform. 
              </p>
              <a
                href="#contact"
                className="btn-keycap"
              >
                <span className="text">Book a Demo</span>
              </a>
            </div>
          </motion.div>

          {/* ── Right column: accordion ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div 
                  key={f.q} 
                  className="border-b border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 sm:py-8 text-left group"
                  >
                    <span className={`font-heading font-light text-xl sm:text-2xl xl:text-3xl transition-colors duration-300 ${isOpen ? "text-primary" : "text-white/70 group-hover:text-white"}`}>
                      {f.q}
                    </span>
                    <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-primary" : "text-white/30 group-hover:text-white"}`}>
                      <Plus className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <p className="pb-8 text-base sm:text-lg font-light text-white/50 leading-relaxed pr-12 lg:pr-24">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
