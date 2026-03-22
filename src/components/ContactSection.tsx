import { useState } from "react";
import { Instagram, Mail, Phone, MapPin, Send, Building2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("lead_submissions").insert({
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      phone: form.phone.trim().slice(0, 30),
      message: form.message.trim().slice(0, 1000),
    });

    // Send email notification
    await supabase.functions.invoke("send-contact-email", {
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      },
    });

    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Message sent successfully!" });
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="flex justify-center mb-6">
          <Building2 className="text-gold" size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center leading-tight mb-12">
          Our Contact <span className="text-gold">Information</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — images + contact details */}
          <div>
            <div className="mb-8 rounded-2xl border-2 border-gold/30 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.9330878945475!2d21.72235037595795!3d42.13031567121513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13544f3053fd93f9%3A0x4113c6665a21ddb4!2sILIEVSKI%20apartments!5e0!3m2!1sen!2smk!4v1772483785327!5m2!1sen!2smk"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ilievski Apartments Location"
              />
            </div>
            <div className="inline-block bg-gold text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-md">
              ✦ Book your stay with us
            </div>
            <div className="space-y-4">
              {[
                { icon: Instagram, label: "Instagram", value: "apartments_ilievski" },
                { icon: Mail, label: "Mail", value: "ilievskiapartments@gmail.com" },
                { icon: Phone, label: "Phone", value: "+389 70 529 322" },
                { icon: MapPin, label: "Address", value: "Igo Trichkovikj 19" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-light flex items-center justify-center shrink-0">
                    <c.icon className="text-gold" size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</span>
                    <p className="text-sm font-semibold text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-2">Inquire About Availability</h3>
            <input
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              required
              className="w-full border-2 border-gold/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-background"
            />
            <input
              type="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              required
              className="w-full border-2 border-gold/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-background"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={30}
              className="w-full border-2 border-gold/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-background"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="w-full border-2 border-gold/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-background resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-primary-foreground font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors disabled:opacity-50"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
