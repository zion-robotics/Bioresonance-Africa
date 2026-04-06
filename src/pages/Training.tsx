import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import genB from "@/assets/gen_b.jpeg";
import questionImg from "@/assets/question.jpeg";
import { useState } from "react";
import { toast } from "sonner";

export default function Training() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enrollment submitted! We'll contact you soon.");
    setForm({ name: "", email: "", phone: "", location: "", message: "" });
  };

  return (
    <PageTransition>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={genB} alt="Gen-B Healers" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Training Program</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy-foreground mt-4">
              Become a Gen-B Healer
            </h1>
            <p className="text-xl text-gold font-display italic mt-4">
              Trained by the 1st Bioresonanceist of Africa©
            </p>
            <p className="text-navy-foreground/60 font-body text-lg mt-6 max-w-2xl mx-auto">
              Training program for aspiring bioresonanceists. Learn the methodology, tools and precision of bioresonance, the Holy Grail of Healing©. Throw away dependency on drugs. Heal with frequency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden">
              <img src={questionImg} alt="A doctor or a bioresonanceist?" className="w-full h-[500px] object-cover" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="heading-display text-3xl text-foreground mb-6">Enrollment Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
                { key: "location", label: "Location", type: "text" },
              ].map(({ key, label, type }) => (
                <div key={key}>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">{label}</label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all resize-none"
                />
              </div>
              <button type="submit" className="btn-accent-brand w-full text-center text-lg">
                Submit Enrollment
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
