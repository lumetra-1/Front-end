import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Lumetra gave our operations team a single view across 200+ cameras. Incident response time dropped by 60% in the first quarter.",
    name: "Sara Mendel",
    handle: "saramendel",
    role: "Operations Manager",
    image: "/Sara Mendel.png",
  },
  {
    quote: "We use Lumetra to monitor production lines in real time. The detection accuracy and API depth are genuinely enterprise-grade.",
    name: "Daniel Okafor",
    handle: "dan_okafor",
    role: "Manufacturing Director",
    image: "/Daniel Okafor.png",
  },
  {
    quote: "From perimeter monitoring to behavioral alerts, Lumetra has become a foundational layer of our security stack.",
    name: "Priya Raman",
    handle: "priyasec",
    role: "Security Lead",
    image: "/Priya Raman.png",
  },
  {
    quote: "Deploying Lumetra across our retail stores provided insights into customer flow we never thought possible. A game-changer for layout optimization.",
    name: "Michael Chang",
    handle: "mike_chang",
    role: "Retail Operations",
    image: "/Michael Chang.png",
  },
  {
    quote: "The real-time vehicle classification is incredibly robust. It handles low-light and adverse weather conditions better than any other system we've tried.",
    name: "Elena Rostova",
    handle: "erostova",
    role: "Traffic Engineer",
    image: "/Elena Rostova.png",
  },
  {
    quote: "Automating our visual inspections with Lumetra drastically reduced our error rates. Integration with our existing pipeline took only days.",
    name: "James Miller",
    handle: "jmiller_tech",
    role: "Quality Assurance",
    image: "/James Miller.png",
  },
];

const QuoteMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 lg:py-16 bg-surface overflow-hidden">
      <div className="container-page">
        <div className="mb-16 flex flex-col items-center text-center">
          {/* Badge */}
          <span className="text-sm uppercase tracking-widest text-primary font-medium font-heading">
            Testimonials
          </span>

          {/* Title */}
          <h2 className="mt-3 font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white max-w-3xl">
            Trusted by Vision-Driven Organizations
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base text-white/55 leading-relaxed font-sans max-w-xl">
            Hear directly from the teams and companies that rely on Lumetra every day to power smarter, faster, and safer operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-12 pt-12 pb-16 px-4 sm:px-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative w-full max-w-sm mx-auto mt-4 mb-8 font-sans"
            >
              {/* Background Shadow Bubble */}
              <div className="absolute inset-0 bg-primary rounded-3xl translate-y-4 translate-x-3 rotate-3 z-0">
                <svg className="absolute bottom-0 left-10 w-8 h-8 text-primary translate-y-[98%]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0 L24 0 L0 24 Z" />
                </svg>
              </div>

              {/* Front Bubble */}
              <div className="relative w-full h-full rounded-3xl bg-black p-6 sm:p-8 shadow-2xl -rotate-1 z-10 border border-white/10 flex flex-col justify-between">
                
                {/* Front Tail */}
                <svg className="absolute bottom-0 left-8 w-10 h-10 text-black translate-y-[98%] drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0 L24 0 L0 24 Z" />
                </svg>

                {/* Top Left Quote */}
                <QuoteMark className="absolute -top-6 -left-4 w-12 h-12 text-primary rotate-180 drop-shadow-md z-20" />

                {/* Profile Image */}
                <div className="absolute -top-10 -right-4 w-20 h-20 rounded-full border-4 border-primary overflow-hidden bg-background shadow-xl z-20">
                   <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="pr-14">
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide">{t.name}</h3>
                    <p className="text-primary text-sm font-medium mt-0.5 font-sans">@{t.handle}</p>
                  </div>

                  <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed italic font-sans">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-1 relative z-10">
                  {[...Array(5)].map((_, idx) => (
                     <Star key={idx} className="w-5 h-5 text-primary fill-primary drop-shadow-sm" />
                  ))}
                </div>

                {/* Bottom Right Quote */}
                <QuoteMark className="absolute -bottom-6 -right-4 w-12 h-12 text-white drop-shadow-md z-20" />
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
