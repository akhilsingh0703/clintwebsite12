import { AppLayout } from "../components/layout/AppLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <AppLayout>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get in Touch</h1>
            <div className="w-24 h-1 bg-seven-color-mix mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground">
              Ready to book your luxurious escape? Contact us directly to schedule your appointment in Delhi or Gurgaon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="flex gap-6 items-start p-6 bg-secondary/50 rounded-3xl border border-white shadow-sm">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Phone & WhatsApp</h3>
                  <p className="text-muted-foreground mb-3">Available 24/7 for direct bookings and inquiries.</p>
                  <a href="tel:+919999999999" className="text-lg font-semibold hover:text-primary transition-colors block">
                    +91 999 999 9999
                  </a>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-green-600 hover:text-green-700 transition-colors inline-block mt-1">
                    Message on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-secondary/50 rounded-3xl border border-white shadow-sm">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Locations</h3>
                  <p className="text-muted-foreground mb-3">Premium rooms available in prime areas.</p>
                  <p className="font-semibold">Delhi Center</p>
                  <p className="text-sm text-muted-foreground mb-2">Connaught Place, New Delhi</p>
                  <p className="font-semibold">Gurgaon Center</p>
                  <p className="text-sm text-muted-foreground">Cyber Hub Area, Gurugram</p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-secondary/50 rounded-3xl border border-white shadow-sm">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Working Hours</h3>
                  <p className="font-semibold">24 Hours / 7 Days a week</p>
                  <p className="text-muted-foreground text-sm mt-1">We operate round the clock to fit your schedule.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form UI */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-luxury border border-border">
              <h3 className="text-2xl font-serif font-bold mb-8">Our Location</h3>
              <div className="rounded-3xl overflow-hidden h-[300px] border border-border mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.123456789!2d77.1245!3d28.5375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19457fb73955%3A0x6b2b5a1999999999!2sMahipalpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a 
                href="https://maps.app.goo.gl/4uX5v7t8XJrjGtNS8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline block text-center mb-8"
              >
                View on Google Maps
              </a>
              <h3 className="text-2xl font-serif font-bold mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground/80">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-secondary/50 border-2 border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground/80">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91..."
                    className="w-full px-5 py-4 rounded-xl bg-secondary/50 border-2 border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground/80">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="I am interested in..."
                    className="w-full px-5 py-4 rounded-xl bg-secondary/50 border-2 border-transparent focus:border-primary/50 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={() => window.open('https://wa.me/919999999999', '_blank')}
                  className="w-full py-4 rounded-xl bg-seven-color-mix text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Send via WhatsApp
                </button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  For immediate response, clicking send will redirect you to WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
