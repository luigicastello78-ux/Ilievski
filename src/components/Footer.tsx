import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12 md:py-16">
    <div className="container px-4">
      <div className="grid sm:grid-cols-3 gap-8 items-center">
        <div>
          <span className="font-serif text-2xl font-bold text-background tracking-widest uppercase block">ILIEVSKI</span>
          <p className="text-xs text-background/40 mt-2">Two apartments · One premium experience</p>
        </div>
        <p className="text-sm text-center text-background/50">
          © {new Date().getFullYear()} Ilievski Rentals. All rights reserved.
        </p>
        <div className="flex gap-4 sm:justify-end">
          <a href="https://www.instagram.com/apartments_ilievski/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="https://www.booking.com/Share-Oou2tyL" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Booking.com">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.732 2v20h7.6v-6.803h.07L14.575 22h6.693l-5.27-7.63C18.645 13.11 20.3 11.085 20.3 7.775 20.3 3.665 17.592 2 13.388 2H2.732zm7.6 4.396h1.86c1.893 0 3.058.756 3.058 2.327 0 1.654-1.06 2.58-3.025 2.58h-1.893V6.396z"/></svg>
          </a>
          <a href="https://www.airbnb.com/rooms/1443744125126388946?check_in=2026-03-03&check_out=2026-03-08&guests=1&adults=1&s=67&unique_share_id=bb8565ad-04ff-4a4d-9c22-156cfb1ec37b" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Airbnb">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.703c-.292.603-.794 1.017-1.399 1.181-.19.052-.386.078-.58.078-.347 0-.685-.086-.994-.254a6.522 6.522 0 01-1.263-.91c-.923-.82-1.8-1.86-2.559-2.982-.025-.037-.05-.074-.074-.112a16.41 16.41 0 01-.647-1.074 8.466 8.466 0 01-.498-1.12c-.218-.622-.322-1.2-.322-1.725 0-.77.208-1.44.613-1.976.37-.49.893-.836 1.505-1.001a2.578 2.578 0 01.675-.089c.547 0 1.073.185 1.52.537.47.37.84.9 1.066 1.528.227-.628.596-1.158 1.067-1.528a2.483 2.483 0 011.52-.537c.228 0 .455.03.674.089.613.165 1.136.511 1.506 1.001.405.537.613 1.206.613 1.976 0 .525-.104 1.103-.322 1.725a8.466 8.466 0 01-.498 1.12c-.2.367-.417.724-.647 1.074l-.074.112c-.76 1.122-1.636 2.162-2.56 2.982a6.522 6.522 0 01-1.262.91c-.309.168-.647.254-.994.254a1.89 1.89 0 01-.58-.078c-.605-.164-1.107-.578-1.399-1.181z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
