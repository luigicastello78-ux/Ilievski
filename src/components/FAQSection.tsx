import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2 } from "lucide-react";

const faqs = [
  { q: "How many guests can sleep at Ilievski Apartments?", a: "Ilievski Apartments can accommodate this group size:\n• 4 guests" },
  { q: "Does Ilievski Apartments have a terrace?", a: "Yes, there are options at this property that have a terrace. You can find out more about this and the other facilities at Ilievski Apartments on this page." },
  { q: "What are the check-in and check-out times at Ilievski Apartments?", a: "Check-in at Ilievski Apartments is from 13:00, and check-out is until 10:30." },
  { q: "How many bedrooms does Ilievski Apartments have?", a: "Ilievski Apartments has the following number of bedrooms:\n• 1 bedroom" },
  { q: "How much does it cost to stay at Ilievski Apartments?", a: "The prices at Ilievski Apartments may vary depending on your stay (e.g. dates, hotel's policy etc.). To see prices, enter your dates." },
  { q: "What is there to do at Ilievski Apartments?", a: "Ilievski Apartments offers the following activities/services (charges may apply):\n• Walking tours\n• Tour or class about local culture" },
  { q: "How far is Ilievski Apartments from the center of Kumanovo?", a: "Ilievski Apartments is 800 m from the center of Kumanovo." },
  { q: "Is Ilievski Apartments popular with families?", a: "Yes, Ilievski Apartments is popular with guests booking family stays." },
];

const half = Math.ceil(faqs.length / 2);
const col1 = faqs.slice(0, half);
const col2 = faqs.slice(half);

const FAQColumn = ({ items, offset = 0 }: { items: typeof faqs; offset?: number }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {items.map((f, i) => (
      <AccordionItem
        key={i}
        value={`faq-${offset + i}`}
        className="border-2 border-gold/20 rounded-xl px-6 data-[state=open]:border-gold/40"
      >
        <AccordionTrigger className="text-left font-serif font-bold hover:no-underline text-sm md:text-base">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground whitespace-pre-line">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container max-w-6xl">
      <div className="flex justify-center mb-6">
        <Building2 className="text-gold" size={32} />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold uppercase text-center leading-tight mb-12">
        Frequently Asked <span className="text-gold">Questions</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FAQColumn items={col1} offset={0} />
        <FAQColumn items={col2} offset={half} />
      </div>
    </div>
  </section>
);

export default FAQSection;
