import MenuCard from "./MenuCard";
import { categoryMeta, slugifyCategory } from "../data/foodData";

const getStartingPrice = (items = []) =>
  Math.min(
    ...items.flatMap((item) =>
      item.variants?.length
        ? item.variants.map((variant) => variant.price)
        : [item.price || 0],
    ),
  );

export default function MenuCategorySections({
  sections = [],
  onAdd,
  cartQtyByItem = {},
}) {
  if (!sections.length) return null;

  return (
    <div className="space-y-12 sm:space-y-14 lg:space-y-16">
      {sections.map(({ category, description, items }) => (
        <section
          key={category}
          id={slugifyCategory(category)}
          className="scroll-mt-40 deferred-section"
        >
          <div className="rounded-[28px] border border-black/6 bg-white/78 p-5 sm:p-6 shadow-[0_18px_38px_rgba(15,15,15,0.06)] backdrop-blur-sm mb-5 sm:mb-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-saffronGold mb-2">
                  Category
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-playfair font-semibold text-deepMaroon tracking-[0.03em]">
                  {category}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-luxeGray">
                  {description || categoryMeta[category]?.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-black/8 bg-[#FFF7E1] px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                  {items.length} dishes
                </span>
                <span className="inline-flex items-center rounded-full border border-black/8 bg-white px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                  From {"\u20B9"}
                  {getStartingPrice(items)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <div key={item.id} className="h-full">
                <MenuCard
                  item={item}
                  onAdd={onAdd}
                  itemCartQty={cartQtyByItem[item.id] || 0}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
