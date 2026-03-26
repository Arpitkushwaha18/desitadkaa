import { useEffect, useRef, useState } from "react";

export default function Categories({
  categories = [],
  selected,
  onSelect,
  title = "Browse Categories",
  eyebrow = "Browse",
  sticky = false,
  helperText = "Tap any category to jump straight to that section.",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  if (!categories.length) return null;

  return (
    <section
      ref={sectionRef}
      className={`${sticky ? "sticky top-[76px] sm:top-[82px] z-40" : ""} bg-[#FCFAF6]/96 border-y border-black/5 backdrop-blur-md transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        {title && (
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
            <div>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-saffronGold">
                {eyebrow}
              </p>
              <h2 className="text-lg sm:text-xl font-playfair font-semibold text-deepMaroon tracking-[0.04em]">
                {title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-luxeGray">{helperText}</p>
          </div>
        )}

        <div className="flex gap-2.5 sm:gap-3 overflow-x-auto snap-x snap-mandatory pb-1 scrollbar-hide">
          {categories.map((name) => (
            <button
              key={name}
              onClick={() => onSelect?.(name)}
              className={`flex-shrink-0 snap-start rounded-full border px-4 sm:px-5 py-3 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300 active:scale-95 ${
                selected === name
                  ? "border-[#D9B15E] bg-[#FCE9B8] text-[#111111] shadow-[0_14px_28px_rgba(217,177,94,0.16)]"
                  : "border-black/8 bg-white text-[#111111] hover:border-[#E7C679] hover:bg-[#FFF5D6] hover:text-[#A45A18]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
