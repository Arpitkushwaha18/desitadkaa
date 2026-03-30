import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SeoManager from "./components/SeoManager";
import Home from "./pages/Home";

const Contact = lazy(() => import("./pages/Contact"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <SeoManager />
      <ScrollToTop />
      <Suspense
        fallback={
          <div
            className="min-h-screen bg-creamBeige flex items-center justify-center px-6"
            aria-hidden="true"
          >
            <div className="w-full max-w-sm rounded-[24px] border border-black/5 bg-white/80 px-6 py-8 text-center shadow-[0_18px_38px_rgba(15,15,15,0.08)] backdrop-blur-sm">
              <div className="mx-auto h-11 w-11 rounded-full border-2 border-saffronGold/25 border-t-saffronGold animate-spin" />
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-saffronGold">
                Desi Tadka
              </p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
