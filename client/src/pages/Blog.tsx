import { AppLayout } from "../components/layout/AppLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Sparkles } from "lucide-react";

export default function Blog() {
  return (
    <AppLayout>
      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground">
              Best SPA Center In All Over NCR
            </h1>
            <div className="w-24 h-1 bg-seven-color-mix mx-auto rounded-full mb-8" />
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <span className="font-semibold text-primary">By Rosy Relax Spa</span>
              <span>•</span>
              <span>Wellness & Relaxation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-pink max-w-none text-gray-700 space-y-8"
          >
            <p className="text-xl leading-relaxed font-medium">
              Are you searching for the <strong>Best SPA Center In All Over NCR</strong>? Look no further! The hustle and bustle of Delhi NCR can leave you feeling drained, stressed, and physically exhausted. Finding the right place to unwind is essential for your mental and physical well-being.
            </p>

            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=600&fit=crop"
              alt="Luxury Spa Massage Room NCR"
              className="w-full rounded-3xl shadow-xl object-cover h-[400px]"
            />

            <h2 className="text-3xl font-serif font-bold text-black mt-12 mb-6">
              Why We Are the Best Spa Center in NCR
            </h2>
            <p className="leading-relaxed">
              When it comes to authentic relaxation, our spa center stands out as the ultimate destination. From authentic Russian Banya treatments to deeply relaxing Swedish and deep tissue massages, we offer therapies tailored to your specific needs. Our commitment to quality, hygiene, and client satisfaction makes us the premier choice for wellness in the region.
            </p>

            <div className="bg-secondary/50 p-8 rounded-3xl border border-pink-100 my-10 shadow-sm">
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <Sparkles className="text-primary w-6 h-6" /> What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Expert Therapists:</strong> Our certified professionals bring years of experience and international training to ensure the highest standard of service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Luxury Ambiance:</strong> Immerse yourself in a tranquil environment designed with aesthetic perfection, calming aromas, and soothing music.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Premium Hygiene Standards:</strong> Your safety is our priority. We maintain hospital-grade sanitation protocols with fresh linens for every session.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Complete Privacy:</strong> Enjoy your therapies in completely private, beautifully appointed treatment rooms.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-black mt-12 mb-6">
              Our Signature Services
            </h2>
            <p className="leading-relaxed">
              As the leading spa in Delhi NCR, we offer a diverse menu of services designed to rejuvenate your body and mind:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 font-medium">
                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" /> Authentic Russian Massage
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 font-medium">
                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" /> Deep Tissue Therapy
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 font-medium">
                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" /> Aromatherapy Sessions
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 font-medium">
                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" /> Traditional Thai Massage
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-black mt-12 mb-6">
              Experience the Ultimate Relaxation Today
            </h2>
            <p className="leading-relaxed">
              Don't let the stress of daily life weigh you down. Treat yourself to the luxury you deserve. If you're searching for the <strong>Best SPA Center In All Over NCR</strong>, including locations near Mahipalpur, Aerocity, Vasant Kunj, and Dhaula Kuan, we are here to provide an unforgettable wellness journey.
            </p>
            
            <div className="mt-12 text-center">
              <a 
                href="https://wa.me/917808800124?text=Hello%20I%20want%20to%20book%20a%20spa%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-seven-color-mix text-white font-serif text-xl shadow-lg shadow-pink-500/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Book Your Premium Session
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}
