import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { Calendar, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Bioresonance: The Future of Medicine",
    excerpt: "Discover how frequency-based medicine is revolutionizing healthcare in Africa and beyond.",
    category: "Education",
    date: "March 15, 2026",
    slug: "understanding-bioresonance",
  },
  {
    title: "Why Root-Cause Medicine Matters",
    excerpt: "Learn why treating symptoms is not enough and how bioresonance addresses the real origin of disease.",
    category: "Health",
    date: "March 10, 2026",
    slug: "root-cause-medicine",
  },
  {
    title: "The Story Behind Bionic© and Biopita©",
    excerpt: "The journey of building Africa's first bioresonance ecosystem from the ground up.",
    category: "Company",
    date: "March 5, 2026",
    slug: "bionic-biopita-story",
  },
  {
    title: "Gen-B Healers: The New Generation of Practitioners",
    excerpt: "How the training program is creating a new class of frequency medicine practitioners.",
    category: "Training",
    date: "February 28, 2026",
    slug: "gen-b-healers",
  },
  {
    title: "Remote Bioresonance: Healing Across Borders",
    excerpt: "How the Remote Black Box enables cross-border treatment without physical presence.",
    category: "Technology",
    date: "February 20, 2026",
    slug: "remote-bioresonance",
  },
  {
    title: "From Patienthood to Survivorhood",
    excerpt: "Real stories of transformation through bioresonance, the Holy Grail of Healing©.",
    category: "Stories",
    date: "February 15, 2026",
    slug: "patienthood-to-survivorhood",
  },
];

export default function Blog() {
  return (
    <PageTransition>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Blog</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              Insights & Updates
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <article className="bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col h-full">
                <div className="h-48 bg-gradient-to-br from-deep-blue/10 to-gold/10 flex items-center justify-center">
                  <span className="text-5xl font-display text-deep-blue/20">{post.title[0]}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 text-xs text-deep-blue font-body">
                      <Tag size={12} /> {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground font-body flex-1">{post.excerpt}</p>
                  <span className="mt-4 text-sm font-heading font-semibold text-deep-blue hover:text-gold transition-colors cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
