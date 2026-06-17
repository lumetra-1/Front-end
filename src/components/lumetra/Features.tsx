import { motion } from "framer-motion";

const features = [
  {
    title: "Intelligent Vision Detection",
    desc: "Advanced detection models that identify objects, people, and vehicles across live and recorded video streams with precision.",
    wide: true,
    accent: true,
    img: "/Intelligent Vision Detection.png",
  },
  {
    title: "Visual Stream Analytics",
    desc: "Extracts behavioural patterns and trends from live camera feeds, delivering structured insights from continuous visual data.",
    wide: true,
    accent: false,
    img: "/Visual Stream Analytics.png",
  },
  {
    title: "Back-End Infrastructure",
    desc: "Scalable, secure processing architecture that handles high-throughput video streams with reliability and performance.",
    wide: false,
    accent: false,
    img: "/Back-End Infrastructure.png",
  },
  {
    title: "Mobile Vision Intelligence",
    desc: "Native and cross-platform vision processing that enables real-time detection and monitoring from mobile and field devices.",
    wide: false,
    accent: true,
    img: "/Mobile Vision Intelligence.png",
  },
  {
    title: "Edge Processing",
    desc: "On-device inference pipelines that process visual data at the source, reducing latency and enabling real-time response in the field.",
    wide: false,
    accent: false,
    img: "/Edge Processing.png",
  },
];

const topFeatures = features.filter((f) => f.wide);
const bottomFeatures = features.filter((f) => !f.wide);

function Card({ f, tall, className = "" }: { f: typeof features[0]; tall?: boolean; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`group rounded-[1.25rem] flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
        f.accent
          ? "bg-gradient-to-b from-[#141414] to-black border-primary/20 hover:border-primary/40 shadow-xl"
          : "bg-gradient-to-b from-[#111111] to-black border-white/10 hover:border-white/20 shadow-lg"
      } ${className}`}
    >
      {/* Image with inner border radius */}
      <div className="p-2.5 sm:p-3 flex-shrink-0">
        <div className={`w-full overflow-hidden rounded-xl border border-white/5 bg-black/50 relative ${tall ? "h-56 sm:h-64" : "h-44 sm:h-52"}`}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src={f.img}
            alt={f.title}
            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-3 flex flex-col flex-1">
        <h3 className={`font-heading font-medium text-[19px] sm:text-[21px] leading-snug tracking-wide mb-2.5 ${
          f.accent ? "text-primary" : "text-white"
        }`}>
          {f.title}
        </h3>
        <p className="text-[14px] font-light text-white/50 leading-[1.65]">
          {f.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-12 lg:py-16">
      <div className="container-page">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span className="text-sm uppercase tracking-widest text-primary font-medium font-heading">
              Capabilities
            </span>
            <h2 className="mt-3 font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
              Powerful <span className="text-primary">Vision</span> Capabilities
            </h2>
          </div>
          <p className="text-sm xl:text-base font-light text-white/55 leading-relaxed max-w-sm lg:text-right">
            From real-time detection to edge processing — our platform delivers
            end-to-end computer vision intelligence built for enterprise scale.
          </p>
        </motion.div>

        {/* Top row — 2 wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {topFeatures.map((f) => (
            <Card key={f.title} f={f} tall />
          ))}
        </div>

        {/* Bottom row — 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bottomFeatures.map((f, i) => (
            <Card key={f.title} f={f} className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""} />
          ))}
        </div>

      </div>
    </section>
  );
}
