import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import survivorImg from "@/assets/survivor.jpeg";
import pareImg from "@/assets/pare.jpeg";
import changeImg from "@/assets/change.jpeg";
import pathImg from "@/assets/path.jpeg";

const testimonials = [
  {
    image: pathImg,
    quote: "From Patienthood to Survivorhood — the journey from managing symptoms to true healing. Bioresonance showed us a different path.",
    name: "Community Testimonial",
    subtitle: "From Management to Curative",
  },
  {
    image: pareImg,
    quote: "From Patienthood to Survivorhood — I found healing where hospitals couldn't help.",
    name: "Patient Testimony",
    subtitle: "Restored through frequency",
  },
  {
    image: survivorImg,
    quote: "Bioresonance changed everything. No drugs, no surgery — just frequencies restoring my body.",
    name: "Survivor Story",
    subtitle: "Healed naturally",
  },
  {
    image: changeImg,
    quote: "Our family went from dependence on medications to vibrant health through bioresonance.",
    name: "Family Transformation",
    subtitle: "A new beginning",
  },
];

export default function Testimonials() {
  return (
    <PageTransition>
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

      {/* Featured testimonial */}
      <section className="relative">
        <div className="w-full h-72 md:h-[28rem] overflow-hidden">
          <img src={pathImg} alt="From Patienthood to Survivorhood" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,100%,98%)] via-transparent to-transparent" />
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl overflow-hidden border border-border h-full shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="font-body text-foreground/70 italic mb-4 leading-relaxed">"{t.quote}"</p>
                  <p className="font-heading font-semibold text-sm text-deep-blue">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{t.subtitle}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
