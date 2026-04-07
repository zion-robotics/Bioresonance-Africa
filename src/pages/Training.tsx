import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { GraduationCap, Activity, Clock, DollarSign, Award, MapPin, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import genB from "@/assets/gen_b.jpeg";

const programs = [
  {
    id: "bioresonanceist",
    icon: GraduationCap,
    title: "How to Become a Certified Bioresonanceist©",
    description:
      "Learn the full methodology, tools and precision of bioresonance, the Holy Grail of Healing©. Master the art of identifying and eliminating root causes using energy, frequency and intelligent resonance. Directly trained and certified by Oludele SKO, the 1st Bioresonanceist of Africa©.",
    details: [
      { icon: Clock, label: "Duration", value: "Flexible — tailored to each individual's availability and learning pace" },
      { icon: DollarSign, label: "Price", value: "Flexible — discussed upon enrollment" },
      { icon: Award, label: "Certificate", value: "Yes — awarded after proof of stewardship" },
      { icon: MapPin, label: "Format", value: "Physical in Lagos. Online available in rare cases." },
    ],
  },
  {
    id: "stroke-rehab",
    icon: Activity,
    title: "Stroke Rehabilitation",
    description:
      "A specialised frequency-based stroke recovery program. Learn the non-invasive bioresonance approach to stroke rehabilitation. Root-cause treatment methodology for stroke recovery without drugs or surgery.",
    details: [
      { icon: Clock, label: "Duration", value: "Flexible — tailored to each individual's availability and learning pace" },
      { icon: DollarSign, label: "Price", value: "Flexible — discussed upon enrollment" },
      { icon: Award, label: "Certificate", value: "Yes — awarded after proof of stewardship" },
      { icon: MapPin, label: "Format", value: "Physical in Lagos. Online available in rare cases." },
    ],
  },
];

function ProgramCard({ prog, index }: { prog: typeof programs[0]; index: number }) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-2xl overflow-hidden h-full flex flex-col border border-border shadow-sm hover:shadow-xl transition-shadow duration-500"
        style={{ backgroundColor: "hsl(216, 63%, 30%)" }}
      >
        <div className="p-8 flex-1">
          <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-6">
            <prog.icon size={28} className="text-gold" />
          </div>
          <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">{prog.title}</h3>
          <p className="text-primary-foreground/70 font-body text-sm leading-relaxed mb-6">{prog.description}</p>

          <div className="space-y-4">
            {prog.details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <d.icon size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-heading font-semibold text-primary-foreground uppercase tracking-wider">{d.label}</span>
                  <p className="text-sm text-primary-foreground/60 font-body">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-8 pb-8">
          <a href="#enroll" className="btn-accent-brand w-full text-center block">
            Enroll Now
          </a>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function EnrollmentForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "", program: "", format: "", hearAbout: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enrollment submitted! We'll contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "", location: "", program: "", format: "", hearAbout: "", message: "" });
  };

  const handleChange = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border p-8 bg-light-blue"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {[
        { key: "name", label: "Full Name", type: "text", required: true },
        { key: "email", label: "Email Address", type: "email", required: true },
        { key: "phone", label: "Phone Number", type: "tel", required: true },
        { key: "location", label: "Location / Country", type: "text", required: true },
      ].map(({ key, label, type, required }) => (
        <div key={key}>
          <label className="block text-sm font-heading font-medium text-foreground mb-1.5">{label}</label>
          <input type={type} value={form[key as keyof typeof form]} onChange={(e) => handleChange(key, e.target.value)} required={required} className={inputClass} />
        </div>
      ))}

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Which program are you interested in?</label>
        <select value={form.program} onChange={(e) => handleChange("program", e.target.value)} required className={inputClass}>
          <option value="">Select a program</option>
          <option value="Certified Bioresonanceist© Training">Certified Bioresonanceist© Training</option>
          <option value="Stroke Rehabilitation">Stroke Rehabilitation</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Preferred Format</label>
        <select value={form.format} onChange={(e) => handleChange("format", e.target.value)} required className={inputClass}>
          <option value="">Select format</option>
          <option value="Physical in Lagos">Physical in Lagos</option>
          <option value="Online">Online</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">How did you hear about us?</label>
        <input type="text" value={form.hearAbout} onChange={(e) => handleChange("hearAbout", e.target.value)} className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Message or Questions</label>
        <textarea value={form.message} onChange={(e) => handleChange("message", e.target.value)} rows={4} className={`${inputClass} resize-none`} />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-accent-brand w-full text-center text-lg"
      >
        Begin My Journey
      </motion.button>
    </motion.form>
  );
}

export default function Training() {
  return (
    <PageTransition>
      <SEOHead title="Training Program — Become a Gen-B Healer" description="Training program for aspiring bioresonanceists. Learn the methodology of bioresonance, the Holy Grail of Healing©." path="/training" />

      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={genB} alt="Gen-B Healers" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-body font-medium text-gold uppercase tracking-widest"
            >
              Training Program
            </motion.span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy-foreground mt-4">
              Become a Gen-B Healer
            </h1>
            <p className="text-xl text-gold font-display italic mt-4">
              Trained by the 1st Bioresonanceist of Africa©
            </p>
            <p className="text-navy-foreground/60 font-body text-lg mt-6 max-w-2xl mx-auto">
              Our training is designed for practitioners and individuals who have an interest in digital and electronic medicine. Training is conducted physically in Lagos, Nigeria. Online participation is available in limited cases upon request.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium text-deep-blue uppercase tracking-widest">Programs</span>
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3">Choose Your Path</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <ProgramCard key={prog.id} prog={prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLMENT FORM */}
      <section id="enroll" className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="heading-display text-3xl text-foreground mb-2">Enrollment Form</h2>
              <p className="text-muted-foreground font-body text-sm">Fill in your details to begin your journey</p>
            </div>
          </ScrollReveal>

          <EnrollmentForm />

          <p className="text-center text-sm text-muted-foreground font-body mt-6 max-w-lg mx-auto">
            Upon submission you will receive a confirmation email and our team will contact you within 24 hours to discuss your training details and investment.
          </p>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-12 bg-light-blue">
        <div className="max-w-2xl mx-auto text-center px-4">
          <ScrollReveal>
            <motion.a
              href="https://wa.me/2348033030614?text=Hello%2C%20I%27m%20interested%20in%20the%20training%20program"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <MessageCircle size={22} />
              Chat With Us About Training
            </motion.a>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
