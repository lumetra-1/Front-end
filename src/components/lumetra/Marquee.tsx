const items = [
  "Real-Time Object Detection",
  "Behavioural Analytics",
  "Multi-Camera Intelligence",
  "Edge AI Deployment",
  "Anomaly Detection",
  "Automated Visual Inspection",
  "Crowd & Flow Analysis",
  "License Plate Recognition",
  "Facial Recognition",
  "Enterprise-Grade Security",
];

// Separator: bold slash in semi-transparent dark
function Sep() {
  return (
    <span
      aria-hidden
      className="inline-block font-heading font-bold text-black/30 text-lg select-none flex-shrink-0"
    >
      /
    </span>
  );
}

export function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-primary py-3">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-primary to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-primary to-transparent" />

      <div className="marquee-track flex gap-8 items-center w-max">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-heading font-semibold text-sm sm:text-base tracking-widest uppercase text-black/80 whitespace-nowrap">
              {item}
            </span>
            <Sep />
          </span>
        ))}
      </div>
    </div>
  );
}
