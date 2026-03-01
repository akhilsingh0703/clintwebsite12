import { AppLayout } from "../components/layout/AppLayout";
import { useServices } from "../hooks/use-spa";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const { data: services, isLoading, error } = useServices();

  // Static fallback if API fails or is empty, to guarantee stunning UI
  const displayServices = services?.length ? services : [
    { id: 1, name: "Full Body Swedish Massage", description: "Long, flowing strokes designed to relax the entire body, improve circulation and ease muscle tension." },
    { id: 2, name: "Deep Tissue Therapy", description: "Firm pressure applied to deeper layers of muscle to release chronic knots and stiffness." },
    { id: 3, name: "Aroma Luxury Spa", description: "Infused essential oils combined with a gentle touch to transport you to a state of complete bliss." },
    { id: 4, name: "Sensual Model Therapy", description: "A highly personalized, aesthetic session with our premium model therapists for ultimate relaxation." }
  ];

  return (
    <AppLayout>
      <section className="pt-20 pb-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Premium Services</h1>
          <div className="w-24 h-1 bg-seven-color-mix mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground">
            Explore our range of curated therapies designed to restore balance to your body and mind.
          </p>
        </div>
      </section>

      <section className="py-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 text-primary">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <p className="font-medium animate-pulse">Loading luxurious services...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16 bg-red-50 rounded-3xl border border-red-100">
              <p className="text-red-500 font-semibold mb-2">Unable to load services at the moment.</p>
              <p className="text-muted-foreground text-sm">Please try refreshing the page.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayServices.map((service, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={service.id}
                  className="bg-white p-8 rounded-3xl shadow-luxury border border-border hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  <Link 
                    href="/therapists"
                    className="inline-flex items-center text-primary font-semibold group/link"
                  >
                    View Therapists
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
}
