import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  Users,
  Heart,
  Phone,
  MessageCircle,
  Shield,
  Zap,
  Award,
} from "lucide-react";

const recoveryStats = [
  { value: "80–95%", label: "Recovery rate if treated early at Bionic©" },
  { value: "Hours", label: "Critical remission window after stroke begins" },
  { value: "100%", label: "Non-invasive. No drips. No injections." },
];

const strokeFacts = [
  { icon: Shield, text: "Stroke can be prevented." },
  { icon: Zap, text: "Stroke can be avoided." },
  { icon: Heart, text: "Stroke can be cured." },
];

const trainingBenefits = [
  "Join us to sweep stroke accidents out of our society",
  "Build your capacity as a frequency-based rehabilitator",
  "Protect people's well-being with precision care",
  "Hands-on practical training with real cases",
  "Train-to-establish model — start your own practice",
  "Certified by the 1st Bioresonanceist of Africa©",
];

export default function StrokeRehabilitation() {
  return (
    <PageTransition>
      <SEOHead title="Stroke Rehabilitation" description="Emergency stroke care and rehabilitation training at Bionic©. 80-95% recovery rate if treated early. Learn how frequency medicine can prevent and cure stroke." path="/stroke-rehabilitation" />
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500/30 bg-red-500/10 mb-8"
            >
              <AlertTriangle size={16} className="text-red-400" />
              <span className="text-red-400 text-sm font-body font-medium tracking-wide">
                Emergency Alert — Read This First
              </span>
            </motion.div>
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy-foreground mt-4 leading-tight">
              STOP.{" "}
              <span className="text-gold">DON'T HOSPITALISE</span> A STROKE
              VICTIM.
              <br />
              COME TO{" "}
              <span className="text-gold">BIONIC©</span> FIRST.
            </h1>
            <p className="text-navy-foreground/60 font-body text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              The remission window is narrow. Every minute matters. Bionic©
              delivers direct and complete care before conventional treatments
              reduce recovery chances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book-appointment" className="btn-accent-brand block text-center text-lg">
                  Book Emergency Appointment
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://wa.me/2348033030614?text=STROKE%20EMERGENCY%20-%20I%20need%20immediate%20help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-all duration-300"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  <MessageCircle size={20} />
                  WhatsApp Now
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RECOVERY STATS */}
      <section className="bg-deep-blue py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {recoveryStats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-foreground/60 font-body uppercase tracking-widest leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* STROKE FACTS */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium text-deep-blue uppercase tracking-widest">
                The Truth About Stroke
              </span>
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3">
                What Bionic© Can Do For Stroke
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {strokeFacts.map((fact, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-deep-blue/10 flex items-center justify-center mx-auto mb-6">
                    <fact.icon size={32} className="text-deep-blue" />
                  </div>
                  <p className="font-heading font-bold text-xl text-foreground">
                    {fact.text}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Remission window explanation */}
          <ScrollReveal delay={0.2}>
            <div className="bg-navy rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                    <Clock size={16} className="text-gold" />
                    <span className="text-gold text-sm font-body font-medium">
                      The Critical Remission Window
                    </span>
                  </div>
                  <h3 className="heading-display text-2xl md:text-3xl text-navy-foreground mb-6 leading-tight">
                    Early Treatment Means{" "}
                    <span className="text-gold">80 to 95% Recovery</span>
                  </h3>
                  <p className="text-navy-foreground/60 font-body leading-relaxed mb-4">
                    Stroke survivors can recover up to 80 to 95% within weeks or
                    months if they are brought early to our Bionic© after the
                    stroke starts.
                  </p>
                  <p className="text-navy-foreground/60 font-body leading-relaxed mb-4">
                    The remission or recovery window is the early period — from
                    a few hours to a few days after the stroke begins. If the
                    person comes during this time, before going through hospital
                    drips, injections, or aggressive treatments, they can
                    receive direct and complete care at our Bionic©.
                  </p>
                  <p className="text-navy-foreground/60 font-body leading-relaxed">
                    At this early stage, recovery outcomes are between 80 and
                    95%, showing a strong chance of fast and major improvement.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Stroke begins",
                      desc: "Remission window opens immediately",
                      color: "text-gold",
                    },
                    {
                      step: "02",
                      title: "Come to Bionic© first",
                      desc: "Before hospital drips or injections",
                      color: "text-gold",
                    },
                    {
                      step: "03",
                      title: "Direct frequency care",
                      desc: "Non-invasive root-cause treatment begins",
                      color: "text-gold",
                    },
                    {
                      step: "04",
                      title: "80–95% recovery",
                      desc: "Within weeks or months",
                      color: "text-gold",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <span className={`font-heading font-bold text-2xl ${item.color} min-w-[2rem]`}>
                        {item.step}
                      </span>
                      <div>
                        <p className="font-heading font-semibold text-navy-foreground text-sm">
                          {item.title}
                        </p>
                        <p className="text-navy-foreground/50 text-xs font-body mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FOR PATIENTS */}
      <section className="section-padding bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-display text-3xl text-foreground mb-4">
              Act Now. Every Hour Counts.
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              If you or someone you know has just had a stroke — contact us
              immediately before going to any hospital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book-appointment" className="btn-accent-brand block text-center">
                  Book Appointment
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="tel:+2348033030614"
                  className="btn-primary-brand inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-deep-blue" />

      {/* TRAINING SECTION */}
      <section className="bg-navy section-padding relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">
                Training Program
              </span>
              <h2 className="heading-display text-3xl md:text-4xl text-navy-foreground mt-3">
                Become a Stroke Rehabilitator
                <br />
                <span className="text-gold">With a Difference</span>
              </h2>
              <p className="text-navy-foreground/60 font-body text-lg mt-4 max-w-2xl mx-auto">
                Raising Rehabilitators. Promoting Rehabilitation.
              </p>
              <p className="text-navy-foreground/50 font-body mt-2">
                This is a train-to-establish model. Application is ongoing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-navy-foreground mb-6">
                  What You Will Gain
                </h3>
                {trainingBenefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                    <p className="text-navy-foreground/70 font-body text-sm leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Training details card */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
              >
                <div className="bg-deep-blue p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-primary-foreground">
                    Stroke Rehabilitation Training
                  </h3>
                  <p className="text-primary-foreground/70 font-body text-sm mt-1">
                    May Edition
                  </p>
                </div>
                <div className="p-8 space-y-5">
                  {[
                    { icon: Clock, label: "Date", value: "May 7 & 8, 2026" },
                    { icon: DollarSign, label: "Price", value: "₦150,000" },
                    { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
                    { icon: Award, label: "Format", value: "Hands-on physical training" },
                    {
                      icon: Users,
                      label: "Who should apply",
                      value: "Every curative-minded practitioner",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-deep-blue/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-deep-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="font-body text-foreground text-sm mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-border space-y-3">
                    <motion.a
                      href="https://wa.me/2348033030614?text=I%20want%20to%20enroll%20in%20the%20Stroke%20Rehabilitation%20Training"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: "#25D366", color: "#fff" }}
                    >
                      <MessageCircle size={20} />
                      Enrol via WhatsApp Only
                    </motion.a>
                    <p className="text-center text-xs text-muted-foreground font-body">
                      Powered by DiviniTherapy — The bionic of creative innovations
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-light-blue text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="heading-display text-3xl text-foreground mb-4">
              Stroke Does Not Have to Be a Death Sentence
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Whether you are a patient seeking recovery or a practitioner
              seeking to make a difference — Bionic© is your answer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book-appointment" className="btn-accent-brand block text-center">
                  Book Appointment
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://wa.me/2348033030614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-brand inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
