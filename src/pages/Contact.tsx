import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "Lagos, Nigeria" },
    { icon: Phone, label: "Phone", value: "+234 803 303 0614", href: "tel:+2348033030614" },
    { icon: MessageCircle, label: "WhatsApp", value: "+234 803 303 0614", href: "https://wa.me/2348033030614" },
    { icon: Mail, label: "Email", value: "1stbionic@gmail.com", href: "mailto:1stbionic@gmail.com" },
    { icon: Facebook, label: "Facebook", value: "Bioresonance, the Holy Grail of Healing©", href: "https://m.facebook.com/groups/187395870824739/" },
  ];

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
                <div className="bg-card rounded-xl p-5 border border-border card-hover">
                  <c.icon size={24} className="text-deep-blue mb-3" />
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-heading font-semibold text-foreground hover:text-deep-blue transition-colors text-sm">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-heading font-semibold text-foreground">{c.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: "name", label: "Full Name", type: "text" },
                    { key: "email", label: "Email", type: "email" },
                    { key: "phone", label: "Phone", type: "tel" },
                    { key: "subject", label: "Subject", type: "text" },
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
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-accent-brand w-full text-center text-lg">Send Message</button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
