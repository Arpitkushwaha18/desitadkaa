import { memo, useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

function MenuCard({ item, onAdd, itemCartQty = 0 }) {
  const [showVariants, setShowVariants] = useState(false);

  const rating = item.rating || 4.5;
  const ratingCount = item.ratingCount || 120;
  const variants = item.variants || [];
  const displayPrice = variants.length > 0 ? variants[0].price : item.price || 0;

  const handleAddClick = () => {
    if (variants.length > 1) {
      setShowVariants(true);
    } else {
      onAdd(item, variants[0] || {});
    }
  };

  const handleVariantSelect = (variant) => {
    onAdd(item, variant);
    setShowVariants(false);
  };

  return (
    <>
      <div className="bg-white rounded-[22px] shadow-[0_18px_38px_rgba(15,15,15,0.08)] border border-black/5 h-full flex flex-col group hover:shadow-[0_24px_50px_rgba(15,15,15,0.12)] hover:border-saffronGold/20 will-change-transform transform-gpu transition-all duration-300 ease-out overflow-hidden">
        <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-[#F5F1EB] flex items-center justify-center">
          {item.image ? (
            <>
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover premium-image transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="text-center">
              <p className="text-sm font-medium text-saffronGold/60 tracking-[0.16em] uppercase">
                Culinary Delight
              </p>
            </div>
          )}

          {item.popular && (
            <div className="absolute top-3 right-3 bg-[#F5F1EB]/92 text-deepMaroon px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase shadow-md border border-white/60">
              Popular
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-playfair font-semibold text-base text-deepMaroon line-clamp-2 leading-tight tracking-[0.04em]">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-xs text-luxeGray mt-2 line-clamp-2 font-light leading-5">
                {item.description}
              </p>
            )}
          </div>

          <div className="mt-3.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-[#F9F5EF] px-2.5 py-1">
                <Star className="w-3 h-3 fill-saffronGold text-saffronGold" />
                <span className="font-medium text-sm text-deepMaroon">
                  {rating}
                </span>
                <span className="text-xs text-luxeGray">({ratingCount})</span>
              </div>

              <div className="text-right">
                <div className="text-sm font-semibold text-saffronGold">
                  {"\u20B9"}
                  {displayPrice}
                </div>
                {variants.length > 1 && (
                  <div className="text-[11px] uppercase tracking-[0.18em] text-luxeGray mt-0.5">
                    From
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleAddClick}
            className="w-full mt-4 bg-[#111111] text-white font-medium py-2.5 rounded-[12px] flex items-center justify-between md:justify-center gap-2 transition-all duration-300 ease-out hover:bg-[#D7A43A] hover:text-[#111111] hover:shadow-[0_18px_34px_rgba(215,164,58,0.24)] hover:scale-[1.02] active:scale-95 relative"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">Add</span>
            </div>
            {itemCartQty > 0 && (
              <span className="ml-auto md:ml-0 md:absolute md:right-2 bg-white text-deepMaroon font-semibold text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-md">
                {itemCartQty}
              </span>
            )}
          </button>

          {variants.length > 1 && (
            <div className="text-[11px] text-saffronGold/80 text-center mt-2 font-medium uppercase tracking-[0.18em]">
              {variants.length} sizes available
            </div>
          )}
        </div>
      </div>

      {showVariants && (
        <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[22px] p-8 max-w-sm w-full shadow-[0_28px_60px_rgba(15,15,15,0.18)] border border-black/5">
            <h4 className="text-xl font-playfair font-semibold text-deepMaroon mb-2 tracking-[0.04em]">
              {item.name}
            </h4>
            <p className="text-sm text-luxeGray mb-6">Select your preferred size:</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {variants.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => handleVariantSelect(variant)}
                  className="bg-[#F9F5EF] hover:bg-saffronGold/10 active:bg-saffronGold/15 border border-black/5 hover:border-saffronGold/30 rounded-xl py-3 text-center font-medium transition-all duration-300"
                >
                  <div className="text-deepMaroon font-playfair">{variant.size}</div>
                  <div className="text-saffronGold font-semibold text-sm mt-1">
                    {"\u20B9"}
                    {variant.price}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowVariants(false)}
              className="w-full text-luxeGray hover:text-deepMaroon text-sm font-medium py-2.5 border border-black/10 rounded-lg transition-all duration-300 hover:bg-[#F5F1EB]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(MenuCard);
