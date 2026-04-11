import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  return (
    <PageTransition>
      <SEOHead title="Order Confirmed" description="Your order has been confirmed. We'll reach out via WhatsApp or email to confirm delivery details." path="/order-confirmation" />
      <section className="min-h-screen bg-light-blue flex items-center justify-center px-4">
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-12 border border-border text-center max-w-lg">
            <CheckCircle size={64} className="text-gold mx-auto mb-6" />
            <h1 className="heading-display text-3xl text-foreground mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground font-body mb-8">
              Thank you for your order. We'll reach out to confirm delivery details via WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary-brand">Back to Home</Link>
              <a href="https://wa.me/2348033030614" target="_blank" rel="noopener noreferrer" className="btn-accent-brand text-center">
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
