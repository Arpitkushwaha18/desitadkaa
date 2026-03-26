import whatsappIcon from "../assets/images/whatsapp icon.png";
import { siteConfig } from "../data/siteConfig";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-[#0F0F0F]/92 hover:bg-[#181818] active:scale-95 text-white px-4 py-4 sm:px-5 sm:py-4 rounded-full shadow-[0_18px_40px_rgba(15,15,15,0.25)] border border-white/10 hover:border-[#25D366]/40 flex items-center gap-2 transition-all duration-300 font-medium text-sm sm:text-base backdrop-blur-md"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
      />
      <span className="hidden sm:inline">Chat</span>
    </a>
  );
}
