import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    iconImg: "/Precision Visual Detection.svg",
    title: "Precision Visual Detection",
    desc: "Our models deliver industry-leading accuracy across diverse visual environments and conditions.",
  },
  {
    iconImg: "/Real-Time Processing.svg",
    title: "Real-Time Processing",
    desc: "Sub-second inference pipelines built to handle high-throughput video streams at scale.",
  },
];

export function About() {
  return (
    <section id="about" className="py-12 lg:py-16">
      <div className="container-page">
        <div className="grid lg:grid-cols-[2fr_2fr_1.4fr] gap-6 items-stretch min-h-[420px]">

          {/* ── Left col: heading + desc + features ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <div>
              <h2 className="font-heading font-light text-3xl sm:text-4xl xl:text-[2.6rem] leading-[1.1] tracking-tight text-white">
                Transforming Vision Into{" "}
                <span className="text-primary">Intelligent Action</span>{" "}
                with Lumetra
              </h2>
              <p className="mt-4 text-sm xl:text-base font-light text-white/55 leading-relaxed">
                Lumetra is an enterprise-grade computer vision platform that converts raw image and video data into real-time, actionable intelligence. We help organizations automate visual inspection, enhance safety monitoring, and unlock operational insights, all driven by advanced vision models built for your infrastructure.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-black p-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <img src={f.iconImg} alt={f.title} className="w-12 h-12" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-base text-white leading-snug">
                      {f.title}
                    </p>
                    <p className="mt-1 text-sm font-light text-white/50">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Middle col: tall image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="/About 1.png"
              alt="About Lumetra"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* ── Right col: text card + small image ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Text card */}
            <div className="flex-1 rounded-2xl border border-white/8 bg-black p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-light text-2xl sm:text-3xl xl:text-4xl leading-snug tracking-tight text-white">
                  Built for{" "}
                  <span className="text-primary">Enterprise Scale</span>
                </h3>
                <p className="mt-3 text-sm font-light text-white/55 leading-relaxed">
                  From single-site deployments to thousands of camera feeds, Lumetra scales
                  seamlessly with your operations.
                </p>
              </div>
              <a
                href="#features"
                className="mt-5 btn-keycap w-fit"
              >
                <span className="text flex items-center gap-2">
                  <span>Discover Features</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Small image */}
            <div className="h-44 xl:h-52 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src="/About 2.png"
                alt="Lumetra Collaboration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
