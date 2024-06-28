import Badges from "@/components/Badge";
import Button from "@/components/Button";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

import testimonial1 from "@/images/maps.png";
import testimonial2 from "@/images/index.jpg";
import testimonial3 from "@/images/konakt.jpg";

// TestimonialsSection component

const testimonials: TestimonialCardProps[] = [
  {
    image: testimonial1,
    title: "Odaberi destinaciju",
    body: "Svoju destinaciju možeš upisati ručno ili ju pak potražiti među ponuđenim lokacijama.",
    badge: <Badges.design />,
    link: "https://www.promet-split.hr/vozni-red/sve-linije", // Add link for the first card
  },
  {
    image: testimonial2,
    title: "Kamo za vikend?",
    body: "Niste sigurni što želite posjetiti? Na pravom ste mjestu!",
    badge: <Badges.design />,
    link: "/usluge", // Add link for the second card
  },
  {
    image: testimonial3,
    title: "Kontaktiraj nas",
    body: "Imate pitanje? Obratite nam se za više informacija \u{1F60A} ",
    
    badge: <Badges.design />,
    link: "/Kontaktiraj nas", // Add link for the third card
  },
];

const TestimonialsSection = () => (
  <section className="flex flex-col lg:flex-row overflow-x-auto p-4 gap-40">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </section>
);

export default TestimonialsSection;
