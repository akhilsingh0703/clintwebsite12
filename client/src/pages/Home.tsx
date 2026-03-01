import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { AppLayout } from "../components/layout/AppLayout";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hello%20I%20want%20to%20book%20a%20spa%20session";

export default function Home() {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* landing page hero spa candle setup */}
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop"
          alt="Premium Spa Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/60 md:to-transparent" />
        
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
    </AppLayout>
  );
}
