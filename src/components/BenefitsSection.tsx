import { MapPin, Wallet, Shield, ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const benefits = [
  { icon: MapPin, title: "Prime Location", desc: "Close to the city center, within walking distance of restaurants, coffee bars, local markets, and a scenic riverside promenade." },
  { icon: Wallet, title: "Free Parking", desc: "Ground floor apartment with private parking and additional free parking available in the area — hassle-free access." },
  { icon: Shield, title: "Friendly Host", desc: "Dedicated to your comfort — always available for local tips, recommendations, and anything you need during your stay." },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container px-4">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — images */}
        <div className="relative">
          <OptimizedImage
            src="/images/bedroom.webp"
            alt="Apartment bedroom"
            className="rounded-2xl border-2 border-gold/30 w-full h-64 md:h-80 object-cover"
          />
          <OptimizedImage
            src="/images/livingroom.webp"
            alt="Apartment living room"
            className="hidden md:block absolute -bottom-6 right-8 w-48 h-48 rounded-2xl border-2 border-gold/30 object-cover shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-gold text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-md">
            24/7 Support
          </div>
        </div>

        {/* Right — benefits */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight">
            Why Stay
            <br />
            <span className="text-gold">With Us</span>
          </h2>
          <div className="mt-8 space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <b.icon className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://www.booking.com/Share-fb4KaSU"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-2 border-gold text-gold px-6 py-3 rounded-full text-sm font-semibold uppercase hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            Book Now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
