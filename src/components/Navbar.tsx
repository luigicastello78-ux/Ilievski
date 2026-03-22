import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Property", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <span className="font-serif text-2xl font-bold tracking-widest uppercase">ILIEVSKI</span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l.toLowerCase())}
                className="text-sm font-medium tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://www.booking.com/Share-fb4KaSU"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex border-2 border-gold text-gold px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="block w-full text-left py-3 text-sm font-medium uppercase tracking-wide text-foreground/70"
            >
              {l}
            </button>
          ))}
          <a
            href="https://www.booking.com/Share-fb4KaSU"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full text-center border-2 border-gold text-gold px-5 py-2 rounded-full text-sm font-semibold uppercase"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
