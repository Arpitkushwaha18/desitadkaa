import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SeoManager from "./components/SeoManager";

const Home = lazy(() => import("./pages/Home"));
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
      <Suspense fallback={<div className="min-h-screen bg-creamBeige" aria-hidden="true" />}>
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
