import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, ShoppingCart, Shield, Zap, Globe } from "lucide-react";

import metaHunter from "@/assets/meta_hunter.jpeg";
import blackBox from "@/assets/black_box.jpeg";
import energyTrapper from "@/assets/energy_trapper.jpeg";

const productData: Record<string, { name: string; price: string; image: string; ogImage: string; desc: string; features: string[] }> = {
  "meta-hunter-4025": {
    name: "Original NLS Meta Hunter 4025",
    price: "₦1,800,000",
    image: metaHunter,
    ogImage: "https://www.1stbioresonanceistofafrica.com/og-product-meta-hunter.jpg",
    desc: "The premium standalone NLS diagnostic device. Full frequency blast technology. The original toolset of the Bioresonanceists that distinguishes the pros and empowers the Gen-B healers.",
    features: ["Full frequency blast technology", "Professional-grade NLS diagnostics", "Comprehensive body scanning", "Precision frequency delivery"],
  },
  "dual-combo": {
    name: "Dual Combo Package",
    price: "₦2,400,000",
    image: metaHunter,
    ogImage: "https://www.1stbioresonanceistofafrica.com/og-product-meta-hunter.jpg",
    desc: "The ultimate professional package combo. Complete solution for local and remote bioresonance diagnostics and treatment.",
    features: [
      "Includes Original NLS Meta Hunter 4025",
      "Complete local and remote diagnostic solution",
      "Cross-border treatment capability",
    ],
  },
  "meta-hunter-bundle": {
    name: "Remote Black Box",
    price: "₦800,000",
    image: blackBox,
    ogImage: "https://www.1stbioresonanceistofafrica.com/og-product-black-box.jpg",
    desc: "A transformative device for all brands of NLS. Transforming a localised NLS device and medical services into a remote diagnostic scanner for trans-border treatment.",
    features: ["Remote Black Box for distance healing", "Cross-border treatment capability", "Professional headphones included"],
  },
  "energy-trapper": {
    name: "Energy Trapper",
    price: "₦25,000",
    image: energyTrapper,
    ogImage: "https://www.1stbioresonanceistofafrica.com/og-product-energy-trapper.jpg",
    desc: "A frequency concentration product. The exclusive toolset of the 1st Bioresonanceist of Africa©. Compatible with all brands of NLS. Not sold anywhere else.",
    features: ["Frequency concentration technology", "Compatible with all NLS brands", "Exclusive to the 1st Bioresonanceist of Africa©", "Portable and easy to use"],
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id] : null;

  if (!product) {
    return (
      <PageTransition>
        <SEOHead title="Product Not Found" description="The product you're looking for doesn't exist." path={`/products/${id}`} />
        <div className="min-h-screen flex items-center justify-center bg-card">
          <div className="text-center">
            <h1 className="heading-display text-3xl text-foreground mb-4">Product Not Found</h1>
            <Link to="/products" className="btn-primary-brand">Back to Products</Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEOHead 
        title={product.name} 
        description={product.desc} 
        path={`/products/${id}`}
        image={product.ogImage}
      />
      <section className="bg-navy pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-navy-foreground/60 hover:text-gold transition-colors font-body text-sm">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>
      </section>

      <section className="bg-navy pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h1 className="heading-display text-3xl md:text-4xl text-navy-foreground mb-4">{product.name}</h1>
                <p className="text-3xl font-heading font-bold text-gold mb-6">{product.price}</p>
                <p className="text-navy-foreground/60 font-body leading-relaxed mb-8">{product.desc}</p>

                <div className="space-y-3 mb-8">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-navy-foreground/70 font-body text-sm">
                      <Zap size={14} className="text-gold flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <button className="btn-accent-brand w-full text-center text-lg flex items-center justify-center gap-3">
                  <ShoppingCart size={20} />
                  
                    href={`https://wa.me/2348033030614?text=Hi%2C%20I%27m%20interested%20in%20ordering%20the%20${encodeURIComponent(product.name)}%20for%20${encodeURIComponent(product.price)}.%20Please%20confirm%20availability.`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-accent-brand w-full text-center text-lg flex items-center justify-center gap-3"
>
  <ShoppingCart size={20} />
  Order Now — {product.price}
</a>
                </button>

                <div className="mt-6 flex items-center justify-center gap-6">
                  {[
                    { icon: Shield, text: "Secure Payment" },
                    { icon: Globe, text: "Nationwide Delivery" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text} className="flex items-center gap-2 text-xs text-navy-foreground/40 font-body">
                      <Icon size={14} className="text-gold" />
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
