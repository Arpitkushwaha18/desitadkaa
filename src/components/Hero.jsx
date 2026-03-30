import {
  MapPin,
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../data/siteConfig";

const slides = [
  {
    id: 1,
    title: "Our Taste is Our Identity",
    hindi: "हमारा स्वाद ही हमारी पहचान है",
    subtitle: "Classic recipes, real spices, and food you'll come back for.",
    image: "/hero-main.avif",
    imageSmall: "/hero-main.avif",
    alt: "authentic Indian thali with spices and warm traditional setup",
    objectPosition: "center center",
  },
  {
    id: 2,
    title: "Fresh from the Tandoor",
    hindi: "तंदूर से ताज़ा",
    subtitle: "Smoky kebabs and tandoor favourites, served hot.",
    image: "/hero-tandoor.avif",
    imageSmall: "/hero-tandoor.avif",
    alt: "tandoori prawns and grilled platter closeup",
    objectPosition: "center center",
  },
  {
    id: 3,
    title: "Rich, Creamy Classics",
    hindi: "रिच और मलाईदार स्वाद",
    subtitle: "Butter chicken, soft naan, and rich gravies done right.",
    image: "/hero-butter-chicken.avif",
    imageSmall: "/hero-butter-chicken.avif",
    alt: "butter chicken closeup with garnish",
    objectPosition: "center center",
  },
  {
    id: 4,
    title: "Biryani, Done Right",
    hindi: "दम वाली बिरयानी",
    subtitle: "Slow-cooked biryani with deep, comforting flavour.",
    image: "/hero-biryani.avif",
    imageSmall: "/hero-biryani.avif",
    alt: "saffron biryani with raita and garnish",
    objectPosition: "center center",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]));
  const timeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const preloadedSlidesRef = useRef(new Set([0]));

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const resetTransitionTimeout = () => {
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
  };

  const markTransition = () => {
    resetTransitionTimeout();
    transitionTimeoutRef.current = setTimeout(() => {
      setPrevious(null);
    }, 900);
  };

  const markSlideLoaded = (index) => {
    setLoadedSlides((previousSlides) => {
      if (previousSlides.has(index)) return previousSlides;

      const nextSlides = new Set(previousSlides);
      nextSlides.add(index);
      return nextSlides;
    });
  };

  const preloadSlide = (index, priority = "low") => {
    if (index < 0 || index >= slides.length) return;
    if (typeof window === "undefined") return;
    if (preloadedSlidesRef.current.has(index)) return;

    preloadedSlidesRef.current.add(index);

    const slide = slides[index];
    const isDesktopViewport = window.matchMedia("(min-width: 1024px)").matches;
    const imageSource = isDesktopViewport
      ? slide.image
      : slide.imageSmall || slide.image;
    const image = new window.Image();

    image.decoding = "async";
    image.fetchPriority = priority;
    image.src = imageSource;

    if (image.complete) {
      markSlideLoaded(index);
      return;
    }

    image.onload = () => {
      markSlideLoaded(index);
    };

    image.onerror = () => {
      preloadedSlidesRef.current.delete(index);
    };
  };

  const goToSlide = (nextIndex) => {
    if (nextIndex === current) return;

    setPrevious(current);
    setCurrent(nextIndex);
    markTransition();
    resetTimeout();
  };

  const goToNext = () => {
    goToSlide(current === slides.length - 1 ? 0 : current + 1);
  };

  const goToPrevious = () => {
    goToSlide(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleTouchStart = (event) => {
    touchEndX.current = null;
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      goToNext();
    } else if (diff < -threshold) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    resetTimeout();
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 6000);

    return () => resetTimeout();
  }, [current]);

  useEffect(() => () => resetTransitionTimeout(), []);

  useEffect(() => {
    markSlideLoaded(current);

    const nextIndex = (current + 1) % slides.length;
    const previousIndex = (current - 1 + slides.length) % slides.length;

    preloadSlide(nextIndex);
    preloadSlide(previousIndex);
  }, [current]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const warmRemainingSlides = () => {
      slides.forEach((_, index) => {
        if (index !== current) preloadSlide(index);
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(warmRemainingSlides, {
        timeout: 2500,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(warmRemainingSlides, 1800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0F0F0F]"
      aria-label="Hero carousel"
      style={{ contain: "layout style paint" }}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
              index === current
                ? "opacity-100 z-10 hero-slide-active"
                : index === previous
                  ? "opacity-0 z-0"
                  : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={index !== current}
          >
            {(loadedSlides.has(index) ||
              index === current ||
              index === previous) && (
              <picture className="block w-full h-full">
                <source media="(min-width:1024px)" srcSet={slide.image} />
                <img
                  src={slide.imageSmall || slide.image}
                  alt={slide.alt || slide.title}
                  loading={index === current ? "eager" : "lazy"}
                  fetchPriority={index === current ? "high" : "low"}
                  decoding={index === current ? "sync" : "async"}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: slide.objectPosition }}
                  onLoad={() => markSlideLoaded(index)}
                />
              </picture>
            )}
          </div>
        ))}

        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.56) 26%, rgba(10,10,10,0.24) 52%, rgba(10,10,10,0.1) 72%, rgba(10,10,10,0.2) 100%), linear-gradient(180deg, rgba(10,10,10,0.16) 0%, rgba(10,10,10,0.08) 18%, rgba(10,10,10,0.28) 42%, rgba(10,10,10,0.72) 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 74%, rgba(0,0,0,0.56) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-40 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-36 md:pb-44 min-h-[75vh] sm:min-h-[80vh] md:h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left text-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <a
          href={siteConfig.locationUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-[11px] sm:text-xs rounded-full bg-white/10 backdrop-blur-md border border-white/12 shadow-sm uppercase tracking-[0.22em]"
        >
          <MapPin className="w-3.5 h-3.5 text-[#F0C56A]" />
          <span className="text-[#EAEAEA]">Kalyanpur, Kanpur UP</span>
        </a>

        <div className="w-full max-w-3xl mx-auto md:mx-0 px-6 py-8 sm:px-8 sm:py-10 md:px-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.4rem] font-semibold leading-[0.96] mb-5 text-white text-shadow-soft tracking-[0.01em]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {slides[current].title}
          </h1>

          <div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F0D06E] mb-5 font-medium"
            style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
          >
            {slides[current].hindi}
          </div>

          <p className="text-base sm:text-lg md:text-[1.05rem] text-[#F4F1EC] mb-9 max-w-2xl font-light">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <button
              onClick={() => scrollTo("menu")}
              className="inline-flex items-center justify-center gap-2 px-10 sm:px-12 py-4 rounded-[14px] text-base sm:text-lg font-semibold text-[#6A3A17] bg-gradient-to-r from-[#FFD451] via-[#FFE07A] to-[#F7E39B] transition-all duration-300 hover:scale-[1.03] shadow-[0_18px_36px_rgba(255,212,81,0.22)]"
            >
              View Menu
              <ArrowRight size={18} className="ml-1" />
            </button>

            <a
              href={siteConfig.swiggyUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/14 transition-all duration-300"
            >
              Order Online
              <Phone size={16} />
            </a>
          </div>
        </div>

        <div className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-50">
          <button
            aria-label="Previous slide"
            onClick={goToPrevious}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/24 hover:bg-black/38 text-white flex items-center justify-center opacity-80 transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-50">
          <button
            aria-label="Next slide"
            onClick={goToNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/24 hover:bg-black/38 text-white flex items-center justify-center opacity-80 transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? "w-3 h-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.42)]"
                  : "w-2.5 h-2.5 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
