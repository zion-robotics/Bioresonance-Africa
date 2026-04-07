import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { Calendar, Search, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogData";

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
                      <span className="inline-flex items-center gap-2 text-deep-blue font-heading font-semibold hover:text-gold transition-colors">
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
