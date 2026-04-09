import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ShieldCheck, ArrowRight, AlertCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import { client } from "@/lib/sanity";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const protects = ["Stroke", "Heart Failure", "Kidney Disease", "Liver Disease", "Amputation", "Surgical Interventions"];

const qualifies = [
  "You have zero or mild complaints",
  "You feel no serious pain",
  "You have no serious existing conditions",
  "You seek care purely for health maintenance and protection",
];

interface BioSEMCData {
  title: string;
  year: string;
  startDate: string;
  endDate: string;
  price: string;
  specialNotes: string;
  isOpen: boolean;
}

export default function BioSEMC() {
  const [data, setData] = useState<BioSEMCData | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "biosemic"] | order(_createdAt desc)[0]`)
      .then((result) => setData(result))
      .catch(() => {});
  }, []);

  const startDate = data?.startDate ? new Date(data.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "1 January 2026";
  const endDate = data?.endDate ? new Date(data.endDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "30 April 2026";
  const price = data?.price || "₦100,000 or $100 per month";
  const isOpen = data?.isOpen !== undefined ? data.isOpen : true;
  const specialNotes = data?.specialNotes || "As this is the introductory year, the programme starts later than usual. The extended window provides an opportunity for wider participation. Please inform your loved ones and use this opportunity for your children and household members.";

  return (
    <PageTransition>
      <SEOHead
        title="BioSEMC — Bioresonance Season of Experimental Medical Charity"
        description="BioSEMC is a CSR initiative offering preventive bioresonance care. Protect your health before illness strikes."
        path="/biosemc"
      />

      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-deep-blue blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-gold/20 blur-[120px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-heading font-semibold tracking-widest uppercase mb-6">
              Yearly CSR Initiative: 1st of January to 30th of April
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy-foreground mb-6">
              BioSEMC
            </h1>
            <p className="text-lg md:text-xl text-gold font-heading font-medium mb-4">
              Bioresonance Season of Experimental Medical Charity
            </p>
            <p className="text-base md:text-lg text-navy-foreground/70 font-body max-w-2xl mx-auto mb-6">
              Here comes the cheap opportunity to evangelise your loved ones before they dig a hole in your bank account through conventional health management schemes.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-10">
              <Calendar size={15} className="text-gold" />
              <span className="text-gold text-sm font-heading font-semibold">
                {startDate} – {endDate} · Introductory Year
              </span>
            </div>
            {!isOpen && (
              <p className="text-gold/70 font-body text-sm mb-4">Registration for this cycle is currently closed.</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isOpen && (
                <a href="#enrol" className="btn-accent-brand !py-3.5 !px-10 text-base inline-flex items-center gap-2">
                  Enrol Now <ArrowRight size={18} />
                </a>
              )}
              <a href="#qualifies" className="btn-primary-brand !py-3.5 !px-10 text-base inline-flex items-center gap-2">
                Do I Qualify?
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT IS BIOSEMC */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">What is BioSEMC?</h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
              BioSEMC is a Corporate Social Responsibility (CSR) initiative designed to make preventive healthcare more accessible. Founded by Oludele SKO, the 1st Bioresonanceist of Africa©.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
              During this period, the cost of preventive care is separated from curative care. Preventive treatment is offered at a fixed rate of{" "}
              <span className="text-foreground font-semibold">{price}</span> — a reduction of over 100% compared to the standard structure.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              The aim is to encourage individuals to take early responsibility for their health, rather than waiting for serious illness to develop.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROGRAMME DETAILS */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-3">Programme Details</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Calendar size={28} className="text-gold" />, title: "Duration", body: `This programme runs annually from 1 January to 30 April. For ${data?.year || "2026"} (introductory year), it runs from ${startDate} to ${endDate}.` },
              { icon: <ShieldCheck size={28} className="text-gold" />, title: "Pricing", body: `Preventive treatment is offered at a fixed rate of ${price} — representing a major reduction compared to standard curative care pricing.` },
              { icon: <MapPin size={28} className="text-gold" />, title: "Location", body: "Available at our Bionic© Centre in Lagos, Nigeria. Remote and cross-border sessions are also available via our frequency device technology." },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">{item.icon}</div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO QUALIFIES */}
      <section id="qualifies" className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-3">Who Qualifies?</h2>
              <p className="text-muted-foreground font-body">This programme is strictly for proactive self-care, not for treating existing illnesses.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {qualifies.map((item, i) => (
              <motion.div key={item} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-4 rounded-xl border border-border bg-light-blue p-6">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck size={16} className="text-gold" />
                </div>
                <p className="text-sm text-foreground font-body leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-navy p-10 text-center">
              <h3 className="font-heading font-bold text-xl text-navy-foreground mb-2">What BioSEMC Helps Protect Against</h3>
              <p className="text-navy-foreground/60 font-body text-sm mb-8">Preventive treatment aims to reduce the risk of future serious conditions including:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {protects.map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-heading font-medium">{item}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REAL STORY */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-3">Why Preventive Care Matters</h2>
              <p className="text-muted-foreground font-body">A real case from our Bionic© Centre</p>
            </div>
          </ScrollReveal>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="rounded-2xl border border-border bg-card p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle size={20} className="text-gold" />
              </div>
              <p className="text-muted-foreground font-body text-base leading-relaxed">
                This initiative is based on observed real-life patterns. Caregivers — such as husbands or wives looking after sick partners — often neglect their own health. Over time, this neglect can lead to serious conditions including stroke, tremor, or heart failure.
              </p>
            </div>
            <div className="border-l-4 border-gold pl-6 py-2 mb-6">
              <p className="text-foreground font-body text-base leading-relaxed italic">
                A woman brought her husband for treatment at our Bionic© Centre from outside Lagos in 2023. In 2024, she enrolled herself for two months of preventive bioresonance treatment. In 2025, she suffered a stroke. Due to family hesitation towards non-conventional care, immediate intervention was delayed. However — the stroke did not result in permanent damage. She later made a full recovery following bioresonance intervention. The prior preventive sessions were considered a key protective factor.
              </p>
            </div>
            <p className="text-sm text-muted-foreground font-body">— Documented case, Bionic© Centre, Lagos</p>
          </motion.div>
        </div>
      </section>

      {/* SPECIAL NOTE */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-heading font-semibold tracking-widest uppercase mb-5">
                Special Note for {data?.year || "2026"}
              </span>
              <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-4">Introductory Year — Extended Window</h2>
              <p className="text-muted-foreground font-body text-base leading-relaxed">{specialNotes}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ENROL CTA */}
      {isOpen && (
        <section id="enrol" className="relative bg-navy py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-gold/30 blur-[100px]" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="heading-display text-3xl md:text-4xl text-navy-foreground mb-4">Enrol for BioSEMC {data?.year || "2026"}</h2>
              <p className="text-lg text-navy-foreground/70 font-body mb-3">{price} · {startDate} – {endDate}</p>
              <p className="text-base text-navy-foreground/50 font-body mb-10">Protect yourself and your loved ones before illness strikes. Contact us on WhatsApp to begin.</p>
              <a href="https://wa.me/2348033030614?text=I%20want%20to%20enrol%20for%20BioSEMC%202026" target="_blank" rel="noopener noreferrer" className="btn-accent-brand !py-3.5 !px-10 text-base inline-flex items-center gap-2">
                Enrol on WhatsApp <ArrowRight size={18} />
              </a>
            </ScrollReveal>
          </div>
        </section>
      )}
    </PageTransition>
  );
}