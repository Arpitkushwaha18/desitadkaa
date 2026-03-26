import MenuCard from "./MenuCard";

export default function PopularDishes({
  items,
  onAdd,
  onCardClick,
  cart = [],
}) {
  return (
    <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#FCFAF6] overflow-x-hidden relative">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(199,91,18,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="section-subtitle px-5 sm:px-6">Customer Favorites</h2>
          <h2 className="section-title px-5 sm:px-6">Popular Dishes</h2>
          <div className="accent-divider" />
        </div>

        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 pb-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[calc(50vw-22px)] sm:w-[calc(50vw-22px)] md:w-[calc(33.33%-17px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19px)] snap-center md:snap-start group transition-transform duration-500 ease-in-out hover:-translate-y-1"
            >
              <MenuCard
                item={item}
                onAdd={onAdd}
                onCardClick={onCardClick}
                cart={cart}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
