import { Flame } from "lucide-react";

export default function BrandLogo({
  theme = "dark",
  className = "",
  compact = false,
  variant = "default",
  showSubtitle = true,
}) {
  const isDark = theme === "dark";
  const isNavbar = variant === "navbar";
  const flameSize = compact ? "w-5 h-5" : "w-[1.35rem] h-[1.35rem]";

  const titleClasses = isDark ? "text-[#D98A4A]" : "text-[#B55418]";
  const subtitleClasses = isDark ? "text-[#EAEAEA]/76" : "text-[#6E675F]";

  return (
    <div
      className={`inline-flex flex-col items-start justify-center ${
        compact ? "gap-1" : "gap-1.5"
      } ${className}`}
    >
      <span className="inline-flex items-center gap-2">
        {isNavbar ? (
          <span
            className={`font-playfair font-semibold ${
              compact ? "text-[1.12rem] sm:text-[1.32rem]" : "text-[1.4rem] sm:text-[1.62rem]"
            } tracking-[0.02em] leading-none drop-shadow-[0_8px_18px_rgba(17,24,39,0.08)]`}
          >
            <span
              className="text-[#111111]"
              style={{ WebkitTextStroke: "0.2px rgba(17, 24, 39, 0.16)" }}
            >
              Desi
            </span>
            <span
              className="ml-1 text-[#B55418]"
              style={{ WebkitTextStroke: "0.2px rgba(123, 75, 42, 0.14)" }}
            >
              Tadka
            </span>
          </span>
        ) : (
          <span
            className={`font-playfair font-semibold ${
              compact ? "text-[1.24rem] sm:text-[1.44rem]" : "text-[1.48rem] sm:text-[1.76rem]"
            } tracking-[0.08em] leading-none drop-shadow-[0_8px_18px_rgba(17,24,39,0.08)]`}
          >
            <span className={isDark ? "text-[#F4C27A]" : "text-[#111111]"}>
              Desi
            </span>
            <span className={`ml-1 ${titleClasses}`}>Tadka</span>
          </span>
        )}
        <Flame
          className={`${flameSize} ${
            isNavbar
              ? "text-[#8A4A12] fill-[#E6B94D]"
              : "text-[#C75B12] fill-[#C75B12]/20"
          }`}
          strokeWidth={1.9}
          aria-hidden="true"
        />
      </span>

      {showSubtitle && (
        <span
          className={`${
            compact ? "text-[0.48rem] sm:text-[0.52rem]" : "text-[0.54rem] sm:text-[0.62rem]"
          } font-medium uppercase tracking-[0.34em] ${
            isNavbar
              ? "text-[#5E6A3D] drop-shadow-[0_6px_14px_rgba(94,106,61,0.12)]"
              : subtitleClasses
          }`}
          style={
            isNavbar
              ? { WebkitTextStroke: "0.16px rgba(94, 106, 61, 0.12)" }
              : undefined
          }
        >
          Open-Air Restaurant
        </span>
      )}
    </div>
  );
}
