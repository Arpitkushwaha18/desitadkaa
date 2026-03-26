import masalaDosaImage from "../assets/images/Masala Dosa.avif";
import tablesImage from "../assets/images/Tables.avif";
import frontImage from "../assets/images/Restaurant-front.avif";

const galleryStories = [
  {
    title: "The food",
    image: masalaDosaImage,
    imageClassName: "",
    text:
      "A closer look at Desi Tadka means seeing the dishes people come here for - freshly served, filling, and full of familiar flavour.",
  },
  {
    title: "The space",
    image: tablesImage,
    imageClassName: "",
    text:
      "From open-air evenings to relaxed table setups, the space feels simple, warm, and easy to settle into.",
  },
  {
    title: "The moments",
    image: frontImage,
    imageClassName: "scale-[1.12] object-center",
    text:
      "The gallery also captures the small moments people come here for - meals shared, conversations, and evenings that feel real.",
  },
];

const moments = [
  "The food, the space, and the moments people come here for",
  "Open-air evenings that feel relaxed and easy",
  "Freshly served dishes that look as satisfying as they taste",
  "A simple, warm, and real atmosphere throughout",
];

export default function GalleryPageExtra() {
  return (
    <section className="section-padding bg-[#FCFAF6] deferred-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-subtitle">Gallery</h2>
          <h2 className="section-title text-deepMaroon">
            A closer look at Desi Tadka
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {galleryStories.map((story) => (
            <div
              key={story.title}
              className="group bg-white rounded-[20px] border border-black/5 shadow-[0_18px_38px_rgba(15,15,15,0.08)] overflow-hidden hover:shadow-[0_24px_48px_rgba(15,15,15,0.12)] transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className={`w-full h-full object-cover premium-image transition-transform duration-500 group-hover:scale-105 ${story.imageClassName || ""}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-deepMaroon mb-3 tracking-[0.04em]">
                  {story.title}
                </h3>
                <p className="text-luxeGray leading-relaxed text-sm sm:text-base">
                  {story.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8">
          <div className="rounded-[22px] border border-black/5 bg-white p-6 sm:p-8 shadow-[0_18px_38px_rgba(15,15,15,0.08)]">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-deepMaroon mb-4 tracking-[0.04em]">
              A closer look
            </h3>
            <p className="text-luxeGray leading-relaxed text-sm sm:text-base mb-6">
              A closer look at Desi Tadka - the food, the space, and the
              moments people come here for.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {moments.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/5 bg-[#F8F3EC] px-4 py-4 text-sm sm:text-base text-deepMaroon font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="dark-surface rounded-[22px] p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-white mb-4 tracking-[0.04em]">
              Our Gallery
            </h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              From open-air evenings to freshly served dishes, everything here
              is simple, warm, and real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
