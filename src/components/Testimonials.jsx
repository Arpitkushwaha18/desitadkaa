import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "Authentic North Indian food! Best tandoori dishes.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "Fast delivery, hot & delicious food. Highly recommended!",
  },
  {
    id: 3,
    name: "Anil Patel",
    location: "Kalyanpur, Kanpur UP",
    rating: 4,
    text: "Excellent quality and authentic recipes!",
  },
  {
    id: 4,
    name: "Neha Singh",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "30 mins delivery, perfectly packaged!",
  },
  {
    id: 5,
    name: "Ravi Verma",
    location: "Kalyanpur, Kanpur UP",
    rating:4,
    text: "Paneer butter masala is incredible!",
  },
  {
    id: 6,
    name: "Anjali Yadav",
    location: "Kalyanpur, Kanpur UP",
    rating: 4,
    text: "Fresh breads & perfectly spiced gravies!",
  },
];

export default function Testimonials() {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          const delay = window.innerWidth < 768 ? 30 : 100;
          testimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndices((prev) => new Set([...prev, index]));
            }, index * delay);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#FCFAF6] deferred-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="section-subtitle">What People Say</h2>
          <h2 className="section-title">Real Reviews</h2>
          <div className="accent-divider" />
        </div>

        <div className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 sm:-mx-6 md:mx-0 px-5 sm:px-6 md:px-0 pb-2 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`min-w-[calc(100vw-40px)] sm:min-w-[280px] md:min-w-[340px] lg:min-w-[360px] flex-shrink-0 snap-start bg-white rounded-[20px] p-4 sm:p-6 shadow-[0_18px_38px_rgba(15,15,15,0.08)] border border-black/5 h-max hover:shadow-[0_24px_48px_rgba(15,15,15,0.12)] hover:border-saffronGold/20 transition-all duration-500 ${
                visibleIndices.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-saffronGold text-base sm:text-lg">
                    {"\u2605"}
                  </span>
                ))}
              </div>

              <p className="text-luxeGray text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed line-clamp-3 min-h-[60px] font-light">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <div className="h-12 w-12 rounded-full bg-[#F8F2EA] text-saffronGold flex-shrink-0 flex items-center justify-center font-playfair font-semibold text-lg">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-playfair font-semibold text-deepMaroon text-xs sm:text-sm truncate tracking-[0.04em]">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-luxeGray truncate font-light">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
