import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20book%20a%20spa%20session`;

export function AppLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/therapists", label: "Therapists" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 7-color luxury subtle top border */}
      <div className="h-1.5 w-full bg-seven-color-mix z-50 fixed top-0" />
      
      <header
        className={`fixed top-1.5 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-primary group-hover:text-pink-400 transition-colors" />
            <span className="font-serif text-2xl font-bold text-foreground tracking-tight">
              Rosy Relax <span className="text-primary italic font-medium">Spa</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-seven-color-mix text-white font-semibold text-sm shadow-lg shadow-pink-500/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 20 }}
            className="fixed inset-0 z-50 bg-white md:hidden flex flex-col"
          >
            <div className="p-5 flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-8 h-8 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif ${
                    location === link.href ? "text-primary font-bold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-4 rounded-full bg-seven-color-mix text-white font-serif text-xl shadow-lg hover:opacity-90 transition-opacity"
              >
                Book Your Session
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 mt-20">
        {children}
      </main>

      {/* Sticky WhatsApp CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition-transform duration-300 group flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        <MessageCircle className="w-8 h-8 relative z-10" />
      </a>

      <footer className="bg-white border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-serif text-xl font-bold">Rosy Relax Spa</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Premium Spa & Massage Services in Delhi & Gurgaon. Experience the ultimate relaxation, refresh your mind, and rejuvenate your body.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                <li><Link href="/therapists" className="hover:text-primary transition-colors">Therapists & Models</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Delhi & Gurgaon</li>
                <li>Open 24/7 for appointments</li>
                <li>Phone/WhatsApp: +91 999 999 9999</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rosy Relax Spa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
