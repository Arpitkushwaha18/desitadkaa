import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryShowcase from "../components/CategoryShowcase";
import OurSpecialty from "../components/OurSpecialty";
import CartModal from "../components/CartModal";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import OrderNow from "../components/OrderNow";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { homeCategoryCards } from "../data/homeCategoryCards";
import { useCart } from "../hooks/useCart";

export default function Home() {
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

      <Hero />

      <CategoryShowcase categories={homeCategoryCards} />

      <OurSpecialty />

      <About />
      <Gallery />
      <Testimonials />
      <ContactCTA />

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

      <OrderNow />

      <WhatsAppButton />

      <Footer />
    </>
  );
}
