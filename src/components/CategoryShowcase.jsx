import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryShowcase({ categories = [] }) {
  if (!categories.length) return null;

  return (
    <section
      id="menu"
      className="section-padding-compact bg-[#FCFAF6] relative overflow-hidden deferred-section"
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(180,84,24,0.35) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="section-subtitle px-0">Browse by Category</p>
          <h2 className="section-title px-0">Browse by What You're Craving</h2>
          <p className="text-sm sm:text-base text-luxeGray">
            Pick a category and see only what you're in the mood for.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/menu#${category.slug}`}
              className="group relative min-h-[320px] sm:min-h-[340px] xl:min-h-[390px] rounded-[28px] overflow-hidden border border-black/6 shadow-[0_22px_48px_rgba(15,15,15,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(15,15,15,0.12)]"
            >
              {category.image ? (
                <>
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100E0C]/90 via-[#100E0C]/46 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D241C] via-[#51331F] to-[#B55418]" />
              )}

              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-white/14 px-3 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/92 backdrop-blur-sm">
                    {category.itemCount} dishes
                  </span>

                  <span className="inline-flex items-center rounded-full bg-[#F6D178] px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#111111] shadow-[0_10px_24px_rgba(246,209,120,0.22)]">
                    From {"\u20B9"}
                    {category.startingPrice}
                  </span>
                </div>

                <div className="max-w-xl">
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#F6D178] mb-3">
                    Category
                  </p>
                  <h3 className="text-[1.9rem] sm:text-[2.1rem] xl:text-[2rem] font-playfair font-semibold text-white leading-[1.02]">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-white/78 max-w-lg leading-relaxed">
                    {category.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#F6D178]/70 group-hover:text-[#F6D178]">
                    View
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
