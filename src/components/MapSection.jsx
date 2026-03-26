import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function MapSection() {
  return (
    <section className="section-padding bg-[#F5F1EB] deferred-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-subtitle">Find Us</h2>
          <h2 className="section-title">Visit Desi Tadka</h2>
          <p className="text-luxeGray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Follow the map to reach our open-air restaurant in Kalyanpur, Kanpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="overflow-hidden rounded-[22px] border border-black/5 shadow-[0_20px_40px_rgba(15,15,15,0.08)] bg-white">
            <iframe
              title="Desi Tadka location map"
              src={siteConfig.mapEmbedUrl}
              className="w-full h-[320px] sm:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="dark-surface rounded-[22px] p-6 sm:p-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-saffronGold font-medium mb-4 uppercase tracking-[0.22em] text-sm">
              <MapPin className="w-5 h-5" />
              <span>Restaurant Location</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-white mb-4 tracking-[0.04em]">
              Desi Tadka, Kalyanpur
            </h3>

            <p className="text-white/78 text-base sm:text-lg leading-relaxed mb-8 font-light">
              {siteConfig.fullAddress}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>

              <a
                href={siteConfig.locationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !bg-white/95"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
