import { useState } from "react";
import { CheckCircle, X } from "lucide-react";

export default function Checkout({ cart, totalPrice, onClose, onPlaceOrder }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "COD",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));

    const order = {
      id: Date.now(),
      customer: form,
      items: cart,
      total: totalPrice,
      createdAt: new Date().toISOString(),
    };

    setLoading(false);
    setSuccess(order);
    onPlaceOrder && onPlaceOrder(order);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border-2 border-saffronGold/20">
        {/* Header - Premium */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-creamBeige to-white border-b border-saffronGold/20 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-playfair font-bold text-deepMaroon">
            Checkout
          </h2>
          <button
            onClick={onClose}
            className="text-luxeGray hover:text-deepMaroon transition-all p-2 hover:bg-saffronGold/10 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success State - Premium */}
        {success ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-saffronGold drop-shadow-lg" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-deepMaroon mb-3">
              Order Placed! 🎉
            </h3>
            <p className="text-luxeGray text-sm sm:text-base mb-2 font-light">
              Thank you,{" "}
              <span className="font-semibold text-saffronGold">
                {success.customer.name}
              </span>
              !
            </p>
            <p className="text-luxeGray text-sm mb-8 font-light">
              Order <span className="font-bold text-deepMaroon">#{success.id}</span> is on its way to you. You'll receive updates on WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-saffronYellow to-burnedOrange text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl inline-flex"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[70vh] sm:max-h-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-lg font-playfair font-bold text-deepMaroon">Delivery Details</h4>

                <div>
                  <label className="block text-sm font-semibold text-deepMaroon mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border-2 border-saffronGold/20 px-4 py-3 rounded-lg text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition hover:border-saffronGold/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deepMaroon mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full border-2 border-saffronGold/20 px-4 py-3 rounded-lg text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition hover:border-saffronGold/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deepMaroon mb-2">
                    Delivery Address
                  </label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Enter your complete delivery address..."
                    className="w-full border-2 border-saffronGold/20 px-4 py-3 rounded-lg text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition resize-none hover:border-saffronGold/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deepMaroon mb-2">
                    Payment Method
                  </label>
                  <select
                    name="payment"
                    value={form.payment}
                    onChange={handleChange}
                    className="w-full border-2 border-saffronGold/20 px-4 py-3 rounded-lg text-deepMaroon focus:outline-none focus:ring-2 focus:ring-saffronGold/40 focus:border-saffronGold transition hover:border-saffronGold/40"
                  >
                    <option value="COD">💳 Cash on Delivery</option>
                    <option value="UPI">📱 UPI</option>
                    <option value="CARD">🎫 Card</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4 md:col-span-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-saffronYellow via-turmeric to-burnedOrange text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl active:scale-95 shadow-lg"
                  >
                    {loading
                      ? "Processing..."
                      : `Place Order — ₹${totalPrice.toFixed(0)}`}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 border-2 border-saffronGold/40 text-saffronGold font-bold py-3 px-6 rounded-lg hover:bg-saffronGold/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              {/* Order Summary - Premium */}
              <div className="md:col-span-1">
                <h4 className="text-lg font-playfair font-bold text-deepMaroon mb-4">
                  Order Summary
                </h4>
                <div className="bg-gradient-to-b from-creamBeige to-white rounded-2xl p-5 space-y-4 max-h-[45vh] overflow-y-auto border border-saffronGold/20">
                  {cart.map((item) => {
                    const itemPrice =
                      item.selectedVariant?.price || item.price || 0;
                    return (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 pb-4 border-b border-saffronGold/15 last:border-0"
                      >
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg flex-shrink-0 shadow-sm"
                          />
                        )}
                        {!item.image && (
                          <div className="w-12 h-12 bg-creamBeige rounded-lg flex-shrink-0 flex items-center justify-center text-xs text-luxeGray font-medium">
                            Photo
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-deepMaroon text-sm line-clamp-1">
                            {item.name}
                          </div>
                          {item.selectedVariant?.size && (
                            <div className="text-xs text-luxeGray mt-0.5 font-light">
                              {item.selectedVariant.size}
                            </div>
                          )}
                          <div className="text-xs text-luxeGray mt-1 font-light">
                            Qty × {item.qty}
                          </div>
                        </div>
                        <div className="font-semibold text-saffronGold text-sm whitespace-nowrap">
                          ₹{(itemPrice * item.qty).toFixed(0)}
                        </div>
                      </div>
                    );
                  })}

                  <div className="border-t-2 border-saffronGold/30 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-deepMaroon">Total</span>
                      <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-saffronGold to-burnedOrange bg-clip-text text-transparent">
                        ₹{totalPrice.toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
