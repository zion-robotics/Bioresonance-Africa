import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { conditions } from "@/data/conditions";
import helpImg from "@/assets/help.jpeg";

const noUseList = [
  "No surgery", "No amputation", "No dialysis", "No biopsy",
  "No chemotherapy", "No laparoscopy", "No radiotherapy", "No transplantation",
  "No invasive treatment", "No chemical", "No preservatives", "No other people's medicines",
];

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
              <div className="rounded-2xl overflow-hidden">
                <img src={helpImg} alt="Bioresonance healing" className="w-full h-80 object-cover" />
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
              <h2 className="heading-display text-3xl text-foreground mb-4">144+ Conditions We Address</h2>
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
            {filtered.map((c, i) => (
              <ScrollReveal key={c.name} delay={Math.min(i * 0.02, 0.5)}>
                <div className="bg-light-blue rounded-xl p-4 card-hover border border-border">
                  <h3 className="font-heading font-semibold text-sm text-foreground">{c.name}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-1">{c.desc}</p>
                </div>
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
