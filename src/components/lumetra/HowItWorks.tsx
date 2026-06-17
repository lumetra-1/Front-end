import { motion } from "framer-motion";

const steps = [
  { n: "01", iconImg: "/Discovery & Pilot.svg",         title: "Discovery & Pilot",          desc: "Collaborative needs assessment to identify  high-impact areas and demonstrate tangible value." },
  { n: "02", iconImg: "/Design & Development.svg",      title: "Design & Development",        desc: "Detailed solution architecture, secure development and rigorous testing." },
  { n: "03", iconImg: "/Deployment & Enablement.svg",   title: "Deployment & Enablement",     desc: "Seamless rollout with comprehensive training and knowledge transfer." },
  { n: "04", iconImg: "/Optimization & Scalability.svg",title: "Optimization & Scalability",  desc: "Ongoing monitoring and strategic planning to expand intelligent solutions at scale." },
  { n: "05", iconImg: "/Enterprise Integration.svg",    title: "Enterprise Integration",      desc: "Full enterprise-grade API access, dashboards and continuous intelligence delivery." },
];

// Isometric cube geometry helper
// cx,cy = center of top face diamond
function isoCube(cx: number, cy: number, s: number) {
  // s = half-width of top face
  const h = s * 0.58; // height of cube side
  return {
    // top face (rhombus)
    top: [
      [cx, cy - s * 0.5],
      [cx + s, cy],
      [cx, cy + s * 0.5],
      [cx - s, cy],
    ],
    // left face
    left: [
      [cx - s, cy],
      [cx, cy + s * 0.5],
      [cx, cy + s * 0.5 + h],
      [cx - s, cy + h],
    ],
    // right face
    right: [
      [cx + s, cy],
      [cx, cy + s * 0.5],
      [cx, cy + s * 0.5 + h],
      [cx + s, cy + h],
    ],
  };
}

function pts(arr: number[][]) {
  return arr.map(p => p.join(",")).join(" ");
}

const P = "oklch(0.873 0.169 92.5)";

// Cube configs: position + colour
// Layout: 2 top (index 0,1), 3 bottom (index 2,3,4)
// viewBox 900x600
const cubeSize = 110;
const configs = [
  { cx: 270, cy: 168, topFill: "oklch(0.873 0.169 92.5)",  leftFill: "oklch(0.52 0.169 92.5)", rightFill: "oklch(0.68 0.169 92.5)", labelTop: true  },
  { cx: 540, cy: 168, topFill: "oklch(0.97 0.04 100)",     leftFill: "oklch(0.70 0.04 100)",  rightFill: "oklch(0.82 0.04 100)",  labelTop: true  },
  { cx: 155, cy: 342, topFill: "oklch(0.78 0.169 92.5)",   leftFill: "oklch(0.48 0.169 92.5)", rightFill: "oklch(0.62 0.169 92.5)", labelTop: false },
  { cx: 405, cy: 342, topFill: "oklch(0.873 0.169 92.5)",  leftFill: "oklch(0.55 0.169 92.5)", rightFill: "oklch(0.70 0.169 92.5)", labelTop: false },
  { cx: 655, cy: 342, topFill: "oklch(0.97 0.04 100)",     leftFill: "oklch(0.65 0.04 100)",  rightFill: "oklch(0.78 0.04 100)",  labelTop: false },
];

function IsoCubeGroup({ step, cfg, geo, iconCX, iconCY, labelX, labelY, delay }: {
  step: typeof steps[0];
  cfg: typeof configs[0];
  geo: ReturnType<typeof isoCube>;
  iconCX: number; iconCY: number;
  labelX: number; labelY: number;
  delay: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Cube — loop float only */}
      <motion.g
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 2.8 + delay * 0.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ cursor: "default" }}
      >
        {/* Cube faces */}
        <polygon points={pts(geo.left)}  fill={cfg.leftFill} />
        <polygon points={pts(geo.right)} fill={cfg.rightFill} />
        <polygon points={pts(geo.top)}   fill={cfg.topFill} />
        <polygon points={pts(geo.top)} fill="none"
          stroke="white" strokeWidth="0.8" strokeOpacity="0.25" />

        {/* Step number on right face — sleek outline style */}
        <text
          x={cfg.cx + cubeSize * 0.50}
          y={cfg.cy + cubeSize * 0.58 * 0.75 + 2}
          textAnchor="middle"
          fill="none"
          stroke="oklch(0 0 0 / 0.5)"
          strokeWidth="1.5"
          fontSize="46" fontWeight="800" fontFamily="Lexend,sans-serif"
          transform={`rotate(-28, ${cfg.cx + cubeSize * 0.50}, ${cfg.cy + cubeSize * 0.58 * 0.75})`}
        >
          {step.n}
        </text>

        {/* Icon — badge style centered on top face */}
        <foreignObject x={iconCX - 28} y={iconCY - 32} width={56} height={56}>
          <div className="w-full h-full flex items-center justify-center rounded-full bg-black/5 border border-black/10 backdrop-blur-sm">
              <img src={step.iconImg} alt={step.title} className="w-14 h-14" />
            </div>
        </foreignObject>
      </motion.g>

      {/* connector removed */}

      {/* Title & Description using elegant typography and separator */}
      <foreignObject 
        x={step.n === "01" ? 10 : step.n === "02" ? 560 : labelX - 120} 
        y={step.n === "01" || step.n === "02" ? 40 : labelY - 20} 
        width={240} 
        height={140}
      >
        <div className="flex flex-col items-center justify-start text-center w-full h-full pt-2">
          <h3 className="font-heading font-medium text-[16px] text-primary tracking-wide mb-2">
            {step.title}
          </h3>
          <p className="font-sans text-[11.5px] font-light text-white/50 leading-[1.6] max-w-[210px] mx-auto">
            {step.desc}
          </p>
        </div>
      </foreignObject>
    </motion.g>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="py-12 lg:py-16 overflow-hidden">
      <div className="container-page">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium font-heading">
            How It Works
          </span>
          <h2 className="mt-3 font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
            How <span className="text-primary">Lumetra</span> Works
          </h2>
          <p className="mt-4 text-sm xl:text-base font-light text-white/50 max-w-xl mx-auto leading-relaxed">
            Our platform connects every stage of your vision intelligence journey, from discovery to scaled deployment.
          </p>
        </motion.div>

        {/* ── DESKTOP: isometric cubes ── */}
        <div className="hidden lg:block w-full">
          <svg viewBox="0 0 810 580" className="w-full h-auto">

            {configs.map((cfg, i) => {
              const step = steps[i];
              const geo = isoCube(cfg.cx, cfg.cy, cubeSize);
              const iconCX = cfg.cx;
              const iconCY = cfg.cy;
              const labelX = cfg.cx;
              const labelY = cfg.labelTop
                ? cfg.cy - cubeSize * 0.5 - 68
                : cfg.cy + cubeSize * 0.5 + cubeSize * 0.58 + 28;

              return (
                <IsoCubeGroup
                  key={step.n}
                  step={step}
                  cfg={cfg}
                  geo={geo}
                  iconCX={iconCX}
                  iconCY={iconCY}
                  labelX={labelX}
                  labelY={labelY}
                  delay={i * 0.12}
                />
              );
            })}
          </svg>
        </div>

        {/* ── MOBILE / SM / MD ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-6 sm:p-8 flex flex-col items-start hover:border-primary/40 transition-all duration-300"
            >
              {/* Background watermark number */}
              <div className="absolute -right-4 -bottom-6 text-[120px] font-heading font-bold text-white/[0.03] pointer-events-none select-none group-hover:text-primary/[0.05] transition-colors duration-500 leading-none">
                {s.n}
              </div>

              {/* Top row: Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 mb-6 border border-black/10 shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
                style={{ background: configs[i].topFill }}>
                <img src={s.iconImg} alt={s.title} className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-heading font-medium text-[17px] sm:text-[19px] text-primary tracking-wide mb-2.5">
                  {s.title}
                </h3>
                <p className="font-sans text-[13.5px] sm:text-[14px] font-light text-white/55 leading-[1.7]">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
