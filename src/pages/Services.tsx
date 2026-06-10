import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import { conditions } from "@/data/conditions";
import helpImg from "@/assets/help.jpeg";
import roadImg from "@/assets/road.jpeg";

const noUseList = [
  "No surgery", "No amputation", "No dialysis", "No biopsy",
  "No chemotherapy", "No laparoscopy", "No radiotherapy", "No transplantation",
  "No invasive treatment", "No chemical", "No preservatives", "No other people's medicines",
];

function ConditionCard({ condition }: { condition: { name: string; desc: string; details?: string } }) {
  const [flipped, setFlipped] = useState(false);

  const details = condition.details || `${condition.desc}. This condition is identified through bioresonance frequency scanning and addressed by targeting the root-cause distortions — restoring the body's natural balance without drugs or surgery.`;

  return (
    <div
      className="relative h-56 cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-border bg-light-blue p-5 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300 [backface-visibility:hidden]"
        >
          <div>
            <h3 className="font-heading font-semibold text-sm text-foreground mb-2">{condition.name}</h3>
            <p className="text-xs text-muted-foreground font-body line-clamp-3">{condition.desc}</p>
          </div>
          <span className="text-xs font-heading font-semibold text-deep-blue mt-2">Tap to learn more →</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-deep-blue/30 p-5 flex flex-col justify-between shadow-xl overflow-y-auto bg-navy [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div>
            <h3 className="font-heading font-semibold text-sm text-primary-foreground mb-2">{condition.name}</h3>
            <p className="text-xs text-primary-foreground/80 font-body leading-relaxed">{details}</p>
          </div>
          <a
            href="/book-appointment"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 mt-3 text-xs font-heading font-semibold text-gold hover:text-gold/80 transition-colors"
          >
            Book Treatment →
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => conditions.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  );

  return (
    <PageTransition>
      <SEOHead 
  title="Services" 
  description="100+ conditions treated with bioresonance frequency medicine. No surgery, no drugs, no chemicals. Non-invasive root-cause healing." 
  path="/services"
  image="https://www.1stbioresonanceistofafrica.com/og-services.jpg"
/>

      {/* HERO */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Our Services</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              Introducing the Pathway to Integrative Paradigm Cure Methodology
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ROAD IMAGE - no blend, clean */}
      <section className="relative">
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img src={roadImg} alt="From management to curative healthcare" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Bionic/Biopita Ecosystem */}
      <section className="py-12 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-display italic text-gold text-lg md:text-xl leading-relaxed mb-4">
              Bionic© and Biopita© together form a complete ecosystem, both driven by the same mandate: to eliminate root causes and redefine the future of medicine.
            </p>
            <p className="text-navy-foreground/70 font-body text-sm leading-relaxed">
              Bioresonance, the Holy Grail of Healing© is reshaping the future of medicine. From patient to Survivor©, Hospital to Biopita©, Clinic to Bionic© and analogue medicine to digital medicine. Physical clinical appointments to telemedicine/remote treatment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE DON'T USE */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-6">What we do NOT use:</h2>
                <div className="grid grid-cols-2 gap-3">
                  {noUseList.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="flex items-center gap-2 text-sm font-body text-foreground/70"
                    >
                      <X size={14} className="text-destructive flex-shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>
                <p className="mt-8 font-display italic text-deep-blue text-lg">
                  "Bioresonance will restore your dignity without putting a hole in your heart, body and account."
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={helpImg} alt="Bioresonance healing" className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 100+ CONDITIONS - 3D Flip Cards */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="heading-display text-3xl text-foreground mb-2">100+ Conditions We Address</h2>
              <p className="text-sm text-muted-foreground font-body mb-6">Tap any card to flip and learn how bioresonance treats it</p>
              <div className="max-w-md mx-auto relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search conditions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((c) => (
              <ConditionCard key={c.name} condition={c} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body mt-8">
              No conditions found matching "{search}"
            </p>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
