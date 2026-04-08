import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { GraduationCap, Activity, Clock, DollarSign, Award, MapPin, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import genB from "@/assets/gen_b.jpeg";
import { client } from "@/lib/sanity";
import { sendAdminNotification, sendConfirmation } from "@/lib/emailjs";

interface TrainingProgram {
  _id: string;
  title: string;
  description: string;
  price: string;
  slots: number;
  isOpen: boolean;
  date: string;
}

function ProgramCard({ prog, index }: { prog: TrainingProgram; index: number }) {
  const details = [
    { icon: Clock, label: "Duration", value: "Flexible — tailored to each individual's availability and learning pace" },
    { icon: DollarSign, label: "Price", value: prog.price || "Flexible — discussed upon enrollment" },
    { icon: Award, label: "Certificate", value: "Yes — awarded after proof of stewardship" },
    { icon: MapPin, label: "Format", value: "Physical in Lagos. Online available in rare cases." },
  ];

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
            <GraduationCap size={28} className="text-gold" />
          </div>
          <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">{prog.title}</h3>
          <p className="text-primary-foreground/70 font-body text-sm leading-relaxed mb-6">{prog.description}</p>
          <div className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <d.icon size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-heading font-semibold text-primary-foreground uppercase tracking-wider">{d.label}</span>
                  <p className="text-sm text-primary-foreground/60 font-body">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
          {!prog.isOpen && (
            <p className="mt-4 text-xs text-gold font-body">Enrollment currently closed</p>
          )}
        </div>
        <div className="px-8 pb-8">
          {prog.isOpen && (
            <a href="#enroll" className="btn-accent-brand w-full text-center block">
              Enroll Now
            </a>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function EnrollmentForm({ programs }: { programs: TrainingProgram[] }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "", program: "", format: "", hearAbout: "", message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendAdminNotification({
        form_type: "Training Enrollment",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        location: form.location,
        message: `Program: ${form.program}\nFormat: ${form.format}\nHow they heard: ${form.hearAbout}\n\n${form.message}`,
        date: new Date().toLocaleDateString(),
      });
      await sendConfirmation({
        form_type: "training enrollment",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
      });
      toast.success("Enrollment submitted! We'll contact you within 24 hours.");
      setForm({ name: "", email: "", phone: "", location: "", program: "", format: "", hearAbout: "", message: "" });
    } catch {
      toast.error("Failed to submit. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
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
          <input type={type} value={form[key as keyof typeof form]} onChange={(e) => handleChange(key, e.target.value)} required={required} placeholder={label} className={inputClass} />
        </div>
      ))}

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Which program are you interested in?</label>
        <select value={form.program} onChange={(e) => handleChange("program", e.target.value)} required title="Select a program" className={inputClass}>
          <option value="">Select a program</option>
          {programs.filter(p => p.isOpen).map(p => (
            <option key={p._id} value={p.title}>{p.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Preferred Format</label>
        <select value={form.format} onChange={(e) => handleChange("format", e.target.value)} required title="Select format" className={inputClass}>
          <option value="">Select format</option>
          <option value="Physical in Lagos">Physical in Lagos</option>
          <option value="Online">Online</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">How did you hear about us?</label>
        <input type="text" value={form.hearAbout} onChange={(e) => handleChange("hearAbout", e.target.value)} placeholder="How did you hear about us?" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Message or Questions</label>
        <textarea value={form.message} onChange={(e) => handleChange("message", e.target.value)} rows={4} placeholder="Your message or questions..." className={`${inputClass} resize-none`} />
      </div>

      <motion.button
        type="submit"
        disabled={sending}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-accent-brand w-full text-center text-lg disabled:opacity-60"
      >
        {sending ? "Submitting..." : "Begin My Journey"}
      </motion.button>
    </motion.form>
  );
}

export default function Training() {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "training"] | order(_createdAt asc)`)
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <PageTransition>
      <SEOHead title="Training Program — Become a Gen-B Healer" description="Training program for aspiring bioresonanceists." path="/training" />

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
              Our training is designed for practitioners and individuals who have an interest in digital and electronic medicine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium text-deep-blue uppercase tracking-widest">Programs</span>
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3">Choose Your Path</h2>
            </div>
          </ScrollReveal>

          {loading && <p className="text-center text-muted-foreground font-body">Loading programs...</p>}

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <ProgramCard key={prog._id} prog={prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="heading-display text-3xl text-foreground mb-2">Enrollment Form</h2>
              <p className="text-muted-foreground font-body text-sm">Fill in your details to begin your journey</p>
            </div>
          </ScrollReveal>
          <EnrollmentForm programs={programs} />
          <p className="text-center text-sm text-muted-foreground font-body mt-6 max-w-lg mx-auto">
            Upon submission you will receive a confirmation email and our team will contact you within 24 hours.
          </p>
        </div>
      </section>

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