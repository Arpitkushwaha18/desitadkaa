import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import GalleryPageExtra from "../components/GalleryPageExtra";
import CartModal from "../components/CartModal";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useCart } from "../hooks/useCart";

export default function GalleryPage() {
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
        <Gallery />
        <GalleryPageExtra />
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
