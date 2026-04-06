import { useState, useMemo } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { conditions } from "@/data/conditions";
import helpImg from "@/assets/help.jpeg";
import roadImg from "@/assets/road.jpeg";

const noUseList = [
  "No surgery", "No amputation", "No dialysis", "No biopsy",
  "No chemotherapy", "No laparoscopy", "No radiotherapy", "No transplantation",
  "No invasive treatment", "No chemical", "No preservatives", "No other people's medicines",
];

function ConditionCard({ condition }: { condition: { name: string; desc: string; details?: string } }) {
  const [expanded, setExpanded] = useState(false);

  const details = condition.details || `Bioresonance addresses ${condition.name} by identifying the root-cause frequency distortions associated with this condition. Using the NLS Meta Hunter 4025, we perform a comprehensive scan to detect the energetic origin of the disorder. Corrective frequencies are then applied to restore balance — without drugs, surgery, or chemicals. Treatment is non-invasive, precise, and tailored to your unique energetic signature. Remote treatment via the Black Box is also available for this condition.`;

  return (
    <motion.div
      layout
      className="bg-light-blue rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 text-left flex items-start justify-between gap-2"
      >
        <div>
          <h3 className="font-heading font-semibold text-sm text-foreground">{condition.name}</h3>
          <p className="text-xs text-muted-foreground font-body mt-1">{condition.desc}</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown size={16} className="text-deep-blue" />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 border-t border-border/50 pt-3">
              <p className="text-xs text-foreground/60 font-body leading-relaxed">{details}</p>
              <a
                href="/book-appointment"
                className="inline-block mt-3 text-xs font-heading font-semibold text-deep-blue hover:text-gold transition-colors"
              >
                Book Treatment →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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

      {/* Split path image */}
      <section className="relative">
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img src={roadImg} alt="From management to curative healthcare" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,100%,98%)] to-transparent" />
        </div>
      </section>

      {/* What we don't use */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-6">What we do NOT use:</h2>
                <div className="grid grid-cols-2 gap-3">
                  {noUseList.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-body text-foreground/70">
                      <X size={14} className="text-destructive flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-8 font-display italic text-deep-blue text-lg">
                  "Bioresonance will restore your dignity without putting a hole in your heart, body and account."
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={helpImg} alt="Bioresonance healing" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="heading-display text-3xl text-foreground mb-2">144+ Conditions We Address</h2>
              <p className="text-sm text-muted-foreground font-body mb-6">Click any condition to learn more about how bioresonance treats it</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((c, i) => (
              <ScrollReveal key={c.name} delay={Math.min(i * 0.02, 0.5)}>
                <ConditionCard condition={c} />
              </ScrollReveal>
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
