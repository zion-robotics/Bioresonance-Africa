import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/bio_logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Training", path: "/training" },
  { name: "BioSEMC", path: "/biosemc" },
  { name: "Blog", path: "/blog" },
  { name: "Stroke", path: "/stroke-rehabilitation" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src={logo}
                alt="Bioresonance Africa Logo"
                className="h-12 w-12 rounded-full object-cover transition-transform duration-500 group-hover:scale-110 flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className={`font-heading font-bold text-sm md:text-base leading-tight transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}>
                  Bioresonance
                </span>
                <span className={`font-body text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/60"
                }`}>
                  AFRICA
                </span>
                <span className="font-body italic text-[10px] md:text-xs leading-tight text-gold">
                  You are not a patient. You are a survivor.
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium font-body transition-all duration-300 ${
                    location.pathname === link.path
                      ? scrolled
                        ? "text-deep-blue bg-light-blue"
                        : "text-gold"
                      : scrolled
                      ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-appointment"
                className="ml-3 btn-accent-brand !py-2.5 !px-6 text-sm"
              >
                Book Now
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-card shadow-2xl flex flex-col">
              <div className="h-20 flex items-center justify-end px-4">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-foreground"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 pb-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 rounded-lg text-base font-medium font-body transition-all ${
                        location.pathname === link.path
                          ? "text-deep-blue bg-light-blue"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <Link
                    to="/book-appointment"
                    className="btn-accent-brand block text-center !py-3"
                  >
                    Book an Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}