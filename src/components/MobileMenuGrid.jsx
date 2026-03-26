// src/components/MobileMenuGrid.jsx
import React, { useState } from "react";

export default function MobileMenuGrid({ items = [], onAdd }) {
  const [selectedItem, setSelectedItem] = useState(null); // for variant popup

  const handleAddClick = (item) => {
    const variants = item.variants || [];
    if (variants.length > 1) {
      setSelectedItem(item); // show popup
    } else {
      onAdd?.(item, variants[0]); // add default variant (may be undefined)
    }
  };

  const handleVariantSelect = (item, variant) => {
    onAdd?.(item, variant);
    setSelectedItem(null); // close popup
  };

  return (
    <section className="pt-3 sm:pt-4 pb-6 sm:pb-8 px-3 bg-white w-full">
      <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">Menu</h3>

      <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 sm:gap-4 -mx-3 px-3 pb-2">
        {items.map((item) => {
          const variants = item.variants || [];
          const defaultVariant = variants[0] || {};
          const priceDisplay =
            variants.length > 1
              ? `from ₹${Math.min(...variants.map((v) => v.price))}`
              : `₹${defaultVariant.price || item.price || 0}`;

          return (
            <article
              key={item.id}
              className="flex-shrink-0 w-[calc(50vw-18px)] sm:w-[calc(50vw-18px)] snap-start bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-gray-100/60 hover:shadow-lg transition-shadow h-full"
            >
              <div className="relative w-full pt-[68%] bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                    Photo coming soon
                  </div>
                )}
              </div>

              <div className="p-3.5 flex flex-col flex-1">
                <h4 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 mb-1.5">
                  {item.name}
                </h4>

                {item.description && (
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
                    {item.description}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between gap-2">
                  <span className="text-base font-bold text-gray-900">
                    {priceDisplay}
                    {variants.length > 1 && (
                      <span className="text-xs text-gray-500 ml-1">
                        onwards
                      </span>
                    )}
                  </span>

                  <button
                    onClick={() => handleAddClick(item)}
                    className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-lg px-5 py-1.5 text-sm font-semibold transition-colors shadow-sm active:scale-95 min-w-[70px]"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Variant Selector Popup (simple modal-style) */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h4 className="text-lg font-bold mb-4">{selectedItem.name}</h4>
            <p className="text-sm text-gray-600 mb-4">Choose size:</p>

            <div className="grid grid-cols-2 gap-3">
              {(selectedItem.variants || []).map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => handleVariantSelect(selectedItem, variant)}
                  className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-xl py-3 text-center font-medium transition-colors"
                >
                  {variant.size}
                  <br />
                  <span className="text-green-700 font-bold">
                    ₹{variant.price}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setSelectedItem(null)}
              className="mt-6 w-full text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {items.length === 0 && (
        <div className="py-10 text-center text-gray-500">
          <p className="text-lg font-medium">No items found</p>
          <p className="mt-1 text-sm">Try another category or search</p>
        </div>
      )}
    </section>
  );
}
