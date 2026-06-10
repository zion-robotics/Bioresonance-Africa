import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import { Target, Eye, Building, Building2, Layers } from "lucide-react";
import frequencyHeart from "@/assets/frequency_heart.jpeg";
import clinicImg from "@/assets/clinic.jpeg";

export default function About() {
  return (
    <PageTransition>
      <SEOHead title="About" description="Learn about Bionic© and Biopita© ,Africa's first bioresonance medical brand founded by Oludele SKO, the 1st Bioresonanceist of Africa©." path="/about" image="https://www.1stbioresonanceistofafrica.com/og-about.jpg" />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Our Story</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy-foreground mt-4">
              About Bioresonance, the Holy Grail of Healing©, Africa
            </h1>
            <p className="text-navy-foreground/60 font-body text-lg mt-6 max-w-2xl mx-auto">
              Founded by Oludele Sunday Kolawole Olumide (aka Oludele SKO). Divinely inspired in 2004, Mandated in 2020. Spiritually trained in 2023.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Bionic Story */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building className="text-deep-blue" size={28} />
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground">The Bionic© Story</h2>
                </div>
                <div className="space-y-5 text-foreground/70 font-body leading-relaxed">
                  <p>Bionic©, a refined version of the bioresonance clinic, was established as a direct response to the limitations of symptom-driven medicine. The prevailing system manages conditions, sustains dependency, and rarely confronts the true origin of disease. Bionic© introduces a precise natural alternative.</p>
                  <p>Built on bioresonance, the Holy Grail of Healing©, it recognises disease as an energetic distortion before it manifests physically. This enables targeted identification and correction at the root level.</p>
                  <p>Founded and pioneered by Oludele Sunday Kolawole Olumide (aka Oludele SKO), Bionic© represents a structured shift from management to resolution, from chemical reliance to intelligent frequency intervention.</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={clinicImg} alt="From Clinic to Bionic - the new era of healthcare" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works - Frequency Diagram */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="heading-display text-3xl text-foreground mb-4">How Bioresonance, the Holy Grail of Healing© Works</h2>
              <p className="text-foreground/60 font-body">Understanding frequency distortion and restoration</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <img src={frequencyHeart} alt="Healthy vs Distorted vs Restored Frequency" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <p className="text-sm text-muted-foreground font-body text-center mt-4 italic">
              Every disease begins as a distortion in frequency. Bioresonance identifies and restores the body's natural frequency balance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 h-full border border-border shadow-sm">
              <Target className="text-deep-blue mb-4" size={32} />
              <h3 className="heading-display text-2xl text-foreground mb-4">Mission</h3>
              <p className="text-foreground/70 font-body leading-relaxed">
                To restore health by identifying and eliminating root causes through bioresonance, the Holy Grail of Healing©, delivering precise, non-invasive, natural and borderless healing.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-navy rounded-2xl p-8 h-full">
              <Eye className="text-gold mb-4" size={32} />
              <h3 className="heading-display text-2xl text-navy-foreground mb-4">Vision</h3>
              <p className="text-navy-foreground/60 font-body leading-relaxed">
                To establish frequency-based medicine as the global standard for curative healthcare, replacing dependency-driven systems with precise, root-cause resolution that restores the body's natural balance and vitality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bionic Further Explained */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <Building className="text-deep-blue" size={28} />
              <h2 className="heading-display text-3xl text-foreground">Bionic© Further Explained</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-foreground/70 font-body leading-relaxed">
              <p>Bionic© is a specialised version of the bioresonance clinic, engineered for precision intervention. At Bionic©:</p>
              <ul className="space-y-3 ml-4">
                {[
                  "The body's energetic signals are scanned and interpreted in a clear and common language.",
                  "Hidden distortions are identified before physical manifestation.",
                  "Corrective frequencies are deployed to restore balance at the source.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-deep-blue mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>It is not positioned as wellness. It is a focused, high-precision environment for root-cause correction using digital frequency medicine.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Biopita Explained */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-deep-blue" size={28} />
              <h2 className="heading-display text-3xl text-foreground">Biopita© Explained</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-foreground/70 font-body leading-relaxed">
              <p>Biopita© is a structured version of a bioresonance hospital, designed for scale, coordination, and advanced care delivery. At Biopita©:</p>
              <ul className="space-y-3 ml-4">
                {[
                  "Multiple Bionic© units operate within an integrated system.",
                  "Complex and advanced conditions are addressed comprehensively and intensively.",
                  "Continuous monitoring and structured healing pathways are implemented.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-deep-blue mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Biopita© represents the institutional expansion of bioresonance, the Holy Grail of Healing©, delivering organised, high-capacity, frequency-based healthcare.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Layers className="text-gold mx-auto mb-6" size={40} />
            <h2 className="heading-display text-3xl md:text-4xl text-navy-foreground mb-6">Strategic Positioning</h2>
            <p className="text-navy-foreground/60 font-body text-lg leading-relaxed">
              Bionic© and Biopita© form a unified ecosystem, one delivering precision at the individual level, the other providing structured capacity at scale — both committed to eliminating root causes and redefining the future of medicine.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
