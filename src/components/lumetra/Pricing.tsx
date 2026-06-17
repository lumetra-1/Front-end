import { motion, animate } from "framer-motion";
import { Check, Zap, Rocket, Building2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const plans = [
  {
    name: "Basic plan",
    monthlyPrice: 19,
    yearlyPrice: 182,
    monthlyLink: "https://buy.stripe.com/test_bJeeV6b3ca7Ng24454fUQ00",
    yearlyLink: "https://buy.stripe.com/test_eVqcMY8V46VBdTW6dcfUQ03",
    tagline: "Perfect for small teams getting started with visual monitoring and object detection.",
    cta: "Buy now",
    features: [
      "Up to 5 camera connections",
      "Core detection and analytics dashboard",
      "Standard video stream processing",
    ],
    featured: false,
    badge: null,
    icon: Zap,
  },
  {
    name: "Pro plan",
    monthlyPrice: 39,
    yearlyPrice: 374,
    monthlyLink: "https://buy.stripe.com/test_fZudR23AK0xdaHKeJIfUQ01",
    yearlyLink: "https://buy.stripe.com/test_5kQ9AM5ISbbRaHK8lkfUQ04",
    tagline: "Built for operations teams that require advanced visual analytics across multiple camera feeds.",
    cta: "Buy now",
    features: [
      "Everything in Basic",
      "Up to 25 camera connections",
      "Advanced visual analytics and reporting",
      "Real-time monitoring and alerting",
    ],
    featured: true,
    badge: "Recommended",
    icon: Rocket,
  },
  {
    name: "Enterprise plan",
    monthlyPrice: 69,
    yearlyPrice: 662,
    monthlyLink: "https://buy.stripe.com/test_5kQ3coefo5Rx17afNMfUQ02",
    yearlyLink: "https://buy.stripe.com/test_aFabIU7R0cfV17a6dcfUQ05",
    tagline: "Built for enterprise environments managing large-scale camera networks and vision deployments.",
    cta: "Buy now",
    features: [
      "Everything in Pro",
      "Custom camera and vision API integrations",
      "Enterprise-grade security",
      "Dedicated support",
    ],
    featured: false,
    badge: null,
    icon: Building2,
  },
];

function CountUp({ target, featured }: { target: number; featured: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prevTarget = useRef(target);

  useEffect(() => {
    const from = prevTarget.current;
    prevTarget.current = target;
    const controls = animate(from, target, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `$${Math.round(v)}`;
      },
    });
    return () => controls.stop();
  }, [target]);

  return (
    <span
      ref={ref}
      className={`font-heading font-semibold text-6xl xl:text-7xl leading-none ${
        featured ? "text-primary-foreground" : "text-white"
      }`}
    >
      ${target}
    </span>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-12 lg:py-16">
      <div className="container-page">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium font-heading">
            Pricing
          </span>
          <h2 className="mt-3 font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
            Flexible Plans
          </h2>
          <p className="mt-4 text-white/55 font-light text-base sm:text-lg max-w-xl mx-auto">
            Choose the plan that fits your scale. All plans include core vision capabilities.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-heading text-sm font-light ${!yearly ? "text-white" : "text-white/40"}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly((v) => !v)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              yearly ? "bg-primary" : "bg-white/15"
            }`}
          >
            <span
              className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                yearly ? "left-7" : "left-1"
              }`}
            />
          </button>
          <span className={`font-heading text-sm font-light flex items-center gap-2 ${yearly ? "text-white" : "text-white/40"}`}>
            Yearly
            <span className="text-[11px] bg-primary text-primary-foreground font-medium px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((p, i) => {
            const price = yearly ? p.yearlyPrice : p.monthlyPrice;
            const period = yearly ? "/yr" : "/mo";
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Stack layer 2 — furthest back */}
                <div
                  className={`absolute inset-0 rounded-2xl translate-x-4 translate-y-4 ${
                    p.featured ? "bg-primary/30" : "bg-white/[0.04]"
                  } border ${
                    p.featured ? "border-primary/20" : "border-white/10"
                  }`}
                />
                {/* Stack layer 1 — middle */}
                <div
                  className={`absolute inset-0 rounded-2xl translate-x-2 translate-y-2 ${
                    p.featured ? "bg-primary/60" : "bg-white/[0.07]"
                  } border ${
                    p.featured ? "border-primary/40" : "border-white/10"
                  }`}
                />

                {/* Main card */}
                <div
                  className={`relative rounded-2xl p-7 xl:p-9 flex flex-col border ${
                    p.featured
                      ? "bg-primary border-primary"
                      : "bg-[oklch(0.10_0_0)] border-white/10"
                  }`}
                >
                  {/* Badge */}
                  {p.badge && (
                    <span className="absolute -top-3.5 right-5 bg-[oklch(0.10_0_0)] text-primary text-xs font-heading font-medium px-4 py-1.5 rounded-full border border-primary/40 shadow-lg">
                      {p.badge}
                    </span>
                  )}

                  {/* Plan name + icon */}
                  <div className="flex items-center justify-between">
                    <p className={`font-heading font-light text-base tracking-wide ${
                      p.featured ? "text-primary-foreground/60" : "text-white/50"
                    }`}>
                      {p.name}
                    </p>
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      p.featured
                        ? "bg-[oklch(0.07_0_0)] border border-black/30"
                        : "bg-white/8 border border-white/10"
                    }`}>
                      <p.icon className="w-8 h-8 text-primary" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-2 flex items-end gap-1.5">
                    <CountUp target={price} featured={p.featured} />
                    <span className={`mb-2.5 text-base font-light ${
                      p.featured ? "text-primary-foreground/50" : "text-white/40"
                    }`}>
                      {period}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className={`mt-3 text-sm xl:text-base font-light leading-relaxed ${
                    p.featured ? "text-primary-foreground/70" : "text-white/55"
                  }`}>
                    {p.tagline}
                  </p>

                  {/* Features container */}
                  <div className={`rounded-xl p-4 mt-6 mb-6 ${
                    p.featured ? "bg-[oklch(0.07_0_0)] border border-black" : "bg-white/5 border border-white/8"
                  }`}>
                    <ul className="space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <Check
                            className="w-4 h-4 flex-shrink-0 text-primary"
                            strokeWidth={2.5}
                          />
                          <span className={`text-sm xl:text-base font-light ${
                            p.featured ? "text-white/80" : "text-white/70"
                          }`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={yearly ? p.yearlyLink : p.monthlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-keycap"
                  >
                    <span className="text">{p.cta}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
