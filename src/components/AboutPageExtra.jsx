const highlights = [
  {
    title: "Relaxed open-air setup",
    text:
      "Desi Tadka is known around Kalyanpur for its relaxed open-air setup and food that feels familiar.",
  },
  {
    title: "Something for everyone",
    text:
      "The menu is wide enough for everyone at the table - from paneer and tandoor to Chinese and South Indian dishes.",
  },
  {
    title: "Taste worth coming back for",
    text:
      "It's the kind of place where people come for simple, satisfying meals and keep coming back for the taste.",
  },
];

const details = [
  {
    title: "Open-air dining",
    text:
      "A relaxed setup makes it easy for families, groups, and regular guests to enjoy an evening meal comfortably.",
  },
  {
    title: "Wide menu",
    text:
      "From North Indian favourites to Chinese and South Indian dishes, the table has something for every kind of craving.",
  },
  {
    title: "Familiar flavour",
    text:
      "People return for meals that feel simple, satisfying, and easy to enjoy again and again.",
  },
];

export default function AboutPageExtra() {
  return (
    <section className="section-padding bg-[#F5F1EB] deferred-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-subtitle">About Us</h2>
          <h2 className="section-title text-deepMaroon">
            Why People Come Back
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[20px] border border-black/5 p-6 sm:p-7 shadow-[0_18px_38px_rgba(15,15,15,0.08)] hover:shadow-[0_24px_48px_rgba(15,15,15,0.12)] transition-all duration-300"
            >
              <h3 className="text-2xl font-playfair font-semibold text-deepMaroon mb-3 tracking-[0.04em]">
                {item.title}
              </h3>
              <p className="text-luxeGray leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-[22px] border border-black/5 p-6 sm:p-8 shadow-[0_18px_38px_rgba(15,15,15,0.08)]">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-deepMaroon mb-4 tracking-[0.04em]">
              Built around familiar favourites
            </h3>
            <p className="text-luxeGray leading-relaxed text-sm sm:text-base">
              The menu is broad enough for everyday meals, group dinners, and
              mixed cravings at the same table. Paneer, tandoor, Chinese, and
              South Indian dishes all sit comfortably together here.
            </p>
          </div>

          <div className="dark-surface rounded-[22px] p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-white mb-4 tracking-[0.04em]">
              A place people know and return to
            </h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              The open-air setting, familiar taste, and simple meal experience
              make Desi Tadka feel comfortable to come back to.
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-3xl sm:text-4xl font-playfair font-semibold text-deepMaroon tracking-[0.04em]">
              What keeps guests coming back
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {details.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-black/5 bg-white p-6 shadow-[0_18px_38px_rgba(15,15,15,0.08)] hover:shadow-[0_24px_48px_rgba(15,15,15,0.12)] transition-all duration-300"
              >
                <h4 className="text-xl sm:text-2xl font-playfair font-semibold text-deepMaroon mb-3 tracking-[0.04em]">
                  {item.title}
                </h4>
                <p className="text-luxeGray leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
