import { Utensils, Dumbbell, Waves, Trophy, Coffee, ShoppingBag, Store } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const tags = [
  { icon: Utensils, label: "Restaurants" },
  { icon: Coffee, label: "Cafes" },
  { icon: Trophy, label: "Sport Fields" },
  { icon: Dumbbell, label: "Gyms" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: ShoppingBag, label: "Shopping Mall" },
  { icon: Store, label: "Super Markets" },
];

const AmenitiesSection = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center leading-tight mb-12">
        What's <span className="text-gold">Nearby</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
            Our apartments are surrounded by everything you need — great restaurants, fitness centers, and leisure spots are all within walking distance.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-full text-sm font-semibold"
              >
                <t.icon size={16} />
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — 2×2 grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <OptimizedImage src="/images/nearby-mall.webp" alt="Shopping mall nearby" className="rounded-2xl border-2 border-gold/30 w-full h-32 sm:h-40 object-cover" />
          <OptimizedImage src="/images/nearby-gym.webp" alt="Gym nearby" className="rounded-2xl border-2 border-gold/30 w-full h-32 sm:h-40 object-cover" />
          <OptimizedImage src="/images/nearby-sports.webp" alt="Sport fields nearby" className="rounded-2xl border-2 border-gold/30 w-full h-32 sm:h-40 object-cover" />
          <OptimizedImage src="/images/nearby-pool.webp" alt="Swimming pool nearby" className="rounded-2xl border-2 border-gold/30 w-full h-32 sm:h-40 object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
