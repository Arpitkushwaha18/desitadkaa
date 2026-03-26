import {
  ArrowRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "../data/siteConfig";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#12100E] text-white pt-12 sm:pt-16 pb-32 sm:pb-24 border-t border-[#E6C06A]/12"
      style={{ contain: "layout style" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(181,84,24,0.28), transparent 30%), radial-gradient(circle at bottom right, rgba(230,192,106,0.12), transparent 24%), linear-gradient(180deg, #17120F 0%, #12100E 54%, #0F0D0B 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6C06A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.8fr_0.95fr_0.95fr]">
            <div className="rounded-[26px] border border-white/8 bg-black/10 p-6 sm:p-7">
              <BrandLogo theme="dark" />
              <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-white/72">
                Open-air dining, simple food, and a place people enjoy coming
                back to.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E6C06A]/40 bg-[#FFF3D1] px-4 py-2.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:scale-[1.02] hover:bg-[#E6C06A]"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#E6C06A]/40 hover:bg-white/12 hover:text-[#F5D888]"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="rounded-[26px] border border-white/8 bg-black/10 p-6">
              <h4 className="text-[#F5D888] font-medium mb-4 text-sm uppercase tracking-[0.32em]">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-white/72">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#F5D888]"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-white/8 bg-black/10 p-6">
              <h4 className="text-[#F5D888] font-medium mb-4 text-sm uppercase tracking-[0.32em]">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-white/72">
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-start gap-3 hover:text-[#F5D888] transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5" />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.emailHref}
                    className="inline-flex items-start gap-3 hover:text-[#F5D888] transition-colors break-all"
                  >
                    <ArrowRight className="w-4 h-4 mt-0.5" />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="inline-flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#F5D888]" />
                  <span>{siteConfig.locationLabel}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[26px] border border-white/8 bg-black/10 p-6">
              <h4 className="text-[#F5D888] font-medium mb-4 text-sm uppercase tracking-[0.32em]">
                Dining Hours
              </h4>
              <div className="space-y-3 text-sm text-white/72">
                <div className="inline-flex items-start gap-3">
                  <Clock3 className="w-4 h-4 mt-0.5 text-[#F5D888]" />
                  <div>
                    <p>Mon - Fri: 11AM - 11PM</p>
                    <p>Sat - Sun: 10AM - 12AM</p>
                  </div>
                </div>
                <p className="text-[#F5D888] font-semibold">
                  Swiggy ordering available daily.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/8 text-white/76 transition-all duration-300 hover:border-[#E6C06A]/40 hover:bg-[#FFF3D1] hover:text-[#111111]"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/8 text-white/76 transition-all duration-300 hover:border-[#E6C06A]/40 hover:bg-[#FFF3D1] hover:text-[#111111]"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-white/52">
            <p>{"\u00A9"} 2026 Desi Tadka.</p>
            <p>Open-air dining in Kalyanpur, Kanpur.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
