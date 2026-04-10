import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  excerpt: string;
  category: string;
  readTime: string;
  body: PortableTextBlock[];
  mainImage?: { asset: { _ref: string } };
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "blog" && slug.current == $slug][0] { _id, title, slug, author, publishedAt, excerpt, category, readTime, body, mainImage }`, { slug })
      .then((data) => {
        setPost(data);
        return client.fetch(
          `*[_type == "blog" && slug.current != $slug] | order(publishedAt desc)[0...3]`,
          { slug }
        );
      })
      .then((data) => {
        setRelated(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground font-body">Loading article...</p>
        </div>
      </PageTransition>
    );
  }

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

  return (
    <PageTransition>
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
                <Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString()}
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
                <p className="font-heading font-semibold text-navy-foreground text-sm">{post.author}</p>
                <p className="text-xs text-navy-foreground/50 font-body">1st Bioresonanceist of Africa©</p>
              </div>
            </div>
            {post.mainImage && (
              <ScrollReveal delay={0.1}>
                <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={urlFor(post.mainImage).width(1200).url()} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>
              </ScrollReveal>
            )}
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-foreground/70 font-body">
              {post.body && <PortableText value={post.body} />}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Share2 size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-body">Share this article</span>
              </div>
              <Link to="/book-appointment" className="btn-accent-brand !py-2.5 !px-6 text-sm">
                Book an Appointment
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="heading-display text-2xl text-foreground mb-8">More Articles</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((rp, i) => (
              <ScrollReveal key={rp._id} delay={i * 0.1}>
                <Link to={`/blog/${rp.slug.current}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-xl border border-border p-6 h-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="text-xs font-body text-deep-blue font-medium">{rp.category}</span>
                    <h3 className="font-heading font-bold text-foreground mt-2 mb-2 leading-snug">{rp.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {new Date(rp.publishedAt).toLocaleDateString()}
                    </p>
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