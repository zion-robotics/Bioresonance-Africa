import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import walkingImg from "@/assets/testimony_walking.jpeg";
import goitreImg from "@/assets/testimony_goitre.png";
import doctorImg from "@/assets/testimony_doctor.jpeg";
import restored1 from "@/assets/testimony_restored1.jpeg";
import restored2 from "@/assets/testimony_restored2.png";
import joyImg from "@/assets/testimony_joy1.png";
import joy2Img from "@/assets/testimony_joy2.png";

const testimonials = [
  {
    image: walkingImg,
    title: "Camptocormia & Balance Disorder",
    quote: "I was told I can't walk straight again until I found a solution. Correct the problem with walking straight or prevent it from age 45. Bioresonance, the Holy Grail of Healing©, got you covered in a few months.",
    cta: "Simply WhatsApp 08033030614 now.",
  },
  {
    image: goitreImg,
    title: "Goitre & Thyroidism",
    quote: "Hyperthyroidism or Hypothyroidism? Bioresonance, the Holy Grail of Healing© got you covered. No surgery! Treatment, no cut — solved without a single incision.",
    cta: "Simply WhatsApp 08033030614 and solve the problem without a cut.",
  },
  {
    image: doctorImg,
    title: "A Doctor or a Bioresonanceist©?",
    quote: "I was dying, yet my doctor scheduled a three-month clinical appointment with a series of tests. A friend introduced me to Bionic©, Biopita©, and Bioresonance, the Holy Grail of Healing©, where I was restored before my hospital date arrived. The transformation was immediate, no delays, no postponements. That was when the distinction became clear: business versus true service to humanity.",
    cta: "Book a session via WhatsApp: 08033030614",
  },
  {
    image: restored1,
    title: "Prostate Recovery",
    quote: "My doctor recommended that I wait for my prostate to mature but I was restored through bioresonance before my prostate enlarged to maturity.",
    cta: null,
  },
  {
    image: restored2,
    title: "Freedom from Medication",
    quote: "I started with 2 tablets 5 years ago, I have 12 to consume every day with hidden fear until I switched to Bionic© and I experienced the difference within 9 months.",
    cta: null,
  },
];

export default function Testimonials() {
  return (
    <PageTransition>
      <SEOHead title="Testimonials" description="Real stories of lives transformed through bioresonance, the Holy Grail of Healing©. From patienthood to survivorhood." path="/testimonials" />

      {/* HERO */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Testimonials</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              From Patienthood to Survivorhood
            </h1>
            <p className="text-navy-foreground/60 font-body text-lg mt-4 max-w-2xl mx-auto">
              Real stories of lives transformed through bioresonance, the Holy Grail of Healing©
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-5xl mx-auto space-y-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-500 ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={`h-72 md:h-auto overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={`p-8 flex flex-col justify-center bg-navy ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="text-gold text-xs font-heading font-semibold uppercase tracking-widest mb-3">{t.title}</span>
                  <p className="text-primary-foreground/90 font-body text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  {t.cta && (
                    <a
                      href="https://wa.me/2348033030614"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold text-sm font-heading font-semibold hover:text-gold/80 transition-colors"
                    >
                      {t.cta} →
                    </a>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* JOY SECTION */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="heading-display text-3xl text-center text-foreground mb-10">Life After Bioresonance</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[joyImg, joy2Img].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={img} alt="Restored through bioresonance" className="w-full h-80 object-cover" loading="lazy" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-display text-2xl text-navy-foreground mb-4">Your Story Could Be Next</h2>
            <p className="text-navy-foreground/60 font-body text-sm mb-8">
              Take the first step towards root-cause healing.
            </p>
            <a
              href="https://wa.me/2348033030614?text=Hello%2C%20I%20want%20to%20book%20a%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent-brand inline-flex items-center gap-2 text-lg"
            >
              Book a Session via WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
