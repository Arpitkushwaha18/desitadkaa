import { useEffect } from "react";

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
      <div className="bg-desiRed text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm sm:text-base flex items-center gap-2">
        <span className="text-lg">✓</span>
        {message}
      </div>
    </div>
  );
}
