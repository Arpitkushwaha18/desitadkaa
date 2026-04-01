import { Suspense, lazy, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useCart } from "../hooks/useCart";

const CartModal = lazy(() => import("../components/CartModal"));
const HomeSections = lazy(() => import("../components/HomeSections"));

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

  useEffect(() => {
    const warmHomeChunks = () => {
      import("../components/HomeSections");
      import("../components/CartModal");
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(warmHomeChunks, {
        timeout: 1800,
      });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(warmHomeChunks, 900);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      <Hero />

      <Suspense fallback={null}>
        <HomeSections />
      </Suspense>

      {showCart && (
        <Suspense fallback={null}>
          <CartModal
            cart={cart}
            totalPrice={totalPrice}
            onClose={() => setShowCart(false)}
            onIncrease={increaseQty}
            onDecrease={decreaseQty}
            onRemove={removeItem}
            onCheckout={proceedToCheckout}
          />
        </Suspense>
      )}
    </>
  );
}
