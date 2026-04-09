import { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Wifi, CheckCircle, CalendarCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import PhoneInput from "@/components/PhoneInput";
import CountrySelect from "@/components/CountrySelect";
import { sendAdminNotification, sendConfirmation } from "@/lib/emailjs";

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
      className="relative"
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

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", type: "physical",
    date: "", time: "", condition: "", message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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
      setSent(true);
      toast.success("Appointment request submitted! We'll confirm within 24 hours.");
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", phone: "", country: "", type: "physical", date: "", time: "", condition: "", message: "" });
      }, 3000);
    } catch {
      toast.error("Failed to submit. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border-2 border-border bg-card font-body text-sm focus:outline-none focus:border-gold focus:shadow-lg focus:shadow-gold/20 transition-all duration-300 text-foreground";

  return (
    <PageTransition>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold blur-[120px]" />
          <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-deep-blue blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-body font-medium text-gold uppercase tracking-widest">
              Appointments
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              Book Your Appointment
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-navy-foreground/60 font-body text-lg mt-6">
              Choose between a physical visit or remote consultation.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-2xl mx-auto" style={{ perspective: "1200px" }}>
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
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-8">
                <h2 className="font-heading font-bold text-2xl text-foreground">Book an Appointment</h2>
                <p className="text-muted-foreground font-body text-sm mt-1">We'll confirm your booking within 24 hours</p>
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
                    <h3 className="font-heading font-bold text-xl text-foreground">Appointment Requested!</h3>
                    <p className="text-muted-foreground font-body text-center">We'll confirm your booking within 24 hours.</p>
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

                    {/* Consultation Type */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                      <p className="text-xs text-muted-foreground font-body mb-2">Consultation Type</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: "physical", label: "Physical Visit", icon: MapPin },
                          { value: "remote", label: "Remote Session", icon: Wifi },
                        ].map((t) => (
                          <motion.button
                            key={t.value}
                            type="button"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setForm({ ...form, type: t.value })}
                            className={`relative flex items-center gap-3 p-4 rounded-xl border-2 text-sm font-body font-medium transition-all duration-300 overflow-hidden ${
                              form.type === t.value
                                ? "border-gold bg-gradient-to-br from-gold/10 to-deep-blue/10 text-foreground shadow-md"
                                : "border-border text-muted-foreground hover:border-deep-blue/40"
                            }`}
                          >
                            {form.type === t.value && (
                              <motion.div layoutId="typeIndicator" className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deep-blue/5" />
                            )}
                            <t.icon size={18} className={form.type === t.value ? "text-gold" : "text-muted-foreground"} />
                            <span className="relative">{t.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Date and Time */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground font-body mb-1.5 flex items-center gap-1"><Calendar size={12} /> Preferred Date</p>
                        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required title="Select date" className={inputClass} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-body mb-1.5 flex items-center gap-1"><Clock size={12} /> Preferred Time</p>
                        <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required title="Select time" className={inputClass} />
                      </div>
                    </motion.div>

                    <FloatingInput label="Condition / Concern / Complaint" value={form.condition} onChange={(v) => setForm({ ...form, condition: v })} placeholder="List your complaints" delay={0.4} />
                    <FloatingInput label="Additional Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })} placeholder="Any extra details..." delay={0.45} />

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
                          <><CalendarCheck size={18} /> Book an Appointment</>
                        )}
                      </span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}