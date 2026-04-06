import { useState } from "react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", type: "physical", date: "", time: "", condition: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment request submitted! We'll confirm shortly.");
    setForm({ name: "", email: "", phone: "", type: "physical", date: "", time: "", condition: "", message: "" });
  };

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
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-5">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
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
                <label className="block text-sm font-body font-medium text-foreground mb-1">Consultation Type</label>
                <div className="flex gap-4">
                  {["physical", "remote"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, type: t })}
                      className={`flex-1 py-3 rounded-xl border text-sm font-body font-medium transition-all ${
                        form.type === t
                          ? "border-deep-blue bg-deep-blue text-deep-blue-foreground"
                          : "border-border text-muted-foreground hover:border-deep-blue/50"
                      }`}
                    >
                      {t === "physical" ? "Physical Visit" : "Remote Session"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Preferred Time</label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Condition / Concern</label>
                <input
                  type="text"
                  value={form.condition}
                  onChange={(e) => setForm({ ...form, condition: e.target.value })}
                  placeholder="Describe your condition"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Additional Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-accent-brand w-full text-center text-lg">
                Book Appointment
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
