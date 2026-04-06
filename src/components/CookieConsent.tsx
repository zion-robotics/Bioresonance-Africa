import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  const decline = () => {
    Cookies.set("cookie_consent", "declined", { expires: 365 });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-card border border-border rounded-2xl p-6 shadow-2xl"
        >
          <p className="text-sm font-body text-foreground mb-1 font-semibold">🍪 Cookie Notice</p>
          <p className="text-xs text-muted-foreground font-body mb-4 leading-relaxed">
            We use cookies to enhance your experience and deliver promotional content. By accepting, you consent to our use of cookies.
          </p>
          <div className="flex gap-3">
            <button
              onClick={accept}
              className="flex-1 py-2.5 rounded-lg text-sm font-heading font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="flex-1 py-2.5 rounded-lg border border-border text-sm font-heading font-medium text-foreground hover:bg-muted transition-all duration-300"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
