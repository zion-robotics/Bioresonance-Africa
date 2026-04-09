import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import PhoneInput from "@/components/PhoneInput";
import { sendAdminNotification, sendConfirmation } from "@/lib/emailjs";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Lagos, Nigeria" },
  { icon: Phone, label: "Phone", value: "+234 803 303 0614", href: "tel:+2348033030614" },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 803 303 0614", href: "https://wa.me/2348033030614" },
  { icon: Mail, label: "Email", value: "1stbionic@gmail.com", href: "mailto:1stbionic@gmail.com" },
  { icon: ExternalLink, label: "Facebook", value: "Bioresonance, the Holy Grail of Healing©", href: "https://m.facebook.com/groups/187395870824739/" },
];

const formVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

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
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all";

  return (
    <PageTransition>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Get in Touch</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">Contact Us</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            {contactInfo.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 3 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-lg transition-shadow"
                >
                  <c.icon size={24} className="text-deep-blue mb-3" />
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-heading font-semibold text-foreground hover:text-deep-blue transition-colors text-sm">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-heading font-semibold text-foreground">{c.value}</p>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-2" style={{ perspective: "1000px" }}>
            <motion.form
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-card rounded-2xl p-8 border border-border space-y-5 shadow-xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Full Name", type: "text", i: 0 },
                  { key: "email", label: "Email", type: "email", i: 1 },
                  { key: "subject", label: "Subject", type: "text", i: 2 },
                ].map(({ key, label, type, i }) => (
                  <motion.div key={key} custom={i} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">{label}</label>
                    <input
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={label}
                      required
                      className={inputClass}
                    />
                  </motion.div>
                ))}

                <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Phone Number</label>
                  <PhoneInput value={form.phone} onChange={(val) => setForm({ ...form, phone: val })} required />
                </motion.div>
              </div>

              <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="btn-accent-brand w-full text-center text-lg disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}