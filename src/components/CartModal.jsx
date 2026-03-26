import { useState } from "react";
import { Trash2, ShoppingCart, X } from "lucide-react";

export default function CartModal({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  totalPrice,
  onCheckout,
}) {
  const [specialInstructions, setSpecialInstructions] = useState("");

  return (
    <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg sm:max-w-2xl rounded-[24px] shadow-[0_30px_80px_rgba(15,15,15,0.2)] overflow-hidden max-h-[90vh] flex flex-col border border-black/5">
        <div className="flex justify-between items-center p-5 sm:p-6 border-b border-black/5 bg-[#FCFAF6]">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-saffronGold" />
            <h2 className="text-xl sm:text-2xl font-playfair font-semibold text-deepMaroon tracking-[0.04em]">
              Your Cart
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-luxeGray hover:text-deepMaroon p-2 hover:bg-saffronGold/10 rounded-lg transition-all duration-300"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-saffronGold/30 mx-auto mb-4" />
              <p className="text-luxeGray text-lg font-medium">
                Your cart is empty
              </p>
              <p className="text-luxeGray/80 mt-2 font-light">
                Add items to start your order.
              </p>
            </div>
          ) : (
            cart.map((item) => {
              const variant = item.selectedVariant || item.variants?.[0] || {};
              const price = variant.price || item.price || 0;
              const sizeText = variant.size ? ` (${variant.size})` : "";

              return (
                <div
                  key={item.id}
                  className="flex gap-4 items-start border-b border-black/5 pb-5 last:border-0 last:pb-0 hover:bg-[#FAF6F0] p-3 rounded-xl transition-colors duration-300"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 shadow-md premium-image"
                    />
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#F5F1EB] flex-shrink-0 flex items-center justify-center text-xs text-luxeGray font-medium">
                      Photo
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="font-playfair font-semibold text-base sm:text-lg text-deepMaroon tracking-[0.03em]">
                      {item.name}
                      {sizeText && (
                        <span className="text-sm text-luxeGray ml-1 font-normal">
                          {sizeText}
                        </span>
                      )}
                    </p>

                    <p className="text-sm text-saffronGold font-medium mt-1">
                      {"\u20B9"}
                      {price} x <span className="text-deepMaroon">{item.qty}</span>
                    </p>

                    <div className="mt-3 inline-flex items-center bg-[#F5F1EB] border border-black/5 rounded-lg p-1">
                      <button
                        onClick={() => onDecrease(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-deepMaroon hover:bg-saffronGold/15 rounded transition-colors font-semibold"
                        disabled={item.qty <= 1}
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-deepMaroon">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onIncrease(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-deepMaroon hover:bg-saffronGold/15 rounded transition-colors font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-3">
                    <div className="font-semibold text-lg sm:text-xl text-saffronGold">
                      {"\u20B9"}
                      {(price * item.qty).toFixed(0)}
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-luxeGray hover:text-saffronGold text-sm font-semibold transition-colors flex items-center gap-1 hover:bg-red-50 px-2 py-1 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-black/5 bg-[#FCFAF6]">
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="text-sm text-luxeGray font-light">Subtotal</p>
                <p className="text-2xl sm:text-3xl font-playfair font-semibold text-saffronGold">
                  {"\u20B9"}
                  {Number(totalPrice).toFixed(0)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-luxeGray font-light">Items</p>
                <p className="text-2xl sm:text-3xl font-semibold text-deepMaroon">
                  {cart.reduce((sum, item) => sum + item.qty, 0)}
                </p>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="specialInstructions"
                className="block text-sm font-medium text-deepMaroon mb-2"
              >
                Add special instructions
              </label>
              <textarea
                id="specialInstructions"
                rows={3}
                value={specialInstructions}
                onChange={(event) => setSpecialInstructions(event.target.value)}
                placeholder="Anything we should know about your order or table request?"
                className="w-full border-2 border-saffronGold/20 px-4 py-3 rounded-lg text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition resize-none bg-white hover:border-saffronGold/40"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onCheckout(specialInstructions)}
                className="bg-[#C75B12] text-white font-medium py-3 px-6 rounded-[10px] w-full transition-all duration-300 hover:shadow-[0_20px_34px_rgba(199,91,18,0.24)] hover:scale-[1.02] active:scale-95 text-base sm:text-lg"
              >
                Book Your Table
              </button>
              <button
                onClick={onClose}
                className="border border-saffronGold/30 text-saffronGold font-medium py-3 px-6 rounded-[10px] w-full hover:bg-saffronGold/10 transition-all duration-300 text-base sm:text-lg"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
