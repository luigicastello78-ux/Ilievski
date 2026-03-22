import OptimizedImage from "@/components/OptimizedImage";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80">
      <OptimizedImage
        src="/images/building-hero.jpg"
        alt="Ilievski Apartments building exterior"
        className="w-full h-full object-cover mix-blend-overlay"
        eager
        fetchPriority="high"
      />
    </div>

    <div className="container relative z-10 text-center py-20 px-4">
      <p className="text-gold text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
        Premium Experience
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-[1.1]">
        Luxury Apartments
        <br />
        For <span className="text-gold">Rent</span>
      </h1>
      <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        Two beautifully furnished apartments available for short and long-term stays — comfort, style, and convenience in one place.
      </p>
      <a
        href="https://www.booking.com/Share-fb4KaSU"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors"
      >
        Book Your Stay
      </a>
    </div>
  </section>
);

export default HeroSection;
