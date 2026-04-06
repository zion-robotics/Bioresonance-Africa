import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { Calendar, Tag, Search, ArrowRight, Clock } from "lucide-react";

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  readTime: string;
  content: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Understanding Bioresonance: The Future of Medicine",
    excerpt: "Discover how frequency-based medicine is revolutionizing healthcare in Africa and beyond. A comprehensive look at the science, principles, and transformative potential.",
    category: "Education",
    date: "March 15, 2026",
    slug: "understanding-bioresonance",
    readTime: "8 min read",
    content: `Bioresonance, the Holy Grail of Healing©, represents a paradigm shift in how we understand and treat disease. Unlike conventional medicine that relies on chemicals and invasive procedures, bioresonance works at the fundamental level of energy and frequency.

Every cell in the human body emits electromagnetic frequencies. When these frequencies are in harmony, the body functions optimally. Disease begins when these frequencies become distorted — long before physical symptoms appear.

## How Bioresonance Works

The NLS (Non-Linear System) diagnostic device reads the body's electromagnetic signals with extraordinary precision. It can detect distortions in frequency patterns across every organ, tissue, and cell system. Once identified, corrective frequencies are deployed to restore the body's natural balance.

This is not guesswork. It is precise, measurable, and reproducible science. The Meta Hunter 4025 device used at Bionic© can perform comprehensive body scans that reveal the true origin of disease — not just the symptoms.

## The African Pioneer

Oludele SKO, the 1st Bioresonanceist of Africa©, has brought this revolutionary technology to the continent and refined it through years of clinical practice. His work has demonstrated that frequency-based medicine can address over 144 conditions — from chronic diseases to acute infections — without drugs, surgery, or chemicals.

## Why This Matters

The conventional healthcare system, while valuable in emergency care, often manages symptoms rather than eliminating causes. Patients cycle through medications, procedures, and hospital visits without ever addressing why they became sick in the first place.

Bioresonance changes this equation entirely. By working at the energetic root of disease, it offers the possibility of true resolution rather than management. This is why it has earned the distinction: the Holy Grail of Healing©.

The future of medicine is not in more powerful drugs or more invasive surgeries. It is in understanding and correcting the frequency distortions that cause disease in the first place.`,
  },
  {
    title: "Why Root-Cause Medicine Matters",
    excerpt: "Learn why treating symptoms is not enough and how bioresonance addresses the real origin of disease with precision frequency correction.",
    category: "Health",
    date: "March 10, 2026",
    slug: "root-cause-medicine",
    readTime: "6 min read",
    content: `For decades, the dominant approach to healthcare has been symptom management. A patient presents with high blood pressure — they receive medication to lower it. A patient experiences chronic pain — they receive painkillers. But what caused the high blood pressure? What is generating the pain?

## The Symptom Trap

Symptom management creates a cycle of dependency. Patients become reliant on medications that may never address the underlying condition. Meanwhile, the true cause — whether it's toxin accumulation, parasitic infection, organ dysfunction, or energetic distortion — continues to progress unchecked.

This is not a criticism of all conventional medicine. Emergency care, surgical intervention for trauma, and diagnostic imaging are invaluable. But for chronic conditions, autoimmune disorders, and systemic diseases, the symptom-management approach falls short.

## The Bioresonance Difference

Bioresonance, the Holy Grail of Healing©, operates on a fundamentally different principle. Rather than suppressing symptoms, it identifies the root cause of disease at the energetic level and corrects it.

Every disease has an origin point — a moment when the body's frequencies first became distorted. This distortion may have been caused by environmental toxins, microbial infections, emotional trauma, or inherited patterns. Whatever the cause, it manifests as a measurable change in the body's electromagnetic signature.

The NLS diagnostic system reads this signature and pinpoints exactly where the distortion originated. Corrective frequencies are then applied to restore balance. The body, given the right frequency information, can heal itself.

## Real Results

At Bionic©, we have witnessed transformations that conventional medicine said were impossible. Patients who spent years managing symptoms have found resolution through frequency-based treatment. This is not alternative medicine — it is the next evolution of medicine.

As Oludele SKO, the founder, has stated: "We are not destroyers of systems, but disciplined reformers of healthcare."`,
  },
  {
    title: "The Story Behind Bionic© and Biopita©: A Vision for Africa",
    excerpt: "The journey of building Africa's first bioresonance ecosystem from the ground up — from a single clinic to a continental vision.",
    category: "Company",
    date: "March 5, 2026",
    slug: "bionic-biopita-story",
    readTime: "10 min read",
    content: `The story of Bionic© and Biopita© is the story of one man's determination to bring transformative healthcare to a continent that deserves better.

## The Beginning

Oludele Sunday Kolawole Olumide — known as Oludele SKO — did not set out to challenge the entire healthcare establishment. He set out to find answers. When conventional medicine failed to provide the root-cause solutions he sought, he discovered bioresonance.

What he found was not just a treatment modality — it was an entirely new paradigm. Disease understood not as a random occurrence to be managed, but as an energetic distortion to be corrected. This discovery would change the course of his life and the lives of hundreds of patients.

## Building Bionic©

Bionic© was established as a refined version of the bioresonance clinic, engineered specifically for precision intervention. It was not designed to be a wellness center or a spa. It was built as a focused, high-precision environment for root-cause correction using digital frequency medicine.

At Bionic©, the body's energetic signals are scanned and interpreted in clear, common language. Hidden distortions are identified before physical manifestation. Corrective frequencies are deployed to restore balance at the source.

## The Vision of Biopita©

As the demand for bioresonance treatment grew, a larger vision emerged. Biopita© — a structured version of a bioresonance hospital — was conceptualized for scale, coordination, and advanced care delivery.

At Biopita©, multiple Bionic© units would operate within an integrated system. Complex conditions would be addressed comprehensively. Continuous monitoring and structured healing pathways would be implemented.

## The 1st Bioresonanceist of Africa©

The title is not self-given — it is earned through pioneering work. Oludele SKO introduced bioresonance to Nigeria and developed proprietary tools like the Energy Trapper that are exclusive to his practice. His training program, Gen-B Healers, is creating the next generation of frequency medicine practitioners across Africa.

Bionic© and Biopita© form a unified ecosystem — one delivering precision at the individual level, the other providing structured capacity at scale — both committed to eliminating root causes and redefining the future of medicine.`,
  },
  {
    title: "Gen-B Healers: The New Generation of Practitioners",
    excerpt: "How the training program is creating a new class of frequency medicine practitioners who will carry bioresonance across the African continent.",
    category: "Training",
    date: "February 28, 2026",
    slug: "gen-b-healers",
    readTime: "7 min read",
    content: `The future of bioresonance in Africa depends not on a single practitioner, but on a generation of trained, disciplined frequency medicine professionals. This is why the Gen-B Healers program exists.

## What is a Gen-B Healer?

Gen-B stands for "Generation Bioresonance." These are practitioners trained directly by Oludele SKO, the 1st Bioresonanceist of Africa©, in the precise methodology of frequency-based diagnosis and treatment.

A Gen-B Healer is not simply someone who operates equipment. They are trained to understand the principles of energetic medicine, interpret diagnostic scans, design treatment protocols, and guide patients through the healing journey.

## The Training Program

The Gen-B training program covers:

**Theoretical Foundation**: Understanding bioresonance principles, the physics of frequency medicine, and the relationship between energetic distortion and disease manifestation.

**Diagnostic Proficiency**: Mastering the NLS Meta Hunter 4025 and other diagnostic tools, including scan interpretation and pattern recognition.

**Treatment Protocols**: Designing and implementing frequency correction protocols for over 144 conditions.

**Clinical Practice**: Supervised clinical sessions where trainees work with real patients under the guidance of experienced practitioners.

**Ethics and Standards**: Maintaining the highest professional standards in patient care, confidentiality, and clinical practice.

## Why This Matters

Africa's healthcare challenges cannot be solved by importing solutions designed for other contexts. The continent needs practitioners who understand its unique health landscape and can apply frequency-based medicine effectively within it.

Gen-B Healers are being trained to establish Bionic© clinics across the continent, bringing root-cause medicine to communities that have been underserved by conventional healthcare systems.

## Join the Movement

If you are called to heal — truly heal, not just manage symptoms — the Gen-B Healers program may be your path. Contact us to learn about enrollment, prerequisites, and training schedules.`,
  },
  {
    title: "Remote Bioresonance: Healing Across Borders",
    excerpt: "How the Remote Black Box enables cross-border treatment without physical presence — making healing accessible regardless of location.",
    category: "Technology",
    date: "February 20, 2026",
    slug: "remote-bioresonance",
    readTime: "5 min read",
    content: `One of the most revolutionary aspects of bioresonance technology is its ability to work remotely. The Remote Black Box makes it possible to deliver frequency-based treatment to patients anywhere in the world.

## How Remote Treatment Works

Bioresonance operates on the principle of electromagnetic frequency. Every individual has a unique frequency signature — like a fingerprint, but at the energetic level. The Remote Black Box can lock onto this signature and deliver corrective frequencies regardless of physical distance.

This is not science fiction. It is applied quantum physics. The same principles that enable quantum entanglement in laboratory settings are at work in remote bioresonance treatment.

## The Remote Black Box

The Meta Hunter + Remote Black Box Bundle (₦800,000) includes everything needed for remote treatment capability:

- The Meta Hunter diagnostic device for comprehensive scanning
- Professional-grade headphones for signal reception
- The Remote Black Box for distance frequency delivery

This combination enables a practitioner to perform a full diagnostic scan and deliver corrective treatment to a patient in another city, state, or even country.

## Cross-Border Healthcare

For patients in rural areas with limited access to clinics, or for diaspora communities seeking treatment from trusted practitioners, remote bioresonance eliminates the barrier of distance.

A patient in London can receive treatment from a Bionic© practitioner in Lagos. A patient in Abuja can access diagnostic scanning without traveling. This is healthcare without borders.

## Telemedicine Integration

Remote bioresonance integrates seamlessly with telemedicine platforms. Video consultations combined with remote frequency treatment create a comprehensive care experience that rivals — and often surpasses — in-person visits for many conditions.

The future of healthcare is not just digital — it is frequency-based, remote-capable, and borderless.`,
  },
  {
    title: "From Patienthood to Survivorhood: Stories of Transformation",
    excerpt: "Real stories of lives transformed through bioresonance — people who moved from chronic suffering to vibrant health.",
    category: "Stories",
    date: "February 15, 2026",
    slug: "patienthood-to-survivorhood",
    readTime: "9 min read",
    content: `The phrase "From Patienthood to Survivorhood" is not marketing language. It is the lived experience of hundreds of individuals who found resolution through bioresonance, the Holy Grail of Healing©.

## What Does Survivorhood Mean?

In the conventional healthcare system, patients often remain patients for life. They manage conditions, take medications, and accept limitations. Survivorhood represents something different — it is the state of having overcome the root cause of disease and reclaimed full health.

At Bionic©, we don't create long-term patients. We create survivors — individuals who have been freed from the energetic distortions that caused their conditions.

## The Journey

Every patient who walks into Bionic© begins with a comprehensive frequency scan. This scan reveals what no blood test, X-ray, or MRI can show: the energetic origin of their condition.

For many patients, this is the first time anyone has looked beyond their symptoms. The scan might reveal that their chronic fatigue is rooted in parasitic infection. That their recurring headaches stem from heavy metal accumulation. That their autoimmune symptoms are linked to specific frequency distortions in the immune system.

Once the root cause is identified, corrective frequencies are applied. The timeline varies — some conditions resolve quickly, others require sustained treatment — but the direction is always toward resolution, not management.

## The Transformation

The most powerful aspect of bioresonance is not the technology itself, but the transformation it enables. Patients who spent years being told their conditions were "manageable but incurable" have found complete resolution.

Families who spent fortunes on medications and hospital visits have found that frequency-based treatment costs a fraction while delivering superior results. Individuals who had given up hope have discovered that their bodies, given the right frequency information, can heal themselves.

## Your Story

Every survivor began as a patient. Every transformation began with a single decision — to try something fundamentally different. If you are ready to move from patienthood to survivorhood, bioresonance, the Holy Grail of Healing©, may be your path.

Book your comprehensive frequency scan today and take the first step toward root-cause resolution.`,
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Blog</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              Insights & Updates
            </h1>
            <p className="text-navy-foreground/60 font-body text-lg mt-4 max-w-2xl mx-auto">
              Articles on frequency medicine, bioresonance technology, and the future of healthcare from the desk of the 1st Bioresonanceist of Africa©.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          {/* Search and filters */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1 max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-deep-blue text-primary-foreground shadow-md"
                        : "bg-card text-muted-foreground border border-border hover:border-deep-blue/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Featured post */}
          {filtered.length > 0 && (
            <ScrollReveal>
              <Link to={`/blog/${filtered[0].slug}`} className="block mb-12">
                <motion.article
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-navy via-deep-blue to-navy flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-64 h-64 border border-gold/10 rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-40 h-40 border border-gold/20 rounded-full"
                      />
                      <span className="text-8xl font-heading font-bold text-gold/20 relative z-10">
                        {filtered[0].title[0]}
                      </span>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-deep-blue/10 text-deep-blue text-xs font-body font-semibold">
                          {filtered[0].category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                          <Calendar size={12} /> {filtered[0].date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                          <Clock size={12} /> {filtered[0].readTime}
                        </span>
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-foreground mb-3">{filtered[0].title}</h2>
                      <p className="text-muted-foreground font-body leading-relaxed mb-6">{filtered[0].excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-deep-blue font-heading font-semibold group-hover:text-gold transition-colors">
                        Read Full Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </ScrollReveal>
          )}

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="bg-card rounded-2xl border border-border overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-500"
                  >
                    <div className="h-48 bg-gradient-to-br from-deep-blue/10 via-gold/5 to-deep-blue/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(218_72%_30%/0.1),transparent_60%)]" />
                      <span className="text-6xl font-heading font-bold text-deep-blue/15">{post.title[0]}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-deep-blue/10 text-deep-blue text-xs font-body font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2 leading-snug">{post.title}</h3>
                      <p className="text-sm text-muted-foreground font-body flex-1 leading-relaxed">{post.excerpt}</p>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                        <span className="text-sm font-heading font-semibold text-deep-blue flex items-center gap-1">
                          Read More <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body mt-8">
              No articles found matching your search.
            </p>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
