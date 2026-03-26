import swiggyLogo from "../assets/images/swiggy.png";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "../data/siteConfig";

export default function OrderNow() {
  return (
    <section
      id="order"
      className="w-full bg-[#FCFAF6] py-14 sm:py-16 border-y border-black/5 deferred-section"
      aria-label="Order Now"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 text-deepMaroon tracking-[0.06em]">
          Order Now
        </h2>

        <p className="text-sm sm:text-base text-luxeGray mb-10 max-w-2xl mx-auto">
          Order on Swiggy for quick delivery to your doorstep.
        </p>

        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          <a
            href={siteConfig.swiggyUrl}
            className="group relative overflow-hidden rounded-xl p-4 sm:p-5 bg-white border border-black/5 hover:border-saffronGold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-w-[180px] shadow-sm"
          >
            <div className="flex flex-col items-center justify-center gap-3 h-20 sm:h-24">
              <img
                src={swiggyLogo}
                alt="Swiggy"
                className="h-10 sm:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <span className="text-sm font-medium tracking-[0.18em] uppercase text-deepMaroon">
                Order Online
              </span>
            </div>
          </a>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl p-4 sm:p-5 bg-white border border-black/5 hover:border-saffronGold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-w-[180px] shadow-sm"
          >
            <div className="flex flex-col items-center justify-center gap-3 h-20 sm:h-24">
              <BrandLogo
                theme="light"
                compact
                className="items-center transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <span className="text-sm font-medium tracking-[0.18em] uppercase text-deepMaroon">
                WhatsApp Orders
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
