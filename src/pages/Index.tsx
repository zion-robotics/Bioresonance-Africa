import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useCounter } from "@/hooks/useCounter";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { Shield, Zap, Radio, Globe, Microscope, HeartPulse, ChevronRight } from "lucide-react";

import helpImg from "@/assets/help.jpeg";
import changeImg from "@/assets/change.jpeg";
import pareImg from "@/assets/pare.jpeg";
import energyTrapper from "@/assets/energy_trapper.jpeg";
import metaHunter from "@/assets/meta_hunter.jpeg";
import blackBox from "@/assets/black_box.jpeg";

const stats = [
  { value: 144, suffix: "+", label: "Conditions Treated" },
  { value: 500, suffix: "+", label: "Lives Transformed" },
  { value: 100, suffix: "%", label: "Non-Invasive" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2500);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-gold">
        {count}{suffix}
      </div>
      <div className="text-sm text-navy-foreground/60 font-body mt-2 uppercase tracking-widest">{label}</div>
    </div>
  );
}

const capabilities = [
  { icon: Microscope, text: "Detects root causes, not symptoms for many diseases" },
  { icon: Zap, text: "Operates at the energy and frequency level" },
  { icon: Shield, text: "Non-invasive, no drugs, no surgery, no chemicals, no unpleasant intake" },
  { icon: Globe, text: "Enables remote and cross-border treatment" },
  { icon: Radio, text: "Targets microbes, toxins, and internal imbalances with precision" },
  { icon: HeartPulse, text: "Supports healing with complementary physical therapies" },
];

const products = [
  {
    name: "Original NLS Meta Hunter 4025",
    price: "₦1,800,000",
    image: metaHunter,
    desc: "The premium standalone NLS diagnostic device.",
  },
  {
    name: "Meta Hunter + Remote Black Box Bundle",
    price: "₦800,000",
    image: blackBox,
    desc: "Complete diagnostic set including the Meta Hunter device.",
  },
  {
    name: "Energy Trapper",
    price: "₦25,000",
    image: energyTrapper,
    desc: "A frequency concentration product. Exclusive to the 1st Bioresonanceist of Africa©.",
  },
];

export default function Index() {
  const { displayText, isComplete } = useTypewriter(
    "Beyond Drugs. Beyond Surgery. Welcome to Bioresonance, the Holy Grail of Healing©.",
    35,
    800
  );

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(218_72%_30%/0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(40_90%_55%/0.08),transparent_70%)]" />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-96 h-96 rounded-full bg-deep-blue/10 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-body font-medium">The Future of Medicine is Here</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground leading-[1.1] mb-6 min-h-[3.5em] sm:min-h-[2.5em]">
              {displayText}
              {!isComplete && <span className="typewriter-cursor" />}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.6 }}
              className="text-xl md:text-2xl font-display italic text-gold mb-4"
            >
              The Future of Medicine is Frequency, Not Chemicals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.3, duration: 0.6 }}
              className="text-lg font-heading font-semibold text-navy-foreground/90 mb-6"
            >
              Decode Disease. Restore Life.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.6, duration: 0.6 }}
              className="text-base md:text-lg text-navy-foreground/60 font-body leading-relaxed max-w-3xl mb-10"
            >
              Bioresonance, the Holy Grail of Healing© is a revolutionary digital, electronic and electromagnetic medicine system that identifies and neutralises root causes using energy, frequency, and intelligent resonance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to="/book-appointment" className="btn-accent-brand text-center text-lg">
                Book Appointment
              </Link>
              <Link to="/services" className="btn-primary-brand text-center text-lg">
                Get Started Today
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.4, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              {["Safe", "Precise", "Root-cause driven"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm text-navy-foreground/50 font-body">
                  <Shield size={14} className="text-gold" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-deep-blue py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium text-deep-blue uppercase tracking-widest">Discover</span>
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
                What is Bioresonance, the Holy Grail of Healing©?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-foreground/70 font-body leading-relaxed">
                <p>
                  Bioresonance, the Holy Grail of Healing©, is a digital, frequency-based medical system that reads, interprets, and corrects the body's energetic signals with precision for all forms of diseases of natural origin.
                </p>
                <p>
                  Every disease begins as a distortion in frequency before it manifests physically. This system identifies that distortion and reverses it at its true deep point of origin.
                </p>
                <p>
                  The Holy Grail of Healing© represents what physicians have sought for centuries that we found in frequency. It defines the authoritative pathway through which bioresonance is expressed, uniquely handed over to the First Bioresonanceist of Africa©.
                </p>
                <p>
                  This distinction sets it apart completely from conventional and global methodologies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-5 card-hover border border-border"
                  >
                    <cap.icon size={24} className="text-deep-blue mb-3" />
                    <p className="text-sm font-body text-foreground/70">{cap.text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 p-6 rounded-xl bg-card border border-border">
              <p className="font-body text-foreground/70 text-sm italic">
                "Pioneered in Africa by Oludele SKO, advancing a decisive shift in digital curative medicine. Not a destroyer of systems, but a disciplined reformer of healthcare."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="heading-display text-3xl md:text-4xl text-center text-foreground mb-12">
              From Patienthood to Survivorhood
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden card-hover">
                <img src={changeImg} alt="Transformation through bioresonance" className="w-full h-80 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden card-hover">
                <img src={pareImg} alt="From Patienthood to Survivorhood" className="w-full h-80 object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-deep-blue uppercase tracking-widest">Our Services</span>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
              Introducing the Pathway to Integrative Paradigm Cure Methodology
            </h2>
            <p className="text-foreground/60 font-body max-w-2xl mx-auto mb-12">
              Bioresonance will restore your dignity without putting a hole in your heart, body and account.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-8">
              <img src={helpImg} alt="Hospital failed me - Bioresonance please help" className="w-full h-72 object-cover" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link to="/services" className="btn-primary-brand inline-flex items-center gap-2">
              View All 144+ Conditions <ChevronRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Products</span>
              <h2 className="heading-display text-3xl md:text-4xl text-navy-foreground mt-3">
                Professional-Grade Equipment
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.15}>
                <Link
                  to="/products"
                  className="group block bg-navy-foreground/5 rounded-2xl border border-navy-foreground/10 overflow-hidden card-hover"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-navy-foreground text-lg mb-2">{p.name}</h3>
                    <p className="text-sm text-navy-foreground/50 font-body mb-3">{p.desc}</p>
                    <span className="text-gold font-heading font-bold text-xl">{p.price}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(218_72%_30%/0.2),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy-foreground mb-6">
              Stop Managing Symptoms. Start Eliminating Causes with customised precision.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-gold font-display italic mb-8">
              Others are not trained to explain our modality.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ul className="space-y-3 text-navy-foreground/70 font-body text-left max-w-xl mx-auto mb-10">
              {[
                "Book Your Full Body/Comprehensive Frequency Scan",
                "Join the Bioresonance Experience",
                "Access the New Era of Healing",
                "Every delay allows internal distortion to deepen. Act now.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/book-appointment" className="btn-accent-brand text-center text-lg">
                Book Appointment
              </Link>
              <Link to="/services" className="btn-primary-brand text-center text-lg border border-navy-foreground/20">
                Get Started Today
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6">
              {["Safe", "Precise", "Root-cause driven"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm text-navy-foreground/40 font-body">
                  <Shield size={14} className="text-gold" />
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
