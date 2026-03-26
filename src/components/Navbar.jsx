import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MapPin, Menu, ShoppingCart, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "../data/siteConfig";

export default function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navButtonClass = (path) =>
    `inline-flex items-center justify-center rounded-full border px-4 lg:px-5 py-2.5 text-[0.74rem] lg:text-[0.78rem] uppercase tracking-[0.24em] font-semibold transition-all duration-300 ${
      pathname === path
        ? "border-[#D9B15E] bg-[#FCE9B8] text-[#111111] shadow-[0_14px_28px_rgba(217,177,94,0.18)]"
        : "border-transparent text-[#111111] hover:border-[#E7C679] hover:bg-[#FFF5D6] hover:text-[#A45A18]"
    }`;

  const mobileNavButtonClass = (path) =>
    `w-full text-left rounded-2xl border px-4 py-3.5 uppercase tracking-[0.22em] text-[0.78rem] font-semibold transition-all duration-300 ${
      pathname === path
        ? "border-[#D9B15E] bg-[#FCE9B8] text-[#111111]"
        : "border-black/5 bg-white text-[#111111] hover:border-[#E7C679] hover:bg-[#FFF5D6] hover:text-[#A45A18]"
    }`;

  const actionButtonClass =
    "inline-flex items-center gap-2.5 rounded-full border border-[#111111]/10 bg-[#111111] px-4 sm:px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(17,17,17,0.14)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#D7A43A] hover:text-[#111111]";

  const locationButtonClass =
    "inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 sm:px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-sm transition-all duration-300 hover:border-[#E7C679] hover:bg-[#FFF5D6] hover:text-[#A45A18]";

  const badgeClass =
    "absolute -top-2 -right-2 rounded-full bg-[#FFF5D6] px-2.5 py-0.5 text-[11px] font-semibold text-[#111111] shadow-[0_10px_20px_rgba(217,177,94,0.22)]";

  const closeMenu = () => setOpen(false);

  const goHome = () => {
    if (pathname === "/") {
      const heroSection = document.getElementById("home");

      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      closeMenu();
      return;
    }

    navigate("/");
    closeMenu();
  };

  const goToPage = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/6 bg-white shadow-[0_20px_50px_rgba(17,24,39,0.12)]">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D9B15E]/75 to-transparent" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-3.5 flex items-center justify-between gap-4"
        style={{ contain: "layout style paint" }}
      >
        <Link
          to="/"
          onClick={goHome}
          className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-[1.01] shrink-0"
          aria-label="Go to home"
        >
          <BrandLogo theme="light" compact variant="navbar" />
        </Link>

        <div className="flex items-center md:hidden gap-3">
          <button
            onClick={onCartClick}
            className={`${actionButtonClass} relative px-3.5 sm:px-4`}
            aria-label="Open cart"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className={badgeClass}>{cartCount}</span>}
          </button>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative z-50 rounded-full border border-black/10 bg-white p-2.5 text-[#111111] shadow-sm transition-all duration-300 hover:border-[#E7C679] hover:bg-[#FFF5D6] hover:text-[#A45A18]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <button onClick={goHome} className={navButtonClass("/")}>
            Home
          </button>
          <button onClick={() => goToPage("/menu")} className={navButtonClass("/menu")}>
            Menu
          </button>
          <button onClick={() => goToPage("/about")} className={navButtonClass("/about")}>
            About Us
          </button>
          <button
            onClick={() => goToPage("/gallery")}
            className={navButtonClass("/gallery")}
          >
            Gallery
          </button>
          <button
            onClick={() => goToPage("/contact")}
            className={navButtonClass("/contact")}
          >
            Contact
          </button>

          <a
            href={siteConfig.locationUrl}
            target="_blank"
            rel="noreferrer"
            className={locationButtonClass}
          >
            <MapPin size={16} />
            Location
          </a>

          <button onClick={onCartClick} className={`${actionButtonClass} relative`}>
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && <span className={badgeClass}>{cartCount}</span>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full px-4 pt-3 z-40">
          <div className="rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_28px_60px_rgba(17,24,39,0.16)]">
            <div className="flex flex-col gap-3 text-sm">
              <button onClick={goHome} className={mobileNavButtonClass("/")}>
                Home
              </button>
              <button onClick={() => goToPage("/menu")} className={mobileNavButtonClass("/menu")}>
                Menu
              </button>
              <button
                onClick={() => goToPage("/about")}
                className={mobileNavButtonClass("/about")}
              >
                About Us
              </button>
              <button
                onClick={() => goToPage("/gallery")}
                className={mobileNavButtonClass("/gallery")}
              >
                Gallery
              </button>
              <button
                onClick={() => goToPage("/contact")}
                className={mobileNavButtonClass("/contact")}
              >
                Contact
              </button>

              <a
                href={siteConfig.locationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-2xl border border-black/8 bg-[#111111] px-4 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#D7A43A] hover:text-[#111111]"
              >
                <MapPin size={16} />
                Location
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
