import { ArrowRight, Building2 } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const apartments = [
  {
    name: "Ilievski Apartment 4",
    desc: "Spacious 58 m² ground-floor apartment with a sun terrace, balcony, and free WiFi. Features one bedroom, a spacious living room, air-conditioning, kitchenette, washing machine, and free private parking. Enjoy daily housekeeping, room service, and a pet-friendly atmosphere.",
    tag: "Available",
    bookingUrl: "https://www.booking.com/Share-b9UqBDY",
    images: [
      "/images/apt2-lounge.webp",
      "/images/apt2-livingroom.webp",
      "/images/apt2-living2.webp",
      "/images/apt2-bedroom.webp",
      "/images/apt2-kitchen.webp",
      "/images/apt2-kitchen2.webp",
      "/images/apt2-bathroom.webp",
      "/images/apt2-balcony.webp",
      "/images/apt2-decor.webp",
      "/images/apt2-exterior.webp",
    ],
  },
  {
    name: "Ilievski Apartment 8",
    desc: "Cozy 38 m² apartment with a terrace, balcony with city views, and free WiFi. Features air-conditioning, a kitchenette, washing machine, private bathroom, and free on-site parking. Pet friendly and perfect for families or couples.",
    tag: "Available",
    bookingUrl: "https://www.booking.com/Share-rxreHE",
    images: [
      "/images/apt4-livingroom.webp",
      "/images/apt4-living2.webp",
      "/images/apt4-bedroom.webp",
      "/images/apt4-kitchen.webp",
      "/images/apt4-kitchen2.webp",
      "/images/apt4-hallway.webp",
      "/images/apt4-entrance.webp",
      "/images/apt4-balcony.webp",
      "/images/apt4-branding.webp",
      "/images/apt4-tea.webp",
    ],
  },
];

const ApartmentsSection = () => (
  <section id="property" className="py-20 md:py-28">
    <div className="container px-4">
      <div className="flex justify-center mb-6">
        <Building2 className="text-gold" size={32} />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center leading-tight">
        Our <span className="text-gold">Apartments</span>
      </h2>
      <p className="text-center text-muted-foreground mt-4 max-w-lg mx-auto text-sm md:text-base">
        Two handpicked apartments available for short and long-term rental.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-12 max-w-4xl mx-auto">
        {apartments.map((a) => (
          <div
            key={a.name}
            className="rounded-2xl border-2 border-gold/20 overflow-hidden hover:border-gold/50 transition-colors group"
          >
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {a.images.map((img, i) => (
                  <CarouselItem key={i}>
                    <OptimizedImage
                      src={img}
                      alt={`${a.name} photo ${i + 1}`}
                      className="w-full h-48 sm:h-52 md:h-56 object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-background/80 border-gold/30 hover:bg-gold hover:text-primary-foreground" />
              <CarouselNext className="right-2 bg-background/80 border-gold/30 hover:bg-gold hover:text-primary-foreground" />
            </Carousel>
            <div className="p-5 md:p-6">
              <span className="inline-block bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold/30 mb-3">
                {a.tag}
              </span>
              <h3 className="font-serif text-xl font-bold text-gold">{a.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.desc}</p>
              <a
                href={a.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
              >
                Inquire Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ApartmentsSection;
