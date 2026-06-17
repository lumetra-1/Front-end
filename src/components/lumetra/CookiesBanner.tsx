import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lumetra-cookies-consent");
    if (!consent) {
      // Small delay to feel premium and allow the page layout to load first
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lumetra-cookies-consent", "accepted");
    setShowBanner(false);
  };

  const handleDeny = () => {
    localStorage.setItem("lumetra-cookies-consent", "denied");
    setShowBanner(false);
  };

  const handleClose = () => {
    localStorage.setItem("lumetra-cookies-consent", "dismissed");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          role="dialog"
          aria-labelledby="cookies-title"
          aria-describedby="cookies-description"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:bottom-8 sm:right-8 sm:left-auto z-[99] max-w-none sm:max-w-[380px] lg:bottom-10 lg:right-10 rounded-2xl border border-white/8 bg-black/90 backdrop-blur-xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
        >
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary cursor-pointer"
              >
                <Cookie className="h-5 w-5" />
              </motion.div>
              <h3 id="cookies-title" className="font-heading font-medium text-base text-white">
                Cookies Policy
              </h3>
            </div>
            
            <button
              onClick={handleClose}
              className="rounded-lg p-1 text-white/40 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close Cookies Banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Description */}
          <p id="cookies-description" className="mt-3 text-xs sm:text-sm font-sans font-light text-white/60 leading-relaxed">
            We use cookies to analyze performance, customize content, and enhance your browsing experience. By accepting, you consent to our use of cookies.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex items-center justify-end gap-2.5">
            <button
              onClick={handleDeny}
              className="rounded-xl px-4 py-2 text-xs font-heading font-medium border border-white/8 hover:border-white/20 hover:bg-white/5 text-white/85 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-xl bg-primary text-black px-4 py-2 text-xs font-heading font-semibold hover:bg-primary/90 transition-all duration-200 shadow-[0_2px_10px_rgba(249,221,11,0.15)] cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
