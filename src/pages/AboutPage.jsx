import Navbar from "../components/Navbar";
import About from "../components/About";
import AboutPageExtra from "../components/AboutPageExtra";
import CartModal from "../components/CartModal";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useCart } from "../hooks/useCart";

export default function AboutPage() {
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

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      <div className="pt-20 sm:pt-24">
        <About />
        <AboutPageExtra />
      </div>

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
    </>
  );
}
