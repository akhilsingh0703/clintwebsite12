import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, Heart, Sparkles, CheckCircle2, Users, Star, Award, Clock, ShieldCheck } from "lucide-react";
import { AppLayout } from "../components/layout/AppLayout";
import { useModels } from "../hooks/use-spa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bannerImg from "@assets/Video.mp4";
import slide1 from "@assets/media__1772763417629.jpg";
import slide2 from "@assets/media__1772763417673.jpg";
import slide3 from "@assets/media__1772763417723.jpg";
import slide4 from "@assets/media__1772763417760.jpg";
import slide5 from "@assets/Video.mp4";

const slides = [
  { type: "video", src: bannerImg },
  { type: "image", src: slide1 },
  { type: "image", src: slide2 },
  { type: "image", src: slide3 },
  { type: "image", src: slide4 },
  { type: "video", src: slide5 }
];

const WHATSAPP_LINK = "https://wa.me/917808800124?text=Hello%20I%20want%20to%20book%20a%20spa%20session";

export default function Home() {
  const { data: models } = useModels();
  const [filter, setFilter] = useState<"Indian" | "Russian">("Indian");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500); // 4.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const displayModels = models?.filter(m => m.nationality === filter) || [];
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        {/* banner image automatic slider */}
        <AnimatePresence mode="popLayout">
          {slides[currentSlide].type === "video" ? (
            <motion.video
              key={`video-${currentSlide}`}
              src={slides[currentSlide].src}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.img
              key={`img-${currentSlide}`}
              src={slides[currentSlide].src}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              alt={`Spa Cover ${currentSlide}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/60 md:to-transparent z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-seven-color-mix text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-md">
              Delhi & Gurgaon's Finest
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
              Relax <span className="text-primary italic font-medium">&</span> Refresh<br />
              <span className="text-seven-color">Rejuvenate.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl">
              Escape the city noise. Experience premium, full-body massages and luxury spa therapies tailored specifically for your relaxation and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/models"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Meet Our Models
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Models Carousel Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Top Models</h2>
            <div className="w-24 h-1 bg-seven-color-mix mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg mb-8">
              Meet our elite professionals, offering unparalleled experiences tailored for you.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setFilter("Indian")}
                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === "Indian" ? "bg-primary text-white shadow-lg" : "bg-white text-muted-foreground border-2 border-border"
                  }`}
              >
                Indian Models
              </button>
              <button
                onClick={() => setFilter("Russian")}
                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === "Russian" ? "bg-primary text-white shadow-lg" : "bg-white text-muted-foreground border-2 border-border"
                  }`}
              >
                Russian Models
              </button>
            </div>
          </div>
          <div className="relative px-8">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {displayModels.map((model) => {
                  const waText = `Hi, I saw ${model.name}'s profile on your beautiful site. I want to book a session with her. Age: ${model.age}.`;
                  const waLink = `https://wa.me/917808800124?text=${encodeURIComponent(waText)}`;

                  return (
                    <CarouselItem key={model.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                      <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-white hover:border-primary/30 transition-all duration-300">
                        <div className="h-[400px] w-full relative">
                          <img
                            src={model.imageUrl}
                            alt={model.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-2xl font-serif font-bold">{model.name}, {model.age}</h3>
                          <p className="text-sm text-primary mb-4">{model.specialty}</p>
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 inline-block rounded-xl bg-seven-color-mix text-white font-semibold text-center shadow hover:-translate-y-0.5 transition-transform"
                          >
                            Book {model.name} Now
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Intro/Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">A Sanctuary of Calm</h2>
            <div className="w-24 h-1 bg-seven-color-mix mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">
              At Rosy Relax Spa, we blend ancient therapeutic techniques with modern luxury. Every session is an immersive journey into tranquility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Leaf, title: "Natural Oils", desc: "We use 100% organic, essential oils imported to provide maximum relaxation." },
              { icon: Heart, title: "Expert Care", desc: "Our models and therapists have years of experience in deep tissue and Swedish massage." },
              { icon: Sparkles, title: "Luxury Ambiance", desc: "Private, hygienic, and aesthetically pleasing rooms to elevate your mood instantly." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-secondary/50 p-8 rounded-3xl text-center shadow-luxury border border-white hover:border-pink-200 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-seven-color-mix rounded-3xl transform rotate-3 scale-105 opacity-50 blur-sm" />
            {/* landing page luxury aesthetic stones */}
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=600&fit=crop"
              alt="Luxury Spa Services"
              className="relative z-10 w-full h-auto rounded-3xl shadow-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose Rosy Relax Spa?</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We stand apart in Delhi and Gurgaon by offering an uncompromised standard of hygiene, professionalism, and pure luxury. We believe wellness is a necessity, not just a luxury.
            </p>
            <ul className="space-y-4">
              {[
                "Certified, friendly, and gorgeous therapists",
                "100% privacy and confidentiality guaranteed",
                "Central locations in Delhi & Gurgaon",
                "24/7 availability for your convenience"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-seven-color-mix text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Book Appointment Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-24 bg-[#141412] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#e8c07d]">
              Delhi NCR's Most Trusted Russian Spa Center
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              Over a decade of excellence in authentic Russian Banya treatments and luxury spa services near Delhi Airport, Aerocity, and Mahipalpur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Users, stat: "10,000+", title: "Happy Clients Served", desc: "Across Delhi NCR" },
              { icon: Star, stat: "4.9/5", title: "Average Rating", desc: "From 350+ Reviews" },
              { icon: Award, stat: "15+", title: "Certified Therapists", desc: "International Training" },
              { icon: Clock, stat: "24/7", title: "Always Open", desc: "Book Anytime" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1c1c1a] border border-[#e8c07d]/10 rounded-2xl p-8 text-center hover:border-[#e8c07d]/30 transition-colors">
                <item.icon className="w-10 h-10 text-[#e8c07d] mx-auto mb-4" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#e8c07d] mb-2">{item.stat}</div>
                <div className="font-bold text-white mb-1">{item.title}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#e8c07d]">
              Our Certifications & Quality Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ISO Certified Spa", desc: "International quality standards for hygiene and service excellence" },
              { title: "Certified Therapists", desc: "Russian, Thai, Swedish, and Ayurvedic massage certifications" },
              { title: "Hygiene Excellence", desc: "Hospital-grade sanitation protocols and fresh linens every session" },
              { title: "Privacy Guaranteed", desc: "Individual treatment rooms with complete privacy and discretion" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1c1c1a] border border-[#e8c07d]/10 rounded-2xl p-6 hover:border-[#e8c07d]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#e8c07d] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-[#e8c07d] mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
