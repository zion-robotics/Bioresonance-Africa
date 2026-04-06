import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { ShoppingCart } from "lucide-react";

import metaHunter from "@/assets/meta_hunter.jpeg";
import blackBox from "@/assets/black_box.jpeg";
import energyTrapper from "@/assets/energy_trapper.jpeg";

const products = [
  {
    id: "meta-hunter-4025",
    name: "Original NLS Meta Hunter 4025",
    price: "₦1,800,000",
    priceNum: 1800000,
    image: metaHunter,
    desc: "The premium standalone NLS diagnostic device. Full frequency blast technology. The original toolset of the Bioresonanceists that distinguishes the pros and empowers the Gen-B healers.",
  },
  {
    id: "meta-hunter-bundle",
    name: "Meta Hunter + Remote Black Box Bundle",
    price: "₦800,000",
    priceNum: 800000,
    image: blackBox,
    desc: "Complete diagnostic set including the Meta Hunter device, headphones and Remote Black Box for remote and cross-border bioresonance treatment.",
  },
  {
    id: "energy-trapper",
    name: "Energy Trapper",
    price: "₦25,000",
    priceNum: 25000,
    image: energyTrapper,
    desc: "A frequency concentration product. The exclusive toolset of the 1st Bioresonanceist of Africa©. Compatible with all brands of NLS. Not sold anywhere else.",
  },
];

export default function Products() {
  return (
    <PageTransition>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-body font-medium text-gold uppercase tracking-widest">Equipment</span>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground mt-4">
              Professional-Grade Products
            </h1>
            <p className="text-navy-foreground/60 font-body text-lg mt-6">
              Precision tools for the new generation of healers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.15}>
                <div className="group bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col h-full">
                  <div className="h-72 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3">{p.name}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-bold text-deep-blue">{p.price}</span>
                      <Link
                        to={`/products/${p.id}`}
                        className="btn-accent-brand !py-2.5 !px-5 text-sm inline-flex items-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
