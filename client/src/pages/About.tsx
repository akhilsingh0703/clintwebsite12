import { AppLayout } from "../components/layout/AppLayout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <AppLayout>
      <section className="pt-20 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            About <span className="text-seven-color">Rosy Relax Spa</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            A premier destination for relaxation and rejuvenation across Delhi and Gurgaon. We bring luxury wellness experiences directly to you.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              {/* about page aesthetic spa setting */}
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&h=800&fit=crop"
                alt="Spa Interior"
                className="rounded-3xl shadow-luxury w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
              <p>
                Founded on the belief that physical touch and ambient therapy are essential to human well-being, Rosy Relax Spa was created to offer an oasis of calm in the bustling NCR region.
              </p>
              <p>
                We carefully vet and train our therapists not just in the art of massage, but in the art of hospitality. Our model therapists are beautiful, friendly, and exceptionally skilled at melting away your stress.
              </p>
              <p>
                Whether you need a quick 1-hour escape from your daily routine, or a full-night therapeutic retreat, our personalized services are designed to cater to your specific desires and aches.
              </p>
              <div className="pt-6 border-t border-border">
                <p className="font-serif italic text-xl text-primary text-center">
                  "Your peace of mind is our highest priority."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
