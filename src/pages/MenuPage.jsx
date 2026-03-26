import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import MenuCategorySections from "../components/MenuCategorySections";
import CartModal from "../components/CartModal";
import OrderNow from "../components/OrderNow";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  foodData,
  menuCategoryGroups,
  slugifyCategory,
} from "../data/foodData";
import { useCart } from "../hooks/useCart";

const getDishCount = (sections = []) =>
  sections.reduce((sum, section) => sum + section.items.length, 0);

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();
  const {
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
  } = useCart();

  const groupedSections = useMemo(
    () =>
      menuCategoryGroups
        .map((group) => ({
          category: group.name,
          description: group.description,
          items: foodData.filter((item) =>
            group.categories.includes(item.category),
          ),
        }))
        .filter(({ items }) => items.length),
    [],
  );

  const visibleSections = useMemo(
    () =>
      selectedCategory
        ? groupedSections.filter(({ category }) => category === selectedCategory)
        : groupedSections,
    [groupedSections, selectedCategory],
  );

  const cartQtyByItem = useMemo(
    () =>
      cart.reduce((quantities, entry) => {
        quantities[entry.itemId] = (quantities[entry.itemId] || 0) + entry.qty;
        return quantities;
      }, {}),
    [cart],
  );

  const handleCategorySelect = (category) => {
    const nextCategory = selectedCategory === category ? "" : category;
    const resultsSection = document.getElementById("menu-category-results");

    setSelectedCategory(nextCategory);
    window.history.replaceState(
      null,
      "",
      nextCategory
        ? `${location.pathname}#${slugifyCategory(nextCategory)}`
        : location.pathname,
    );

    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (!hash) {
      setSelectedCategory("");
      return;
    }

    const matchedCategory = groupedSections.find(
      ({ category }) => slugifyCategory(category) === hash,
    )?.category;

    setSelectedCategory(matchedCategory || "");
  }, [groupedSections, location.hash]);

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      <div className="pt-24 sm:pt-28 bg-[#FCFAF6] min-h-screen">
        <section className="relative overflow-hidden border-b border-black/5">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(181,84,24,0.12), transparent 32%), linear-gradient(135deg, rgba(255,245,214,0.5) 0%, rgba(252,250,246,0.08) 100%)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
            <p className="section-subtitle !text-left px-0 !mb-3">Our Menu</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold text-deepMaroon tracking-[0.04em] max-w-4xl">
              Find What You Want, Faster
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base text-luxeGray">
              Choose a category to quickly narrow down the menu. Tap again to
              see everything.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-black/8 bg-white px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] shadow-sm">
                {getDishCount(visibleSections)} dishes
              </span>
              <span className="inline-flex items-center rounded-full border border-[#D9B15E]/60 bg-[#FFF7E1] px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] shadow-sm">
                {groupedSections.length} categories
              </span>
            </div>
          </div>
        </section>

        <Categories
          categories={groupedSections.map(({ category }) => category)}
          selected={selectedCategory}
          onSelect={handleCategorySelect}
          title="Browse by Category"
          eyebrow="Menu"
          helperText="Select a category to see matching dishes."
          sticky
        />

        <section
          id="menu-category-results"
          className="py-8 sm:py-10 lg:py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuCategorySections
              sections={visibleSections}
              onAdd={addToCart}
              cartQtyByItem={cartQtyByItem}
            />
          </div>
        </section>

        <OrderNow />
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
