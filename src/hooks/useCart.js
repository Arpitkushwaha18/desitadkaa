import { useCallback, useEffect, useMemo, useState } from "react";
import { buildOrderWhatsAppUrl } from "../utils/whatsapp";

export function useCart() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) {
      return;
    }

    try {
      const parsedCart = JSON.parse(savedCart);

      if (Array.isArray(parsedCart)) {
        const normalizedCart = parsedCart.map((item) => ({
          ...item,
          price: item.price || item.selectedVariant?.price || 0,
          image: item.image || "",
        }));

        setCart(normalizedCart);
      }
    } catch (error) {
      console.warn("Failed to parse saved cart, resetting:", error);
      setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((item, selectedVariant) => {
    const variant = selectedVariant || item.variants?.[0] || {};
    const sizeKey = variant.size || "default";
    const price = variant.price || item.price || 0;

    const cartItem = {
      id: `${item.id}-${sizeKey}`,
      itemId: item.id,
      name: item.name,
      image: item.image || "",
      selectedVariant: variant,
      price,
      qty: 1,
    };

    setCart((previousCart) => {
      const existingItem = previousCart.find((entry) => entry.id === cartItem.id);

      if (existingItem) {
        return previousCart.map((entry) =>
          entry.id === cartItem.id ? { ...entry, qty: entry.qty + 1 } : entry,
        );
      }

      return [...previousCart, cartItem];
    });
  }, []);

  const increaseQty = useCallback((id) => {
    setCart((previousCart) =>
      previousCart.map((entry) =>
        entry.id === id ? { ...entry, qty: entry.qty + 1 } : entry,
      ),
    );
  }, []);

  const decreaseQty = useCallback((id) => {
    setCart((previousCart) =>
      previousCart
        .map((entry) =>
          entry.id === id && entry.qty > 1
            ? { ...entry, qty: entry.qty - 1 }
            : entry,
        )
        .filter((entry) => entry.qty > 0),
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCart((previousCart) => previousCart.filter((entry) => entry.id !== id));
  }, []);

  const totalPrice = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const price = item.selectedVariant?.price || item.price || 0;
        return sum + price * item.qty;
      }, 0),
    [cart],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart],
  );

  const proceedToCheckout = useCallback((note = "") => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const whatsappUrl = buildOrderWhatsAppUrl({
      cart,
      totalPrice,
      note,
    });

    setShowCart(false);
    setCart([]);
    localStorage.removeItem("cart");
    window.location.href = whatsappUrl;
  }, [cart, totalPrice]);

  return {
    cart,
    showCart,
    setShowCart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
    cartCount,
    proceedToCheckout,
  };
}
