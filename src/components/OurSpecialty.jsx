import React from "react";
import specialtyMughlai from "../assets/images/mughlai.avif";
import specialtyIndian from "../assets/images/butterchicken naan.avif";
import specialtyChinese from "../assets/images/chinese.avif";

const zoomAnimation = `
  @keyframes zoomInSmooth {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.08);
    }
  }

  .our-specialty-image:hover {
    animation: zoomInSmooth 0.6s ease-out forwards;
  }

  @media (pointer: coarse) {
    .our-specialty-image:active {
      animation: zoomInSmooth 0.6s ease-out forwards;
    }
  }
`;

export default function OurSpecialty() {
  const images = [
    {
      src: specialtyMughlai,
      alt: "Mughlai biryani in a clay pot with golden rice and chicken",
    },
    {
      src: specialtyIndian,
      alt: "Creamy butter chicken or paneer curry in a white bowl garnished with cilantro",
    },
    {
      src: specialtyChinese,
      alt: "Glazed orange chicken or honey chili potato with glossy sauce",
    },
  ];

  return (
    <section
      id="specialty"
      className="w-full relative overflow-hidden py-20 sm:py-24 bg-[#0F0F0F] deferred-section"
      aria-label="Our Specialty"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 18% 12%, rgba(199,91,18,0.14) 0%, transparent 28%), radial-gradient(ellipse at 84% 88%, rgba(199,91,18,0.1) 0%, transparent 24%), url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'120\\' height=\\'120\\' viewBox=\\'0 0 120 120\\'><rect width=\\'120\\' height=\\'120\\' fill=\\'none\\'/><circle cx=\\'60\\' cy=\\'60\\' r=\\'1\\' fill=\\'rgba(255,255,255,0.025)\\'/></svg>')",
        backgroundBlendMode: "overlay, overlay, normal",
      }}
    >
      <style>{zoomAnimation}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-28 h-px bg-white/15 block" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="12" cy="12" r="3" fill="#C75B12" />
          </svg>
          <span className="w-28 h-px bg-white/15 block" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4 text-[#EAEAEA] tracking-[0.08em] text-shadow-soft">
          Our Specialty
        </h2>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-base sm:text-lg font-light text-[#A8A8A8]">
            From North Indian classics to Chinese favourites, there's something
            here for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-56 sm:h-64 md:h-72 rounded-[18px] overflow-hidden shadow-[0_22px_50px_rgba(0,0,0,0.32)] border border-white/10 bg-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="our-specialty-image w-full h-full object-cover premium-image transition-transform duration-600 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 40px 80px rgba(0, 0, 0, 0.58)" }}
              />
              <div className="absolute left-4 bottom-4 z-20 text-left">
                <span className="text-xs uppercase tracking-[0.26em] text-[#EAEAEA] font-medium drop-shadow-lg">
                  {idx === 0 ? "Mughlai" : idx === 1 ? "Indian" : "Chinese"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="w-28 h-px bg-white/15 block" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="12" cy="12" r="3" fill="#C75B12" />
          </svg>
          <span className="w-28 h-px bg-white/15 block" />
        </div>
      </div>
    </section>
  );
}
