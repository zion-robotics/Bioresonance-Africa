import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Heart, Users, ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";

const upcomingEvents = [
  {
    title: "BioSEMC Lagos Free Healing Day",
    date: "Coming Soon",
    location: "Lagos, Nigeria",
    description: "A full day of free bioresonance treatments for underserved communities in Lagos. Open to all who need healing.",
    image: "",
  },
  {
    title: "BioSEMC Frequency Healing Outreach",
    date: "Coming Soon",
    location: "Lagos, Nigeria",
    description: "Community outreach bringing the Holy Grail of Healing© to those who cannot afford conventional treatments.",
    image: "",
  },
];

const pastEvents = [
  {
    title: "Inaugural BioSEMC Session",
    date: "2025",
    location: "Lagos, Nigeria",
    description: "The first-ever Bioresonance Season of Experimental Medical Charity — healing dozens of patients free of charge.",
    outcome: "Multiple patients treated successfully using frequency-based medicine.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function BioSEMC() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "patient",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `BioSEMC Inquiry\nName: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/2348033030614?text=${msg}`, "_blank");
  };

  return (
    <PageTransition>
      <SEOHead
        title="BioSEMC — Bioresonance Season of Experimental Medical Charity"
        description="BioSEMC brings the Holy Grail of Healing© to those who need it most. Free bioresonance treatments, community outreach, and frequency healing across Africa."
        path="/biosemc"
      />

      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-deep-blue blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-gold/20 blur-[120px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-heading font-semibold tracking-widest uppercase mb-6">
              Medical Charity Initiative
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy-foreground mb-6">
              BioSEMC
            </h1>
            <p className="text-lg md:text-xl text-gold font-heading font-medium mb-4">
              Bioresonance Season of Experimental Medical Charity
            </p>
            <p className="text-base md:text-lg text-navy-foreground/70 font-body max-w-2xl mx-auto mb-10">
              Bringing the Holy Grail of Healing© to those who need it most.
            </p>
            <a href="#participate" className="btn-accent-brand !py-3.5 !px-10 text-base inline-flex items-center gap-2">
              Get Involved <ArrowRight size={18} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT IS BIOSEMC */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">What is BioSEMC?</h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
              BioSEMC — the Bioresonance Season of Experimental Medical Charity — is a humanitarian initiative founded by Oludele SKO, the 1st Bioresonanceist of Africa©. It is dedicated to providing free bioresonance treatments to individuals who cannot afford conventional healthcare.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              Through BioSEMC, we bring the power of frequency-based healing to underserved communities across Africa, proving that health is a right, not a privilege. More details on upcoming programs will be announced soon.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CURRENT EVENTS */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-3">Upcoming Events</h2>
              <p className="text-muted-foreground font-body">Join our next healing outreach</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-2">
                  <Calendar size={14} className="text-gold" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-4">
                  <MapPin size={14} className="text-gold" />
                  {event.location}
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">{event.description}</p>
                <a
                  href="https://wa.me/2348033030614?text=I%20want%20to%20register%20for%20BioSEMC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent-brand !py-2.5 !px-6 text-sm inline-flex items-center gap-2"
                >
                  Register <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-3">Past Events</h2>
              <p className="text-muted-foreground font-body">Lives transformed through BioSEMC</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-light-blue p-8"
              >
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-2">
                  <Calendar size={14} /> {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-4">
                  <MapPin size={14} /> {event.location}
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">{event.description}</p>
                <p className="text-sm font-heading font-semibold text-deep-blue">{event.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO PARTICIPATE */}
      <section id="participate" className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-3">How To Participate</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Heart size={28} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Receive Free Treatment</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                For patients who cannot afford bioresonance treatment. BioSEMC provides free healing sessions using frequency-based medicine — no drugs, no surgery, no cost.
              </p>
              <a
                href="https://wa.me/2348033030614?text=I%20need%20free%20BioSEMC%20treatment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-brand !py-2.5 !px-8 text-sm inline-flex items-center gap-2"
              >
                Request Treatment <MessageCircle size={14} />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-deep-blue/10 flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-deep-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Volunteer</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                For practitioners, supporters, and anyone willing to contribute to the mission. Help us bring frequency healing to more people across Africa.
              </p>
              <a
                href="https://wa.me/2348033030614?text=I%20want%20to%20volunteer%20for%20BioSEMC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent-brand !py-2.5 !px-8 text-sm inline-flex items-center gap-2"
              >
                Volunteer Now <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-gold/30 blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="heading-display text-3xl md:text-4xl text-navy-foreground mb-4">
              Support the BioSEMC Initiative
            </h2>
            <p className="text-lg text-navy-foreground/70 font-body mb-10">
              Help us bring frequency healing to more people across Africa.
            </p>
            <a
              href="https://wa.me/2348033030614?text=I%20want%20to%20support%20BioSEMC"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent-brand !py-3.5 !px-10 text-base inline-flex items-center gap-2"
            >
              Get Involved Today <ArrowRight size={18} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
