import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  Globe,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/lumetra/Navbar";
import { Footer } from "@/components/lumetra/Footer";
import { CookiesBanner } from "@/components/lumetra/CookiesBanner";

const highlights = [
  {
    title: "Real-time visibility",
    description:
      "Monitor operations as they happen with instant alerts, live dashboards, and traceable video evidence.",
    icon: Gauge,
  },
  {
    title: "Adaptive intelligence",
    description:
      "Train models around the details that matter most to your environment, people, and workflow.",
    icon: Sparkles,
  },
  {
    title: "Enterprise-ready security",
    description:
      "Protect sensitive footage and support structured deployment across teams, sites, and cloud regions.",
    icon: ShieldCheck,
  },
];

const featureSections = [
  {
    title: "Operational oversight",
    text: "See every critical moment without losing context, from shift changes to exception handling and incident review.",
  },
  {
    title: "Consistent quality control",
    text: "Detect anomalies earlier, standardise inspection criteria, and reduce avoidable downtime across locations.",
  },
  {
    title: "Connected workflows",
    text: "Move insights into action with automated routing, handoff alerts, and reporting built for business teams.",
  },
];

const platformPoints = [
  "Scalable video ingestion for high-volume camera networks",
  "Model adaptation for custom inspection and safety use cases",
  "Low-latency inference across edge and cloud environments",
  "Flexible APIs for integration with operations and analytics stacks",
];

export const Route = createFileRoute("/Product")({
  head: () => ({
    meta: [
      { title: "LumetraX — Product Overview" },
      {
        name: "description",
        content:
          "Discover how LumetraX brings real-time vision intelligence to operations, safety, and quality workflows.",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <div id="top" className="fixed inset-0 bg-background p-2 sm:p-4 lg:p-6 transition-all duration-300">
      <div
        id="scroll-container"
        className="bg-surface text-foreground h-full w-full mx-auto rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-y-auto overflow-x-hidden relative shadow-[0_8px_40px_rgb(0_0_0/0.3)] scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <Navbar />
        <main>
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,221,11,0.14),transparent_22%),linear-gradient(180deg,#0b0b0b,rgba(10,10,10,0.96))]" />
            <div className="absolute inset-0 bg-[url('/Hero.png')] bg-cover bg-center opacity-15" />
            <div className="relative container-page py-20 sm:py-24 lg:py-32">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl"
                >
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-primary">
                    LumetraX
                  </span>
                  <h1 className="mt-5 font-heading text-5xl leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Vision intelligence for <span className="text-primary">safer, smarter operations</span>
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                    LumetraX helps teams understand what is happening in real time, surface issues early, and turn live video into clear operational action.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://app.lumetra.one"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-keycap"
                    >
                      <span className="text">Launch LumetraX</span>
                    </a>
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                    >
                      Book a demo
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-5 shadow-2xl backdrop-blur"
                >
                  <div className="rounded-[1.25rem] border border-white/8 bg-black/40 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/45">Live platform</p>
                        <p className="mt-2 text-3xl font-heading text-white">24/7 visibility</p>
                      </div>
                      <div className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">Active</div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <div>
                        <p className="text-3xl font-semibold text-white">98.6%</p>
                        <p className="mt-1 text-sm text-white/50">Detection accuracy</p>
                      </div>
                      <div>
                        <p className="text-3xl font-semibold text-white">&lt;1s</p>
                        <p className="mt-1 text-sm text-white/50">Average response</p>
                      </div>
                      <div>
                        <p className="text-3xl font-semibold text-white">100+</p>
                        <p className="mt-1 text-sm text-white/50">Camera streams</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="overview" className="py-16 sm:py-20">
            <div className="container-page">
              <div className="grid gap-4 md:grid-cols-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="capabilities" className="py-16 sm:py-20">
            <div className="container-page">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-sm uppercase tracking-[0.34em] text-primary">Why teams choose it</span>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-white sm:text-5xl">
                    Built to support <span className="text-primary">critical decisions</span>
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                    LumetraX is designed for environments where speed, accuracy, and consistency matter — from warehouses and facilities to transportation and public safety.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {featureSections.map((section) => (
                    <div key={section.title} className="rounded-[1.4rem] border border-white/10 bg-black/30 p-5">
                      <Workflow className="h-5 w-5 text-primary" />
                      <h3 className="mt-4 font-heading text-xl text-white">{section.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{section.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="platform" className="py-16 sm:py-20">
            <div className="container-page">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                  <div>
                    <span className="text-sm uppercase tracking-[0.34em] text-primary">Platform architecture</span>
                    <h2 className="mt-3 font-heading text-4xl text-white sm:text-5xl">
                      Performance that stays <span className="text-primary">ready for scale</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                      From video intake to model deployment, LumetraX combines fast processing, flexible adaptation, and reliable delivery across edge and cloud environments.
                    </p>
                    <div className="mt-6 space-y-3">
                      {platformPoints.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <p className="text-sm leading-6 text-white/75">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-black/35 p-5">
                      <Cpu className="h-5 w-5 text-primary" />
                      <h3 className="mt-4 font-heading text-xl text-white">High-throughput processing</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">Designed for thousands of camera feeds, continuous streams, and fast response cycles.</p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-black/35 p-5">
                      <Globe className="h-5 w-5 text-primary" />
                      <h3 className="mt-4 font-heading text-xl text-white">Flexible deployment</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">Run inference close to the edge or scale through cloud infrastructure as demand grows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="use-cases" className="py-16 sm:py-20">
            <div className="container-page">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-sm uppercase tracking-[0.34em] text-primary">Use cases</span>
                  <h2 className="mt-3 font-heading text-4xl text-white sm:text-5xl">Where LumetraX delivers value</h2>
                </div>
                <a href="/#contact" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    title: "Safety monitoring",
                    text: "Spot hazards, track compliance, and respond faster to workplace risks.",
                  },
                  {
                    title: "Quality inspection",
                    text: "Identify defects, verify standards, and improve consistency across production lines.",
                  },
                  {
                    title: "Operations analytics",
                    text: "Understand traffic, movement, and behaviour patterns in real time.",
                  },
                  {
                    title: "Incident review",
                    text: "Capture context-rich evidence and support faster investigations with searchable footage.",
                  },
                ].map((useCase) => (
                  <div key={useCase.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-6">
                    <h3 className="font-heading text-2xl text-white">{useCase.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{useCase.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="cta" className="py-16 sm:py-20">
            <div className="container-page">
              <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-r from-primary/8 to-white/[0.03] p-8 text-center sm:p-10">
                <h2 className="font-heading text-4xl text-white sm:text-5xl">Ready to see LumetraX in motion?</h2>
                <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/65">
                  Explore the platform, review live insights, and see how vision intelligence can support your next operational milestone.
                </p>
                <div className="mt-6 flex justify-center">
                  <a
                    href="https://app.lumetra.one"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-keycap"
                  >
                    <span className="text">Open the product</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <CookiesBanner />
    </div>
  );
}
