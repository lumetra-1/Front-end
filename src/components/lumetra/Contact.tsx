import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

/* ─── Info cards data ─────────────────────────────────────────────────── */
const infoCards = [
  {
    icon: Mail,
    title: "Email address",
    value: "contact@lumetra.one",
    href: "mailto:contact@lumetra.one",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+1 (213) 555-0133",
    href: "tel:+12135550133",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "700 Wilshire Blvd, Suite 520, Los Angeles, CA 90017, USA",
    href: "#",
  },
];

/* ─── Fade-up animation variant ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [toastProgress, setToastProgress] = useState(100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [snapping, setSnapping] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isVerified = sliderValue === 100;

  // Compute the handle's left offset in px to avoid invalid CSS calc()
  const handleWidth = 48;
  const containerWidth = sliderContainerRef.current?.clientWidth ?? 360;
  const handleLeft = Math.round((sliderValue / 100) * (containerWidth - handleWidth));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isVerified) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xwvjzdga", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setSliderValue(0);
      } else {
        const data = await response.json();
        if (data && data.errors && data.errors.length > 0) {
          setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setError("Something went wrong. Please check your inputs and try again.");
        }
      }
    } catch (err) {
      setError("Failed to send message. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (!submitted) return;
    setToastProgress(100);
    const interval = setInterval(() => {
      setToastProgress((p) => {
        if (p <= 2) {
          clearInterval(interval);
          setSubmitted(false);
          return 0;
        }
        return p - 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [submitted]);

  const handleFieldChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setter(e.target.value);
    if (error) setError(null);
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-surface">
      <div className="container-page">

        {/* ── Section header ─────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium font-heading">
            Contact
          </span>
          <h2 className="mt-3 font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/55 leading-relaxed font-sans max-w-xl mx-auto">
            Have a project in mind? Reach out and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* ── Map + Form row ─────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
        >
          {/* Left — Map */}
          <motion.div
            variants={fadeUp}
            className="relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Yellow glow accent on corner */}
            <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none z-10" />

            <iframe
              title="Lumetra Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.81378720166!2d-118.26007242428358!3d34.04864747315821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b40e604355%3A0x58bc3ffc0a7f3ce5!2s700%20Wilshire%20Blvd%20%23520%2C%20Los%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2slk!4v1781666748350!5m2!1sen!2slk"
              className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-full border-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-white text-xs font-sans font-medium">Lumetra HQ · Los Angeles, CA</span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-black rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-sans font-semibold text-white/70 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleFieldChange(setName)}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-background border border-white/10 px-4 py-3 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-sans font-semibold text-white/70 uppercase tracking-wider">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleFieldChange(setEmail)}
                  required
                  placeholder="Your email address"
                  className="w-full rounded-xl bg-background border border-white/10 px-4 py-3 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-sans font-semibold text-white/70 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={handleFieldChange(setMessage)}
                required
                rows={6}
                placeholder="Write something..."
                className="w-full flex-1 rounded-xl bg-background border border-white/10 px-4 py-3 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            {/* Slide to Verify */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-sans font-semibold text-white/70 uppercase tracking-wider">
                Security Verification
              </label>
              <div
                ref={sliderContainerRef}
                className="relative bg-background border border-white/10 rounded-xl h-12 flex items-center justify-center overflow-hidden select-none"
              >
                {/* Progress fill */}
                <div
                  className={`absolute left-0 top-0 bottom-0 bg-primary/15 ${snapping ? "transition-all duration-300" : "transition-none"}`}
                  style={{ width: `${sliderValue}%` }}
                />

                {/* Center label */}
                <span
                  className={`relative z-10 text-xs font-heading font-medium pointer-events-none select-none transition-colors duration-200 ${
                    isVerified ? "text-primary" : "text-white/40"
                  }`}
                >
                  {isVerified ? "✓ Verification Successful" : "← Slide to Verify →"}
                </span>

                {/* Invisible range input — sits on top */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  disabled={isVerified || loading}
                  onChange={(e) => {
                    setSnapping(false);
                    const val = parseInt(e.target.value);
                    if (val >= 90) {
                      setSliderValue(100);
                      if (submitted) setSubmitted(false);
                    } else {
                      setSliderValue(val);
                    }
                  }}
                  onMouseUp={() => {
                    if (sliderValue < 90) {
                      setSnapping(true);
                      setSliderValue(0);
                    }
                  }}
                  onTouchEnd={() => {
                    if (sliderValue < 90) {
                      setSnapping(true);
                      setSliderValue(0);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing disabled:cursor-default"
                />

                {/* Yellow drag handle */}
                {!isVerified && (
                  <div
                    className={`absolute top-1 bottom-1 w-10 rounded-lg bg-primary flex items-center justify-center text-black shadow-lg pointer-events-none z-20 ${
                      snapping ? "transition-all duration-300" : "transition-none"
                    }`}
                    style={{ left: `${handleLeft + 4}px` }}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>



            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-sans rounded-xl p-3">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isVerified || loading}
              className="w-full btn-keycap mt-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span className="text">
                {!isVerified 
                  ? "Verify to Send" 
                  : loading 
                    ? "Sending..." 
                    : "Send Message"
                }
              </span>
            </button>
          </motion.form>
        </motion.div>

        {/* ── Info cards row ─────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {infoCards.map((card) => (
            <motion.a
              key={card.title}
              href={card.href}
              variants={fadeUp}
              className="group flex items-center gap-4 bg-black border border-white/10 rounded-2xl px-5 py-4 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(249,221,11,0.12)] transition-all duration-300"
            >
              {/* Icon bubble */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <card.icon className="w-5 h-5" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-xs text-white/50 font-sans uppercase tracking-wider mb-0.5">
                  {card.title}
                </p>
                <p className="text-sm font-sans font-semibold text-white truncate group-hover:text-primary transition-colors duration-300">
                  {card.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>

      {/* ── Toast Notification ────────────────────────────────────────── */}
      <div aria-live="polite" className="fixed bottom-8 right-8 z-[9999] pointer-events-none">
        {submitted && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="pointer-events-auto w-72 bg-black/85 backdrop-blur-xl border border-primary/20 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Progress bar — drains left to right */}
            <div className="h-[2px] bg-white/5 w-full">
              <div
                className="h-full bg-primary transition-none"
                style={{ width: `${toastProgress}%` }}
              />
            </div>

            <div className="px-3.5 py-3 flex items-center gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-heading font-semibold text-white leading-tight">
                  Message Sent!
                </p>
                <p className="text-[11px] text-white/50 font-sans font-light leading-tight mt-0.5">
                  We'll reach out within 24 hours.
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setSubmitted(false)}
                className="flex-shrink-0 cursor-pointer text-white/25 hover:text-white/70 transition-colors"
                aria-label="Dismiss notification"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
