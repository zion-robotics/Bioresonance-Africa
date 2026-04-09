import { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import PhoneInput from "@/components/PhoneInput";
import { sendAdminNotification, sendConfirmation } from "@/lib/emailjs";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Lagos, Nigeria", href: null, color: "from-blue-500 to-deep-blue" },
  { icon: Phone, label: "Phone", value: "+234 803 303 0614", href: "tel:+2348033030614", color: "from-green-500 to-emerald-600" },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 803 303 0614", href: "https://wa.me/2348033030614", color: "from-green-400 to-green-600" },
  { icon: Mail, label: "Email", value: "1stbionic@gmail.com", href: "mailto:1stbionic@gmail.com", color: "from-gold to-yellow-500" },
  { icon: ExternalLink, label: "Facebook", value: "Bioresonance, the Holy Grail of Healing©", href: "https://m.facebook.com/groups/187395870824739/", color: "from-blue-600 to-blue-800" },
];

function FloatingInput({ label, type = "text", value, onChange, required, delay }: {
  label: string; type?: string; value: string;
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
      className="relative"
    >
      <div className={`relative rounded-xl border-2 transition-all duration-300 overflow-hidden ${
        focused ? "border-gold shadow-lg shadow-gold/20" : "border-border hover:border-deep-blue/40"
      }`}>
        {focused && (
          <motion.div
            layoutId="glow"
            className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deep-blue/5 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
        <label className={`absolute left-4 transition-all duration-200 pointer-events-none font-body z-10 ${
          active ? "top-2 text-xs text-gold font-semibold" : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        }`}>
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          title={label}
          className="w-full px-4 pt-6 pb-2 bg-transparent font-body text-sm focus:outline-none text-foreground"
        />
      </div>
    </motion.div>
  );
}

function FloatingTextarea({ label, value, onChange, required, delay }: {
  label: string; value: string;
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
      className="relative"
    >
      <div className={`relative rounded-xl border-2 transition-all duration-300 overflow-hidden ${
        focused ? "border-gold shadow-lg shadow-gold/20" : "border-border hover:border-deep-blue/40"
      }`}>
        {focused && (
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deep-blue/5 pointer-events-none" />
        )}
        <label className={`absolute left-4 transition-all duration-200 pointer-events-none font-body z-10 ${
          active ? "top-2 text-xs text-gold font-semibold" : "top-4 text-sm text-muted-foreground"
        }`}>
          {label}
        </label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={5}
          title={label}
          className="w-full px-4 pt-8 pb-3 bg-transparent font-body text-sm focus:outline-none text-foreground resize-none"
        />
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendAdminNotification({
        form_type: "Contact Form",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        location: "",
        message: `Subject: ${form.subject}\n\n${form.message}`,
        date: new Date().toLocaleDateString(),
      });
      await sendConfirmation({
        form_type: "contact form",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
      });
      setSent(true);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 3000);
    } catch {
      toast.error("Failed to send message. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageTransition>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gold blur-[120px]" />
          <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-deep-blue blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-body font-medium text-gold uppercase tracking-widest"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4"
            >
              Contact Us
            </motion.h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${c.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-3 shadow-md`}>
                  <c.icon size={18} className="text-white" />
                </div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-heading font-semibold text-foreground hover:text-deep-blue transition-colors text-sm">
                    {c.value}
                  </a>
                ) : (
                  <p className="font-heading font-semibold text-foreground text-sm">{c.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative bg-card rounded-3xl border border-border shadow-2xl overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-deep-blue via-gold to-deep-blue" />

              <div className="p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="font-heading font-bold text-2xl text-foreground">Send us a Message</h2>
                  <p className="text-muted-foreground font-body text-sm mt-1">We respond within 24 hours</p>
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
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle size={64} className="text-green-500" />
                      </motion.div>
                      <h3 className="font-heading font-bold text-xl text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground font-body text-center">We'll get back to you within 24 hours.</p>
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
                        <FloatingInput label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required delay={0.15} />
                        <FloatingInput label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} required delay={0.2} />
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25, duration: 0.5 }}
                        >
                          <p className="text-xs text-muted-foreground font-body mb-1.5">Phone Number</p>
                          <PhoneInput value={form.phone} onChange={(val) => setForm({ ...form, phone: val })} required />
                        </motion.div>
                      </div>

                      <FloatingTextarea label="Your Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })} required delay={0.3} />

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
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} /> Send Message
                            </>
                          )}
                        </span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}