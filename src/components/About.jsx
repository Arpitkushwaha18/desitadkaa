export default function About() {
  return (
    <section id="about" className="section-padding bg-[#FCFAF6] deferred-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-subtitle mb-4">About Us</h2>
          <h2 className="section-title !mb-6 sm:!mb-8 text-3xl sm:text-4xl md:text-5xl text-deepMaroon leading-tight">
            Desi Tadka
          </h2>
          <p className="text-luxeGray leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg font-light">
            Desi Tadka is built on simple ideas - good food, honest flavours,
            and a place where people feel comfortable coming back.
          </p>
          <p className="text-luxeGray leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-light">
            Our menu brings together North Indian favourites, tandoor specials,
            fresh breads, and everyday comfort dishes that people actually enjoy
            eating.
          </p>
          <p className="text-luxeGray leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-light">
            Whether it's a quick meal or a family dinner, we keep it simple,
            fresh, and satisfying.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-8 sm:pt-12 border-t border-black/10">
            <div className="text-center rounded-2xl bg-white border border-black/5 px-3 py-5 shadow-sm">
              <div className="text-2xl sm:text-4xl font-playfair font-semibold text-saffronGold">
                Open-Air
              </div>
              <div className="text-[11px] sm:text-sm text-luxeGray mt-3 font-medium tracking-[0.2em] uppercase">
                Dining
              </div>
            </div>
            <div className="text-center rounded-2xl bg-white border border-black/5 px-3 py-5 shadow-sm">
              <div className="text-2xl sm:text-4xl font-playfair font-semibold text-saffronGold">
                Real
              </div>
              <div className="text-[11px] sm:text-sm text-luxeGray mt-3 font-medium tracking-[0.2em] uppercase">
                Spices
              </div>
            </div>
            <div className="text-center rounded-2xl bg-white border border-black/5 px-3 py-5 shadow-sm">
              <div className="text-2xl sm:text-4xl font-playfair font-semibold text-saffronGold">
                Comfort
              </div>
              <div className="text-[11px] sm:text-sm text-luxeGray mt-3 font-medium tracking-[0.2em] uppercase">
                Food
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative rounded-[22px] overflow-hidden shadow-[0_26px_55px_rgba(15,15,15,0.12)] group border border-black/5 bg-white">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=600&fit=crop&q=90"
              alt="About Us"
              className="premium-image w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-[#C75B12]/12 opacity-70 transition-opacity duration-500 rounded-[22px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
