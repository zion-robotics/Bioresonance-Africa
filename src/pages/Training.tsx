import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { GraduationCap, Clock, DollarSign, Award, MapPin, MessageCircle, CheckCircle, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import genB from "@/assets/gen_b.jpeg";
import { client } from "@/lib/sanity";
import { sendAdminNotification, sendConfirmation } from "@/lib/emailjs";
import PhoneInput from "@/components/PhoneInput";
import CountrySelect from "@/components/CountrySelect";

interface TrainingProgram {
  _id: string;
  title: string;
  description: string;
  price: string;
  slots: number;
  isOpen: boolean;
  date: string;
}

function FloatingInput({ label, type = "text", value, onChange, required, delay, placeholder }: {
  label: string; type?: string; value: string; placeholder?: string;
  onChange: (v: string) => void; required?: boolean; delay: number;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <div className={`relative rounded-xl border-2 transition-all duration-300 overflow-hidden ${
        focused ? "border-gold shadow-lg shadow-gold/20" : "border-border hover:border-deep-blue/40"
      }`}>
        {focused && <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deep-blue/5 pointer-events-none" />}
        <label className={`absolute left-4 transition-all duration-200 pointer-events-none font-body z-10 ${
          active ? "top-2 text-xs text-gold font-semibold" : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        }`}>{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          placeholder={focused ? placeholder : ""}
          className="w-full px-4 pt-6 pb-2 bg-transparent font-body text-sm focus:outline-none text-foreground"
        />
      </div>
    </motion.div>
  );
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
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-2xl overflow-hidden h-full flex flex-col border border-border shadow-sm hover:shadow-2xl transition-shadow duration-500 relative"
        style={{ backgroundColor: "hsl(216, 63%, 30%)" }}
      >
        <div className="h-1 w-full bg-gradient-to-r from-gold via-yellow-300 to-gold" />
        <div className="p-8 flex-1">
          <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-6 shadow-lg">
            <GraduationCap size={28} className="text-gold" />
          </div>
          <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">{prog.title}</h3>
          <p className="text-primary-foreground/70 font-body text-sm leading-relaxed mb-6">{prog.description}</p>
          <div className="space-y-4">
            {details.map((d) => (
              <motion.div key={d.label} whileHover={{ x: 4 }} className="flex items-start gap-3">
                <d.icon size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-heading font-semibold text-primary-foreground uppercase tracking-wider">{d.label}</span>
                  <p className="text-sm text-primary-foreground/60 font-body">{d.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {!prog.isOpen && <p className="mt-4 text-xs text-gold/70 font-body">Enrollment currently closed</p>}
        </div>
        <div className="px-8 pb-8">
          {prog.isOpen && (
            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-accent-brand w-full text-center block"
            >
              Enroll Now
            </motion.a>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function EnrollmentForm({ programs }: { programs: TrainingProgram[] }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", program: "", format: "", hearAbout: "", message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendAdminNotification({
        form_type: "Training Enrollment",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        location: form.country,
        message: `Program: ${form.program}\nFormat: ${form.format}\nHeard about us: ${form.hearAbout}\n\n${form.message}`,
        date: new Date().toLocaleDateString(),
      });
      await sendConfirmation({
        form_type: "training enrollment",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
      });
      setSent(true);
      toast.success("Enrollment submitted! We'll contact you within 24 hours.");
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", phone: "", country: "", program: "", format: "", hearAbout: "", message: "" });
      }, 3000);
    } catch {
      toast.error("Failed to submit. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const selectClass = "w-full px-4 py-3 rounded-xl border-2 border-border bg-card font-body text-sm focus:outline-none focus:border-gold focus:shadow-lg focus:shadow-gold/20 transition-all duration-300 text-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      className="relative bg-card rounded-3xl border border-border shadow-2xl overflow-hidden"
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-deep-blue via-gold to-deep-blue" />

      <div className="p-8 md:p-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-8">
          <h2 className="font-heading font-bold text-2xl text-foreground">Enrollment Form</h2>
          <p className="text-muted-foreground font-body text-sm mt-1">Fill in your details to begin your journey</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center justify-center py-16 gap-4"
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                <CheckCircle size={64} className="text-green-500" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl text-foreground">Enrollment Submitted!</h3>
              <p className="text-muted-foreground font-body text-center">We'll contact you within 24 hours to discuss your training details.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required delay={0.1} />
                <FloatingInput label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required delay={0.15} />
              </div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <p className="text-xs text-muted-foreground font-body mb-1.5">Phone Number</p>
                <PhoneInput value={form.phone} onChange={(val) => setForm({ ...form, phone: val })} required />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
                <p className="text-xs text-muted-foreground font-body mb-1.5">Country</p>
                <CountrySelect value={form.country} onChange={(val) => setForm({ ...form, country: val })} required />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <p className="text-xs text-muted-foreground font-body mb-1.5">Which program are you interested in?</p>
                <select value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} required title="Select a program" className={selectClass}>
                  <option value="">Select a program</option>
                  {programs.filter(p => p.isOpen).map(p => (
                    <option key={p._id} value={p.title}>{p.title}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
                <p className="text-xs text-muted-foreground font-body mb-1.5">Preferred Format</p>
                <select value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })} required title="Select format" className={selectClass}>
                  <option value="">Select format</option>
                  <option value="Physical in Lagos">Physical in Lagos</option>
                  <option value="Online">Online</option>
                </select>
              </motion.div>

              <FloatingInput label="How did you hear about us?" value={form.hearAbout} onChange={(v) => setForm({ ...form, hearAbout: v })} delay={0.4} />
              <FloatingInput label="Message or Questions" value={form.message} onChange={(v) => setForm({ ...form, message: v })} delay={0.45} />

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 rounded-xl font-heading font-bold text-lg overflow-hidden disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, hsl(218, 72%, 30%), hsl(43, 74%, 49%))" }}
              >
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <span className="relative flex items-center justify-center gap-2 text-white">
                  {sending ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                      Submitting...
                    </>
                  ) : (
                    <><Send size={18} /> Begin My Journey</>
                  )}
                </span>
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
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
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold blur-[120px]"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block text-sm font-body font-medium text-gold uppercase tracking-widest">
              Training Program
            </motion.span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy-foreground mt-4">Become a Gen-B Healer</h1>
            <p className="text-xl text-gold font-display italic mt-4">Trained by the 1st Bioresonanceist of Africa©</p>
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
            {programs.map((prog, i) => <ProgramCard key={prog._id} prog={prog} index={i} />)}
          </div>
        </div>
      </section>

      <section id="enroll" className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="heading-display text-3xl text-foreground mb-2">Ready to Begin?</h2>
              <p className="text-muted-foreground font-body text-sm">Fill in your details and we'll get back to you within 24 hours</p>
            </div>
          </ScrollReveal>
          <EnrollmentForm programs={programs} />
        </div>
      </section>

      <section className="py-12 bg-light-blue">
        <div className="max-w-2xl mx-auto text-center px-4">
          <ScrollReveal>
            <motion.a
              href="https://wa.me/2348033030614?text=Hello%2C%20I%27m%20interested%20in%20the%20training%20program"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(37,211,102,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 shadow-lg"
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