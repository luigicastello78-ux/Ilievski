import { Building2 } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container px-4">
      <div className="flex justify-center mb-12">
        <Building2 className="text-gold" size={32} />
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight">
            Your Perfect Stay
            <br />
            <span className="text-gold">Awaits</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-sm md:text-base">
            Located on the ground floor with private parking, our apartments offer both comfort and convenience. Close to the city center and within walking distance of the public pool, tennis courts, sports hall, and a scenic riverside promenade — perfect for short and long-term stays.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-gold-light rounded-xl p-6 border border-gold/20">
              <h3 className="font-serif text-lg font-bold mb-2">Our Promise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A clean, fully equipped apartment ready from the moment you arrive. Private parking, free area parking, and everything you need for a smooth stay.
              </p>
            </div>
            <div className="bg-gold-light rounded-xl p-6 border border-gold/20">
              <h3 className="font-serif text-lg font-bold mb-2">Your Host</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Friendly and responsive, always available to assist with local tips, recommendations, or anything you need during your visit.
              </p>
            </div>
          </div>
        </div>

        {/* Right — image collage */}
        <div className="relative grid grid-cols-2 gap-4">
          <OptimizedImage
            src="/images/towels.webp"
            alt="Premium towels and linens"
            className="rounded-2xl border-2 border-gold/30 w-full h-52 md:h-64 object-cover"
          />
          <OptimizedImage
            src="/images/branding.webp"
            alt="Ilievski Apartments branding"
            className="rounded-2xl border-2 border-gold/30 w-full h-52 md:h-64 object-cover mt-6 md:mt-8"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-md">
            ✦ Two apartments · Premium comfort
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
