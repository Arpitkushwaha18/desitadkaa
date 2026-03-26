import { useState, useEffect, useRef } from "react";
import peanutMasalaImage from "../assets/images/peanut masala.avif";
import shahiPaneerImage from "../assets/images/Shahi Paneer.avif";
import tandoorImage from "../assets/images/Tandoor.avif";

const images = [
  {
    src: tandoorImage,
    alt: "Tandoor station at Desi Tadka",
  },
  {
    src: shahiPaneerImage,
    alt: "Shahi paneer served at Desi Tadka",
  },
  {
    src: peanutMasalaImage,
    alt: "Peanut masala served at Desi Tadka",
  },
];

export default function Gallery() {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          const delay = window.innerWidth < 768 ? 50 : 100;
          images.forEach((_, index) => {
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
    <section
      ref={sectionRef}
      id="gallery"
      className="section-padding bg-[#F5F1EB] relative deferred-section"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-subtitle">Moments at Desi Tadka</h2>
          <h2 className="section-title">A Look Inside</h2>
          <div className="accent-divider" />
        </div>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-5 sm:-mx-6 md:mx-0 px-5 sm:px-6 md:px-0 pb-2 scrollbar-hide">
          {images.map((image, i) => (
            <div
              key={i}
              className={`min-w-[calc(100vw-40px)] sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[30%] flex-shrink-0 snap-start overflow-hidden rounded-[18px] shadow-[0_18px_38px_rgba(15,15,15,0.08)] md:hover:shadow-[0_24px_48px_rgba(15,15,15,0.12)] border border-black/5 transition-all duration-500 group bg-white ${
                visibleIndices.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="relative overflow-hidden h-56 sm:h-72 md:h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover premium-image md:group-hover:scale-110 md:transition-transform md:duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
