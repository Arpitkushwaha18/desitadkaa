import { Search, X } from "lucide-react";

export default function SearchBar({ searchQuery, onSearch }) {
  const lowerQuery = searchQuery.toLowerCase().trim();

  const commonTypos = {
    panner: "paneer",
    pannir: "paneer",
    chilly: "chilli",
    chili: "chilli",
    manchuriyan: "manchurian",
    biriyani: "biryani",
    dossa: "dosa",
    tanduri: "tandoori",
  };

  const corrected =
    commonTypos[lowerQuery] ||
    Object.keys(commonTypos).find((k) => lowerQuery.includes(k));

  return (
    <section className="py-5 sm:py-6 bg-[#FCFAF6]/90 border-b border-black/5 sticky top-[72px] sm:top-[78px] z-40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-saffronGold w-5 h-5 transition-colors group-focus-within:text-deepGold" />

          <input
            type="search"
            placeholder="Search paneer, tandoori, dosa, biryani..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-12 pr-12 py-3.5 bg-white/95 border border-black/10 rounded-xl text-deepMaroon placeholder-[#8D877F] font-normal text-base focus:outline-none focus:border-saffronGold focus:ring-2 focus:ring-saffronGold/20 transition-all duration-300 shadow-sm hover:shadow-md hover:border-saffronGold/30"
          />

          {searchQuery && (
            <button
              onClick={() => onSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-luxeGray hover:text-deepMaroon p-1 rounded-lg hover:bg-saffronGold/10 transition-all duration-300"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {searchQuery && (
          <div className="mt-3 text-sm flex flex-wrap items-center gap-2 text-luxeGray">
            <span>Showing results for:</span>
            <span className="font-semibold text-saffronGold">"{searchQuery}"</span>
            {corrected && corrected !== lowerQuery && (
              <button
                onClick={() => onSearch(corrected)}
                className="text-xs bg-saffronGold/10 text-saffronGold px-3 py-1 rounded-full hover:bg-saffronGold/15 transition-colors font-medium"
              >
                Did you mean: {corrected}?
              </button>
            )}
          </div>
        )}

        {!searchQuery && (
          <div className="mt-3 text-xs sm:text-sm text-luxeGray opacity-85 font-light">
            Popular: Paneer Butter Masala, Tandoori Prawns, Masala Dosa, Butter
            Naan, Tandoori Chicken...
          </div>
        )}
      </div>
    </section>
  );
}
