import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import PhoneInput from "@/components/PhoneInput";
import CountrySelect from "@/components/CountrySelect";
import { sendAdminNotification, sendConfirmation } from "@/lib/emailjs";

const formVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", type: "physical", date: "", time: "", condition: "", message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendAdminNotification({
        form_type: "Appointment Booking",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        location: form.country,
        message: `Type: ${form.type}\nDate: ${form.date}\nTime: ${form.time}\nCondition: ${form.condition}\n\n${form.message}`,
        date: new Date().toLocaleDateString(),
      });
      await sendConfirmation({
        form_type: "appointment booking",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
      });
      toast.success("Appointment request submitted! We'll confirm within 24 hours.");
      setForm({ name: "", email: "", phone: "", country: "", type: "physical", date: "", time: "", condition: "", message: "" });
    } catch {
      toast.error("Failed to submit. Please try WhatsApp instead.");
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
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Appointments</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              Book Your Appointment
            </h1>
            <p className="text-navy-foreground/60 font-body text-lg mt-6">
              Choose between a physical visit or remote consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-2xl mx-auto" style={{ perspective: "1000px" }}>
          <motion.form
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-card rounded-2xl p-8 border border-border space-y-5 shadow-xl"
          >
            {[
              { key: "name", label: "Full Name", type: "text", i: 0 },
              { key: "email", label: "Email Address", type: "email", i: 1 },
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

            <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-body font-medium text-foreground mb-1">Phone Number</label>
              <PhoneInput value={form.phone} onChange={(val) => setForm({ ...form, phone: val })} required />
            </motion.div>

            <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-body font-medium text-foreground mb-1">Country</label>
              <CountrySelect value={form.country} onChange={(val) => setForm({ ...form, country: val })} required />
            </motion.div>

            <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-body font-medium text-foreground mb-1">Consultation Type</label>
              <div className="flex gap-4">
                {["physical", "remote"].map((t) => (
                  <motion.button
                    key={t}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setForm({ ...form, type: t })}
                    className={`flex-1 py-3 rounded-xl border text-sm font-body font-medium transition-all ${
                      form.type === t
                        ? "border-deep-blue bg-deep-blue text-white shadow-md"
                        : "border-border text-muted-foreground hover:border-deep-blue/50"
                    }`}
                  >
                    {t === "physical" ? "Physical Visit" : "Remote Session"}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div custom={5} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Preferred Date</label>
                <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required title="Select date" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Preferred Time</label>
                <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required title="Select time" className={inputClass} />
              </div>
            </motion.div>

            <motion.div custom={6} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-body font-medium text-foreground mb-1">Condition / Concern</label>
              <input type="text" value={form.condition} onChange={(e) => setForm({ ...form, condition: e.target.value })} placeholder="Describe your condition" className={inputClass} />
            </motion.div>

            <motion.div custom={7} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-body font-medium text-foreground mb-1">Additional Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Additional details..." rows={3} className={`${inputClass} resize-none`} />
            </motion.div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="btn-accent-brand w-full text-center text-lg disabled:opacity-60"
            >
              {sending ? "Submitting..." : "Book Appointment"}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  );
}