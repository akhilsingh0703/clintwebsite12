import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Heart,
  Sparkles,
  CheckCircle2,
  Users,
  Star,
  Award,
  Clock,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

import { AppLayout } from "../components/layout/AppLayout";
import { useModels } from "../hooks/use-spa";

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
  { type: "video", src: slide5 },
];

const WHATSAPP_LINK =
  "https://wa.me/917808800124?text=Hello%20I%20want%20to%20book%20a%20spa%20session";

export default function Home() {
  const { data: models } = useModels();

  const [filter, setFilter] = useState<"Indian" | "Russian">("Indian");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const displayModels =
    models?.filter((m) => m.nationality === filter) || [];

  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence mode="wait">
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
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.img
              key={`image-${currentSlide}`}
              src={slides[currentSlide].src}
              alt="Spa Slide"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6">
              Delhi & Gurgaon’s Finest Luxury Spa
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Relax & Refresh
              <br />
              <span className="text-yellow-300">Rejuvenate</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Experience premium spa therapies, full body massages,
              Russian spa sessions, and luxury wellness treatments in
              Aerocity, Mahipalpur, Gurgaon, and Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="/models"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Meet Our Models
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODELS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Top Models
            </h2>

            <p className="text-gray-500 text-lg">
              Meet our premium wellness professionals.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setFilter("Indian")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === "Indian"
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                }`}
              >
                Indian Models
              </button>

              <button
                onClick={() => setFilter("Russian")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === "Russian"
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                }`}
              >
                Russian Models
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayModels.map((model, idx) => {
              const waText = `Hi, I want to book a session with ${model.name}`;
              const waLink = `https://wa.me/917808800124?text=${encodeURIComponent(
                waText
              )}`;

              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={model.imageUrl}
                      alt={model.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">
                        {model.name}
                      </h3>

                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                        Premium
                      </span>
                    </div>

                    <div className="space-y-2 text-gray-600 text-sm mb-5">
                      <p className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Age {model.age} • {model.specialty}
                      </p>

                      <p className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {model.rating}/5 Rating
                      </p>
                    </div>

                    <p className="text-gray-500 italic mb-6">
                      "{model.description}"
                    </p>

                    <div className="flex justify-between items-center border-y py-4 mb-6">
                      <div>
                        <span className="block text-xs text-gray-400">
                          1 Hour
                        </span>
                        <strong>
                          ₹{model.price1h?.toLocaleString()}
                        </strong>
                      </div>

                      <div>
                        <span className="block text-xs text-gray-400">
                          Full Night
                        </span>
                        <strong>
                          ₹{model.priceNight?.toLocaleString()}
                        </strong>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="tel:+917808800124"
                        className="flex items-center justify-center gap-2 py-3 rounded-xl border font-semibold hover:border-primary hover:text-primary transition"
                      >
                        <PhoneCall className="w-4 h-4" />
                        Call
                      </a>

                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Us
            </h2>

            <p className="text-lg text-gray-500">
              Luxury wellness with premium hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Natural Oils",
                desc: "100% premium essential oils for deep relaxation.",
              },
              {
                icon: Heart,
                title: "Expert Therapists",
                desc: "Experienced professionals with premium service.",
              },
              {
                icon: Sparkles,
                title: "Luxury Ambience",
                desc: "Private luxury rooms with peaceful interiors.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Delhi NCR’s Most Trusted Spa Center
            </h2>

            <p className="text-blue-200 text-lg">
              Premium Russian Spa & Wellness Services in Aerocity,
              Mahipalpur, Gurgaon & Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                stat: "10,000+",
                title: "Happy Clients",
              },
              {
                icon: Star,
                stat: "4.9/5",
                title: "Top Rated",
              },
              {
                icon: Award,
                stat: "15+",
                title: "Certified Experts",
              },
              {
                icon: Clock,
                stat: "24/7",
                title: "Always Open",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-900/50 p-8 rounded-3xl text-center border border-blue-800"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-blue-200" />

                <div className="text-4xl font-bold mb-2">
                  {item.stat}
                </div>

                <div className="text-blue-100">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO SECTION */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-gray-700">

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-black">
              Best Spa Center in NCR – Luxury Spa in Aerocity,
              Mahipalpur, Gurgaon & Delhi
            </h2>

            <p className="mb-6 leading-relaxed">
              Welcome to the most trusted and luxurious spa center in
              NCR, offering premium wellness and relaxation services
              across Aerocity, Mahipalpur, Gurgaon, and Delhi.
            </p>

            <p className="mb-6 leading-relaxed">
              Our luxury spa center in Aerocity is perfect for
              travelers, professionals, couples, and wellness lovers.
              Located near IGI Airport and major hotels, we provide
              premium massage therapies and spa services with expert
              therapists and hygienic luxury rooms.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-black">
              Our Services
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6 mb-8">
              <li>Russian Spa Therapy</li>
              <li>Swedish Massage</li>
              <li>Thai Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Couple Spa Services</li>
              <li>Luxury Wellness Packages</li>
              <li>Body Relaxation Therapy</li>
              <li>Premium Spa in Delhi NCR</li>
            </ul>

            <p className="leading-relaxed text-lg">
              Book your appointment today and enjoy the finest luxury
              spa experience in Aerocity, Mahipalpur, Gurgaon, and
              Delhi NCR.
            </p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
