import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import survivorImg from "@/assets/survivor.jpeg";
import pareImg from "@/assets/pare.jpeg";
import changeImg from "@/assets/change.jpeg";

const testimonials = [
  {
    image: pareImg,
    quote: "From Patienthood to Survivorhood — I found healing where hospitals couldn't help.",
    name: "Patient Testimony",
  },
  {
    image: survivorImg,
    quote: "Bioresonance changed everything. No drugs, no surgery — just frequencies restoring my body.",
    name: "Survivor Story",
  },
  {
    image: changeImg,
    quote: "Our family went from dependence on medications to vibrant health through bioresonance.",
    name: "Family Transformation",
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
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-card rounded-2xl overflow-hidden card-hover border border-border h-full">
                <img src={t.image} alt={t.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <p className="font-body text-foreground/70 italic mb-4">"{t.quote}"</p>
                  <p className="font-heading font-semibold text-sm text-deep-blue">{t.name}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
