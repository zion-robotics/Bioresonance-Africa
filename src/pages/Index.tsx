import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useCounter } from "@/hooks/useCounter";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import DNAHelix from "@/components/DNAHelix";
import { Shield, Zap, Radio, Globe, Microscope, HeartPulse, ChevronRight, ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero_medical.jpg";
import frequencyHeart from "@/assets/frequency_heart.jpeg";
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
    id: "meta-hunter-4025",
    name: "Original NLS Meta Hunter 4025",
    price: "₦1,800,000",
    image: metaHunter,
    desc: "The premium standalone NLS diagnostic device.",
  },
  {
    id: "meta-hunter-bundle",
    name: "Meta Hunter + Remote Black Box Bundle",
    price: "₦800,000",
    image: blackBox,
    desc: "Complete diagnostic set including the Meta Hunter device.",
  },
  {
    id: "energy-trapper",
    name: "Energy Trapper",
    price: "₦25,000",
    image: energyTrapper,
    desc: "A frequency concentration product. Exclusive to the 1st Bioresonanceist of Africa©.",
  },
];

// Animated floating particles for hero
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Index() {
  const { displayText, isComplete } = useTypewriter(
    "Beyond Drugs. Beyond Surgery. Welcome to Bioresonance, the Holy Grail of Healing©.",
    35,
    800
  );

  return (
    <PageTransition>
      <SEOHead
        title="Bioresonance Nigeria — The Holy Grail of Healing© | Bionic© & Biopita©"
        description="Beyond Drugs. Beyond Surgery. Africa's first bioresonance medical brand. 144+ conditions treated with digital frequency medicine by Oludele SKO."
        path="/"
      />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Bioresonance frequency medicine"
            className="w-full h-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(228,80%,6%)] via-[hsl(228,80%,6%/0.85)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(228,80%,6%)] via-transparent to-[hsl(228,80%,6%/0.3)]" />
        </div>

        <FloatingParticles />

        {/* Animated glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-deep-blue/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-sm font-body font-medium tracking-wide">The Future of Medicine is Here</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-navy-foreground leading-[1.1] mb-6 min-h-[3.5em] sm:min-h-[2.5em]">
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
                className="text-base md:text-lg text-navy-foreground/60 font-body leading-relaxed max-w-2xl mb-10"
              >
                Bioresonance, the Holy Grail of Healing© is a revolutionary digital, electronic and electromagnetic medicine system that identifies and neutralises root causes using energy, frequency, and intelligent resonance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link to="/book-appointment" className="btn-accent-brand text-center text-lg group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Appointment
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[hsl(45,100%,60%)]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <Link to="/services" className="btn-primary-brand text-center text-lg group relative overflow-hidden border border-navy-foreground/20">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Today
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.4, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6"
              >
                {["Safe", "Precise", "Root-cause driven"].map((t) => (
                  <span key={t} className="flex items-center gap-2 text-sm text-navy-foreground/50 font-body">
                    <Shield size={14} className="text-gold" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero image side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-deep-blue/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={heroImg}
                  alt="Bioresonance frequency healing technology"
                  className="relative rounded-2xl w-full object-cover shadow-2xl shadow-deep-blue/30"
                  width={1920}
                  height={1080}
                />
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <HeartPulse className="text-gold" size={24} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">144+ Conditions</p>
                      <p className="text-xs text-muted-foreground font-body">Successfully Addressed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-deep-blue py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(40_90%_55%/0.05),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8 relative z-10">
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
              {/* Frequency Heart Diagram */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border mb-8">
                <img
                  src={frequencyHeart}
                  alt="Healthy vs Distorted vs Restored Frequency - How bioresonance works"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="bg-card p-4 text-center">
                  <p className="text-sm font-heading font-semibold text-foreground">How Bioresonance Works</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">Identifying and correcting frequency distortions in the body</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Capabilities grid */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <cap.icon size={24} className="text-deep-blue mb-3" />
                  <p className="text-sm font-body text-foreground/70">{cap.text}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 p-8 rounded-2xl bg-navy text-center">
              <p className="font-display italic text-gold text-lg leading-relaxed">
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
                <img src={changeImg} alt="Transformation through bioresonance" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden card-hover">
                <img src={pareImg} alt="From Patienthood to Survivorhood" className="w-full h-80 object-cover" loading="lazy" />
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
              <img src={helpImg} alt="Hospital failed me - Bioresonance please help" className="w-full h-72 object-cover" loading="lazy" />
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
                  to={`/products/${p.id}`}
                  className="group block bg-navy-foreground/5 rounded-2xl border border-navy-foreground/10 overflow-hidden card-hover"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
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
        <FloatingParticles />
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
              <Link to="/book-appointment" className="btn-accent-brand text-center text-lg group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Appointment
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </span>
              </Link>
              <Link to="/services" className="btn-primary-brand text-center text-lg border border-navy-foreground/20 group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Today
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap">
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
