import { Star, User } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const testimonials = [
  { name: "Radek", country: "Czech Republic", flag: "🇨🇿", date: "January 2026", rating: 10, text: "The apartment is in a new building, fully equipped and newly furnished, as well as spotlessly clean. The owner and his son gave us a warm welcome and made sure we felt comfortable there. There is a parking spot belonging to the apartment. It is in a calm location, but walking distance to the center, restaurants and shops. Definitely recommended!" },
  { name: "Panevska", country: "North Macedonia", flag: "🇲🇰", date: "January 2026", rating: 10, text: "Многу љубезни домаќини. Се чувствувате како дома." },
  { name: "Vladimir", country: "North Macedonia", flag: "🇲🇰", date: "December 2025", rating: 10, text: "A pleasant and great stay. The host was excellent, the apartment was very clean, and everything was in perfect shape." },
  { name: "Nikola", country: "Serbia", flag: "🇷🇸", date: "October 2025", rating: 10, text: "On our trip from Greece to Belgrade, my wife and I decided to stay overnight in Kumanovo with our baby. The apartment itself is beautiful — everything was spotlessly clean, very spacious, and the kitchen and bathroom had everything we needed. The interior is stylish and well thought out. We were really more than satisfied, and we will definitely come back again and recommend it to anyone staying in Kumanovo." },
  { name: "Vitaliy", country: "Ukraine", flag: "🇺🇦", date: "October 2025", rating: 10, text: "We were passing through Macedonia in transit, but decided to stay for a day and rest. And we didn't regret it! The accommodation is very good. The apartment is full-size and spacious with all amenities and everything you need + balcony. Clean and comfortable. And the host Dragan is a very hospitable and positive person. Highly recommended!" },
  { name: "Eleonora", country: "Bulgaria", flag: "🇧🇬", date: "October 2025", rating: 10, text: "Много хубав апартамент. Много чисто и уютно място. Препоръчвам." },
  { name: "Evangelos", country: "Greece", flag: "🇬🇷", date: "October 2025", rating: 10, text: "Very cozy apartment, feels like home. Every detail for a very comfortable stay was there. The host was amazing, very hospitable and very helpful. One of the best places and best hosts I've ever seen." },
  { name: "Емилија", country: "North Macedonia", flag: "🇲🇰", date: "September 2025", rating: 10, text: "Everything was perfect. You feel like home and better." },
  { name: "Sasha", country: "Serbia", flag: "🇷🇸", date: "September 2025", rating: 10, text: "Everything was perfect!" },
  { name: "Ovidiu", country: "Romania", flag: "🇷🇴", date: "September 2025", rating: 10, text: "Friendly host, prior communication with host, great location, delicious pizza nearby, apartment size, parking spot right under the window. It was an excellent choice for us for a 1-night stay." },
  { name: "Alexandra", country: "Romania", flag: "🇷🇴", date: "September 2025", rating: 10, text: "The apartment is big and clean, you have everything you need there. The host is very friendly and helpful." },
  { name: "Paula", country: "United Kingdom", flag: "🇬🇧", date: "September 2025", rating: 10, text: "The family that own these apartments were friendly and helpful." },
  { name: "Jarosław", country: "Poland", flag: "🇵🇱", date: "September 2025", rating: 10, text: "We were looking for accommodation on our way from the far south of Greece to Poland near the motorway. The hosts were very helpful, friendly, flexible and helpful. The apartment is very clean and well equipped. Great WIFI. No problems with staying with a dog. We recommend this place and wonderful owners." },
  { name: "Erdélyi", country: "Hungary", flag: "🇭🇺", date: "July 2025", rating: 10, text: "Very nice english speaking host. Quiet but good location, comfortable room sizes. Private parking place was very useful." },
];

const MAX_TEXT_LENGTH = 150;

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.text.length > MAX_TEXT_LENGTH;
  const displayText = !isLong || expanded ? t.text : t.text.slice(0, MAX_TEXT_LENGTH) + "...";

  return (
    <div className="rounded-2xl border-2 border-gold/20 p-6 hover:border-gold/40 transition-colors h-full flex flex-col">
      {/* Rating */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className={i < Math.round(t.rating / 2) ? "fill-gold text-gold" : "text-input"} />
          ))}
        </div>
        <span className="bg-gold text-background font-bold text-xs px-2 py-1 rounded-md">{t.rating}</span>
      </div>

      {/* Message */}
      <p className="text-sm text-muted-foreground italic mb-5 leading-relaxed flex-1">
        "{displayText}"
        {isLong && (
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
            className="text-gold ml-1 not-italic font-medium hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      {/* Guest info */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
          <User size={18} className="text-gold" />
        </div>
        <div>
          <p className="font-serif font-bold text-gold text-sm">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.country} · {t.date}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center leading-tight mb-4">
        What Our <span className="text-gold">Guests</span> Say
      </h2>
      <p className="text-center text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-12">
        Real feedback from guests who stayed in our apartments.
      </p>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((t) => (
            <CarouselItem key={t.name + t.date} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <TestimonialCard t={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-5 border-gold/30 text-gold hover:bg-gold/10" />
        <CarouselNext className="hidden md:flex -right-5 border-gold/30 text-gold hover:bg-gold/10" />
      </Carousel>
    </div>
  </section>
);

export default TestimonialsSection;
