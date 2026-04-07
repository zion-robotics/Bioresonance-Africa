import { Link } from "react-router-dom";
import logo from "@/assets/bio_logo.jpeg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Training", path: "/training" },
  { name: "BioSEMC", path: "/biosemc" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
  { name: "Book Appointment", path: "/book-appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <span className="font-heading font-bold text-lg">Bioresonance</span>
                <span className="block text-xs tracking-widest uppercase text-navy-foreground/60">Africa</span>
              </div>
            </Link>
            <p className="text-sm text-navy-foreground/60 font-body leading-relaxed">
              The digital headquarters of the 1st Bioresonanceist of Africa©. Pioneering frequency-based curative medicine.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-navy-foreground/60 hover:text-gold transition-colors duration-300 font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/60 font-body">
              <li>Lagos, Nigeria</li>
              <li>
                <a href="tel:+2348033030614" className="hover:text-gold transition-colors">
                  +234 803 303 0614
                </a>
              </li>
              <li>
                <a href="mailto:1stbionic@gmail.com" className="hover:text-gold transition-colors">
                  1stbionic@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348033030614" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://m.facebook.com/groups/187395870824739/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Facebook Group
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-gold">Newsletter</h4>
            <p className="text-sm text-navy-foreground/60 font-body mb-4">
              Stay updated with the latest in frequency medicine.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg bg-navy-foreground/10 border border-navy-foreground/10 text-navy-foreground placeholder:text-navy-foreground/30 text-sm font-body focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-accent-brand !py-3 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-foreground/40 font-body text-center md:text-left">
            © {new Date().getFullYear()} Bioresonance Africa. Bionic© and Biopita© All rights reserved. Founded by Oludele SKO — 1st Bioresonanceist of Africa©
          </p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/2348033030614" target="_blank" rel="noopener noreferrer" className="text-navy-foreground/40 hover:text-gold transition-colors text-xs">
              WhatsApp
            </a>
            <a href="https://m.facebook.com/groups/187395870824739/" target="_blank" rel="noopener noreferrer" className="text-navy-foreground/40 hover:text-gold transition-colors text-xs">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
