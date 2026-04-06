import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <PageTransition>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="heading-display text-4xl md:text-5xl text-navy-foreground">Your Cart</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-blue">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <ShoppingCart size={64} className="text-muted-foreground mx-auto mb-6" />
            <h2 className="heading-display text-2xl text-foreground mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground font-body mb-8">
              Browse our professional-grade bioresonance equipment.
            </p>
            <Link to="/products" className="btn-primary-brand">
              View Products
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
