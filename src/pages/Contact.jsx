import { useState } from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import CartModal from "../components/CartModal";
import WhatsAppButton from "../components/WhatsAppButton";
import MapSection from "../components/MapSection";
import {
  Instagram,
  Facebook,
  Mail as MailIcon,
  Phone,
  MapPin,
} from "lucide-react";
import backgroundImage from "../assets/images/backgroundoftiming.jpg";
import { siteConfig } from "../data/siteConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { useCart } from "../hooks/useCart";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const {
    cart,
    showCart,
    setShowCart,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
    cartCount,
    proceedToCheckout,
  } = useCart();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(buildWhatsAppUrl(formData), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-creamBeige" style={{ contain: "layout style" }}>
      <Header cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 bg-[#FCFAF6] border-b border-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-deepMaroon mb-3 sm:mb-4 tracking-[0.08em]">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-luxeGray px-2 max-w-2xl mx-auto">
            Get in touch with Desi Tadka for reservations or questions. Reach
            out to us directly or message us on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-deepMaroon mb-4 sm:mb-6 tracking-[0.06em]">
                  Feel free to reach us.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-luxeGray mb-6 sm:mb-8 leading-relaxed">
                  Reach out to us directly or message us on WhatsApp. We're
                  happy to help with reservations, questions, or orders.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-[16px] border border-black/5 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-saffronGold" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-stone-900 mb-1 sm:mb-2 tracking-[0.04em]">
                      Our Address
                    </h3>
                    <a
                      href={siteConfig.locationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base md:text-lg text-luxeGray hover:text-saffronGold transition-colors"
                    >
                      {siteConfig.locationLabel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-[16px] border border-black/5 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MailIcon className="w-6 h-6 sm:w-7 sm:h-7 text-saffronGold" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-stone-900 mb-1 sm:mb-2 tracking-[0.04em]">
                      Email
                    </h3>
                    <a
                      href={siteConfig.emailHref}
                      className="text-sm sm:text-base md:text-lg text-luxeGray hover:text-saffronGold transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-[16px] border border-black/5 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-saffronGold" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-stone-900 mb-1 sm:mb-2 tracking-[0.04em]">
                      Call Us
                    </h3>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-sm sm:text-base md:text-lg text-luxeGray hover:text-saffronGold transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-stone-900 mb-3 sm:mb-4 tracking-[0.04em]">
                    Follow Us
                  </h3>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white hover:bg-[#C75B12] transition-all duration-300 shadow-md hover:-translate-y-1"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={siteConfig.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white hover:bg-[#C75B12] transition-all duration-300 shadow-md hover:-translate-y-1"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white hover:bg-[#C75B12] transition-all duration-300 shadow-md hover:-translate-y-1"
                      aria-label="WhatsApp"
                    >
                      <Phone size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative w-full max-w-md h-fit bg-cover bg-center rounded-[24px] border border-white/10 overflow-hidden shadow-[0_26px_55px_rgba(15,15,15,0.18)] sticky top-20 sm:top-24 md:top-32"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="bg-[#0F0F0F]/82 backdrop-blur-sm p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl sm:text-3xl font-playfair text-[#EAEAEA] mb-5 sm:mb-6 text-center tracking-[0.06em]">
                    Opening Times
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    {[
                      ["Mon", "11 AM - 11 PM"],
                      ["Tue", "11 AM - 11 PM"],
                      ["Wed", "11 AM - 11 PM"],
                      ["Thu", "11 AM - 11 PM"],
                      ["Fri", "11 AM - 11 PM"],
                      ["Sat", "10 AM - 12 AM"],
                      ["Sun", "10 AM - 12 AM"],
                    ].map(([day, hours]) => (
                      <div
                        key={day}
                        className="flex justify-between items-center border-b border-white/10 pb-2"
                      >
                        <span className="text-[#EAEAEA] font-medium text-xs sm:text-sm uppercase tracking-[0.18em]">
                          {day}
                        </span>
                        <span className="text-[#A8A8A8] text-xs sm:text-sm">
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center">
                    <p className="text-[#C75B12] text-xs sm:text-sm mb-2 font-medium tracking-[0.3em] uppercase">
                      Call Us Now
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold text-[#EAEAEA]">
                      {siteConfig.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FCFAF6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-deepMaroon mb-3 sm:mb-4 tracking-[0.06em]">
              Send us a Message
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-luxeGray max-w-2xl mx-auto px-2">
              Fill in your details and we'll open WhatsApp with your message
              ready to send.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 bg-white p-5 sm:p-8 rounded-[22px] border border-black/5 shadow-[0_20px_40px_rgba(15,15,15,0.08)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-stone-700 mb-2 tracking-[0.08em] uppercase"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border border-black/10 rounded-[10px] focus:border-[#C75B12] focus:outline-none text-stone-900 placeholder-stone-400 transition-colors duration-300 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium text-stone-700 mb-2 tracking-[0.08em] uppercase"
                >
                  Your Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Number"
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border border-black/10 rounded-[10px] focus:border-[#C75B12] focus:outline-none text-stone-900 placeholder-stone-400 transition-colors duration-300 text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-stone-700 mb-2 tracking-[0.08em] uppercase"
              >
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border border-black/10 rounded-[10px] focus:border-[#C75B12] focus:outline-none text-stone-900 placeholder-stone-400 transition-colors duration-300 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-medium text-stone-700 mb-2 tracking-[0.08em] uppercase"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border border-black/10 rounded-[10px] focus:border-[#C75B12] focus:outline-none text-stone-900 placeholder-stone-400 resize-vertical transition-colors duration-300 text-sm"
              />
            </div>

            <div className="flex justify-center pt-2 sm:pt-4">
              <button
                type="submit"
                className="px-8 sm:px-10 py-3 sm:py-4 bg-[#C75B12] text-white font-medium rounded-[10px] hover:bg-[#A8480D] hover:shadow-[0_18px_34px_rgba(199,91,18,0.24)] hover:scale-[1.02] transition-all duration-300 shadow-[0_14px_28px_rgba(199,91,18,0.18)] text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>

            {submitted && (
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#F8F2EA] border border-saffronGold/20 rounded-[10px] text-center">
                <p className="text-deepMaroon font-medium text-sm sm:text-base">
                  WhatsApp opened successfully.
                </p>
                <p className="text-luxeGray text-xs sm:text-sm mt-1">
                  Review the message and tap send.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      <MapSection />

      {showCart && (
        <CartModal
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setShowCart(false)}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeItem}
          onCheckout={proceedToCheckout}
        />
      )}

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Contact;
