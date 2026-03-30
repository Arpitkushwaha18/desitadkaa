import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLockedBodyScroll } from "../hooks/useLockedBodyScroll";

export default function VariantSelectorModal({
  item,
  isOpen,
  onClose,
  onSelect,
}) {
  useLockedBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !item || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-[22px] border border-black/5 bg-white shadow-[0_28px_60px_rgba(15,15,15,0.2)] overflow-hidden max-h-[min(82vh,32rem)] flex flex-col"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="variant-selector-title"
      >
        <div className="flex items-start justify-between gap-4 border-b border-black/5 bg-[#FCFAF6] px-5 py-4 sm:px-6">
          <div>
            <h4
              id="variant-selector-title"
              className="text-xl font-playfair font-semibold text-deepMaroon tracking-[0.04em]"
            >
              {item.name}
            </h4>
            <p className="mt-1 text-sm text-luxeGray">
              Select your preferred size
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-luxeGray hover:text-deepMaroon hover:bg-saffronGold/10 transition-colors"
            aria-label="Close size selector"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(item.variants || []).map((variant, index) => (
              <button
                key={`${variant.size || "variant"}-${index}`}
                type="button"
                onClick={() => onSelect?.(variant)}
                className="rounded-2xl border border-black/6 bg-[#F9F5EF] px-4 py-4 text-left transition-all duration-300 hover:border-saffronGold/35 hover:bg-saffronGold/10 active:scale-[0.99]"
              >
                <div className="font-playfair text-lg font-semibold text-deepMaroon">
                  {variant.size}
                </div>
                <div className="mt-1 text-sm font-semibold text-saffronGold">
                  {"\u20B9"}
                  {variant.price}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
