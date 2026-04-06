import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { blogPosts } from "./Blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-card">
          <div className="text-center">
            <h1 className="heading-display text-3xl text-foreground mb-4">Article Not Found</h1>
            <Link to="/blog" className="btn-primary-brand">Back to Blog</Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-navy-foreground/60 hover:text-gold transition-colors font-body text-sm mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body font-semibold flex items-center gap-1">
                <Tag size={12} /> {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-navy-foreground/50 font-body">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-navy-foreground/50 font-body">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>

            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy-foreground leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-heading font-bold text-gold text-lg">OS</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-navy-foreground text-sm">Oludele SKO</p>
                <p className="text-xs text-navy-foreground/50 font-body">1st Bioresonanceist of Africa©</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="heading-display text-2xl text-foreground mt-10 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="font-heading font-bold text-lg text-foreground mt-6 mb-2">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("**")) {
                  return (
                    <p key={i} className="text-foreground/80 font-body leading-relaxed mb-4">
                      <strong className="font-heading font-semibold text-foreground">
                        {paragraph.split("**")[1]}
                      </strong>
                      {": "}
                      {paragraph.split("**")[2]?.replace(/^:\s*/, "")}
                    </p>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 ml-4 mb-4">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-foreground/70 font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-deep-blue mt-2 flex-shrink-0" />
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-foreground/70 font-body leading-relaxed mb-4 text-[1.05rem]">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Share */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Share2 size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-body">Share this article</span>
              </div>
              <Link to="/book-appointment" className="btn-accent-brand !py-2.5 !px-6 text-sm">
                Book Appointment
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related posts */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="heading-display text-2xl text-foreground mb-8">More Articles</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp, i) => (
              <ScrollReveal key={rp.slug} delay={i * 0.1}>
                <Link to={`/blog/${rp.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-xl border border-border p-6 h-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="text-xs font-body text-deep-blue font-medium">{rp.category}</span>
                    <h3 className="font-heading font-bold text-foreground mt-2 mb-2 leading-snug">{rp.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{rp.date}</p>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
