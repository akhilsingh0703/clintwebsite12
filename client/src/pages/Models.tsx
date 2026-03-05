import { useModels } from "../hooks/use-spa";
import { AppLayout } from "../components/layout/AppLayout";
import { motion } from "framer-motion";
import { MessageCircle, Star, Clock, Sparkles, Loader2 } from "lucide-react";

export default function Models() {
  const { data: models, isLoading, error } = useModels();

  // Updated display logic to handle empty/loading states with beautiful fallbacks
  const displayModels = models?.length ? models : [
    {
      id: 1,
      name: "Aanya",
      nationality: "Indian",
      experienceYears: 3,
      specialty: "Aroma Therapy",
      description: "Aanya brings a warm, soothing energy to every session. Expert in essential oils.",
      price1h: 3000,
      priceNight: 15000,
      imageUrl: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Elena",
      nationality: "Russian",
      experienceYears: 5,
      specialty: "Deep Tissue & Sensual",
      description: "Professional, stunning, and highly skilled in releasing deep muscular tension.",
      price1h: 5000,
      priceNight: 25000,
      imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Sarah",
      nationality: "Thai",
      experienceYears: 4,
      specialty: "Swedish Massage",
      description: "Gentle strokes and a beautiful presence make Sarah's sessions unforgettable.",
      price1h: 4000,
      priceNight: 20000,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <AppLayout>
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Premium Models</h1>
          <div className="w-24 h-1 bg-seven-color-mix mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground">
            Browse our exclusive selection of highly trained, stunning models available in Delhi & Gurgaon.
          </p>
        </div>
      </section>

      <section className="py-12 bg-secondary/30 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 text-primary">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <p className="font-medium animate-pulse">Loading profiles...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16 bg-red-50 rounded-3xl border border-red-100">
              <p className="text-red-500 font-semibold mb-2">Unable to load models at the moment.</p>
              <p className="text-muted-foreground text-sm">Please try refreshing the page.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayModels.map((model, idx) => {
                const waText = `Hello I want to book a session with ${model.name}`;
                const waLink = `https://wa.me/919999999999?text=${encodeURIComponent(waText)}`;
                
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    key={model.id}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-luxury border border-white hover:border-primary/30 transition-all duration-500 group flex flex-col"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={model.imageUrl} 
                        alt={model.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-foreground">
                          {model.nationality}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-serif font-bold text-foreground">
                          {model.name}
                        </h3>
                        <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full text-xs font-bold">
                          <Star className="w-3 h-3 fill-current mr-1" /> Premium
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" /> {model.specialty}
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" /> {model.experienceYears} Years Experience
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed text-foreground/70 mb-6 italic border-l-2 border-primary/30 pl-3">
                        "{model.description}"
                      </p>

                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">1 Hour Session</span>
                          <span className="font-bold text-foreground">₹{model.price1h?.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Full Night</span>
                          <span className="font-bold text-foreground">₹{model.priceNight?.toLocaleString()}</span>
                        </div>
                        <div className="pt-2 mt-2 border-t border-border/50">
                          <p className="text-xs text-muted-foreground leading-relaxed italic">
                            {model.description}
                          </p>
                        </div>
                      </div>

                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-seven-color-mix text-white font-semibold text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 block"
                      >
                        Book {model.name} Now
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
}
