const imageModules = import.meta.glob("../assets/images/*.{png,jpg,jpeg,avif,webp}", {
  eager: true,
  import: "default",
});

const normalizeImageKey = (value = "") =>
  value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/&/g, " and ")
    .replace(/[_-]+/g, " ")
    .replace(/\bsoyaa\b/g, " soya ")
    .replace(/\bchilly\b/g, " chilli ")
    .replace(/\bdaal\b/g, " dal ")
    .replace(/\bkadhai\b/g, " kadai ")
    .replace(/\btanndoori\b/g, " tandoori ")
    .replace(/\bvej\b/g, " veg ")
    .replace(/\bdesi ghee\b/g, " ")
    .replace(/\bseasonal\b/g, " ")
    .replace(/\bbarra\b/g, " ")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const imageLibrary = new Map(
  Object.entries(imageModules).map(([path, src]) => {
    const filename = path.split("/").pop() || path;
    return [normalizeImageKey(filename), src];
  }),
);

const resolveImage = (...candidates) => {
  for (const candidate of candidates) {
    const normalized = normalizeImageKey(candidate);

    if (!normalized) continue;

    if (imageLibrary.has(normalized)) {
      return imageLibrary.get(normalized);
    }
  }

  return "";
};

const itemImageAliases = {
  "Paneer Tikka": ["Paneer Tikka", "paneer_tikka"],
  "Paneer Malai Tikka": ["paneer malai tikka"],
  "Tandoori Soya Chaap": ["Tandoori soyaa chaap"],
  "Tandoori Malai Soya Chaap": ["Tandoori malai chaap"],
  "Tandoori Soya Chaap Stuffed": ["Soya chaap Barra", "Tandoori soyaa chaap"],
  "Special Dahi Kebab": ["Tandoori aloo", "main"],
  "Tandoori Roti": ["Tanndoori Roti Butter"],
  "Tandoori Roti Butter": ["Tanndoori Roti Butter"],
  "Plain Naan": ["Plain naan"],
  "Butter Naan": ["butter naan"],
  "Garlic Naan": ["Garlic naan"],
  "Lachha Paratha": ["Lachha paratha"],
  "Garlic Lachha Paratha": ["Lachha paratha"],
  "Chilli Garlic Lachha Paratha": ["Lachha paratha"],
  "Dal Fry": ["Daal fry desi ghee"],
  "Dal Tadka": ["Tadka daal"],
  "Aloo Tamatar Dry": ["Jeera aloo"],
  "Aloo Tamatar Gravy": ["Jeera aloo"],
  "Dum Aloo": ["Jeera aloo"],
  "Mix Veg Dry": ["mix veg seasonal"],
  "Aloo Gobhi Dry": ["mix veg seasonal"],
  "Gobhi Matar Dry": ["mix veg seasonal"],
  "Veg Korma Dry": ["mix veg seasonal"],
  "Paneer Istu": ["Paneer masala"],
  "Paneer Korma": ["Paneer masala"],
  "Kadhai Paneer": ["kadhai paneer"],
  "Shahi Paneer": ["Shahi paneer"],
  "Handi Paneer": ["Handi paneer"],
  "Paneer Butter Masala": ["Paneer butter masala"],
  "Paneer Do Pyaza": ["Paneer masala"],
  "Paneer Tamatar Fry": ["Paneer masala"],
  "Masala Mushroom": ["mix veg seasonal"],
  "Tamatar Mushroom": ["mix veg seasonal"],
  "Plain Rice": ["plain rice"],
  "Jeera Rice": ["jeera rice"],
  "Veg Pulao": ["veg pulao"],
  "Veg Biryani": ["steamed pulao", "veg pulao"],
  "Idli Sambar": ["istockphoto-1305918321-612x612"],
  "Sambar Vada": ["istockphoto-1305918321-612x612"],
  "Paper Dosa": ["istockphoto-1305918321-612x612"],
  "Masala Dosa": ["istockphoto-1305918321-612x612"],
  "Onion Masala Dosa": ["istockphoto-1305918321-612x612"],
  "Paneer Masala Dosa": ["Paneer masala"],
  "Paneer Dosa": ["Paneer masala"],
  "Chilli Paneer Dosa": ["chilly paneer dry"],
  "Manchurian Dosa": ["veg manchurian dry"],
  "Chowmein Dosa": ["veg noodle"],
  "Rava Masala Dosa": ["istockphoto-1305918321-612x612"],
  "Rava Paneer Dosa": ["Paneer masala"],
  "Chilli Mushroom Dosa": ["mix veg seasonal"],
  "Chilli Potato Dosa": ["chilly potato"],
  "Schezwan Dosa": ["istockphoto-1305918321-612x612"],
  "Desi Tadka Special Dosa": ["Desi Tadka Special Dosa"],
  "Chilli Paneer Dry": ["chilly paneer dry"],
  "Chilli Paneer Gravy": ["chilly paneer gravy"],
  "Chilli Paneer Garlic Gravy": ["Garlic chilly paneer"],
  "Paneer Manchurian Dry": ["veg manchurian dry"],
  "Paneer Manchurian Gravy": ["chilly munchurian with fried rice"],
  "Veg Manchurian Dry": ["veg manchurian dry"],
  "Veg Manchurian Gravy": ["chilly munchurian with fried rice"],
  "Veg Noodles": ["veg noodle"],
  "Chilli Garlic Noodles": ["Garlic chilly paneer with noodles", "veg noodle"],
  "Hakka Noodles": ["veg noodle"],
  "Singapore Noodles": ["veg noodle"],
  "Paneer Noodles": ["chilly paneer with noodle"],
  "Veg Fried Rice": ["Chilly paneer with fried rice"],
  "Mix Fried Rice": ["chilly munchurian with fried rice"],
  "Garlic Fried Rice": ["Garlic chilly paneer with fried rice"],
  "Schezwan Fried Rice": ["Chilly paneer with fried rice"],
  "Paneer Fried Rice": ["Chilly paneer with fried rice"],
  "Chicken Tikka": ["istockphoto-2148388081-612x612"],
  "Chicken Malai Tikka": ["istockphoto-2148388081-612x612"],
  "Chicken Afgani Tikka": ["istockphoto-2148388081-612x612"],
  "Chicken Afghani Malai Tikka": ["istockphoto-2148388081-612x612"],
  "Tandoori Chicken": ["istockphoto-2148388081-612x612"],
  "Chicken Tikka Masala": ["istockphoto-2148388081-612x612"],
  "Butter Chicken Boneless": ["istockphoto-2148388081-612x612"],
  "Desi Mutton Masala": ["istockphoto-2148388081-612x612"],
  "Chicken Biryani": ["main"],
  "Mutton Biryani": ["main"],
  "Chicken Thali": ["main"],
  "Mutton Thali": ["main"],
};

const categoryImageAliases = {
  Starters: ["peanut masala", "Paneer Tikka"],
  "Main Course": ["Shahi paneer", "Paneer Butter Masala"],
  Chinese: ["Veg Manchurian Gravy", "chilly paneer dry"],
  Breads: ["Garlic naan", "Lachha paratha"],
  "Rice & Biryani": ["veg pulao", "jeera rice", "plain rice", "steamed pulao"],
  "South Indian": ["istockphoto-1305918321-612x612", "Paneer masala"],
  Thali: ["main", "istockphoto-1305918321-612x612"],
  "Non Vegs": ["istockphoto-2148388081-612x612", "main"],
};

export const categoryOrder = [
  "Starters",
  "Main Course",
  "Chinese",
  "Breads",
  "Rice & Biryani",
  "South Indian",
  "Thali",
  "Non Vegs",
];

export const slugifyCategory = (value = "") =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const categoryMeta = {
  Starters: {
    description: "Fresh tandoor starters and quick bites to start your meal right.",
    image: resolveImage(...categoryImageAliases.Starters),
  },
  "Main Course": {
    description: "Everyday favourites, rich gravies, and paneer dishes made fresh.",
    image: resolveImage(...categoryImageAliases["Main Course"]),
  },
  Chinese: {
    description: "Indo-Chinese dishes with bold flavours, noodles, and fried rice.",
    image: resolveImage(...categoryImageAliases.Chinese),
  },
  Breads: {
    description: "Fresh tandoor breads and parathas, made to pair with every dish.",
    image: resolveImage(...categoryImageAliases.Breads),
  },
  "Rice & Biryani": {
    description: "Simple rice, pulao, and biryani options to complete your meal.",
    image: resolveImage(...categoryImageAliases["Rice & Biryani"]),
  },
  "South Indian": {
    description: "Dosa, idli, and comfort dishes served hot and fresh.",
    image: resolveImage(...categoryImageAliases["South Indian"]),
  },
  Thali: {
    description: "Complete meals with a bit of everything on one plate.",
    image: resolveImage(...categoryImageAliases.Thali),
  },
  "Non Vegs": {
    description: "Chicken, fish, and mutton dishes across starters, curry, and rice.",
    image: resolveImage(...categoryImageAliases["Non Vegs"]),
  },
};

const categoryLabels = {
  "Non Vegs": "Non Veg",
};

const getCategoryLabel = (category) => categoryLabels[category] || category;

export const menuCategoryGroups = categoryOrder.map((category) => ({
  name: getCategoryLabel(category),
  description: categoryMeta[category]?.description,
  categories: [category],
  image: categoryMeta[category]?.image,
}));

const getItemImage = (item) =>
  resolveImage(item.name, ...(itemImageAliases[item.name] || []));

const item = (id, name, category, description, variants, popular = false) => ({
  id,
  name,
  category,
  description,
  variants,
  ...(popular ? { popular: true } : {}),
});

const one = (price, size = "Full") => [{ size, price }];
const two = (firstSize, firstPrice, secondSize, secondPrice) => [
  { size: firstSize, price: firstPrice },
  { size: secondSize, price: secondPrice },
];
const three = (
  firstSize,
  firstPrice,
  secondSize,
  secondPrice,
  thirdSize,
  thirdPrice,
) => [
  { size: firstSize, price: firstPrice },
  { size: secondSize, price: secondPrice },
  { size: thirdSize, price: thirdPrice },
];

const rawFoodData = [
  item(
    1,
    "Paneer Tikka",
    "Starters",
    "Smoky paneer cubes marinated in tandoori masala and roasted till charred.",
    one(140, "8 pcs"),
    true,
  ),
  item(
    2,
    "Paneer Malai Tikka",
    "Starters",
    "Creamy malai paneer tikka with a softer spice profile and rich finish.",
    one(160, "8 pcs"),
    true,
  ),
  item(
    3,
    "Methi Malai Tikka",
    "Starters",
    "Soft paneer with fresh methi notes in a creamy tandoori marinade.",
    one(150, "8 pcs"),
  ),
  item(
    4,
    "Tandoori Soya Chaap",
    "Starters",
    "Classic soya chaap with tandoori smoke, crisp edges, and juicy bite.",
    one(100, "8 pcs"),
    true,
  ),
  item(
    5,
    "Tandoori Malai Soya Chaap",
    "Starters",
    "Malai-style chaap with a buttery, mild, and creamy tandoor finish.",
    one(120, "8 pcs"),
    true,
  ),
  item(
    6,
    "Tandoori Soya Chaap Stuffed",
    "Starters",
    "Stuffed chaap with fuller flavor and a hearty tandoori texture.",
    one(140, "8 pcs"),
  ),
  item(
    7,
    "Special Dahi Kebab",
    "Starters",
    "Crisp outside and soft inside, this hung-curd kebab stays rich and mellow.",
    one(120),
  ),
  item(
    8,
    "Peanut Masala",
    "Starters",
    "A quick spicy peanut snack with onion, masala, and chatpata crunch.",
    one(50),
  ),

  item(9, "Dal Fry", "Main Course", "Yellow dal finished with garlic and jeera tadka.", two("Half", 50, "Full", 90), true),
  item(10, "Dal Tadka", "Main Course", "Tadka dal with deeper tempering and fuller spice.", one(100), true),
  item(11, "Dal Makhani", "Main Course", "Slow-cooked black dal with butter and cream.", two("Half", 90, "Full", 160), true),
  item(12, "Aloo Tamatar Dry", "Main Course", "Potato and tomato tossed in dry masala for a simple desi side.", two("Half", 50, "Full", 90)),
  item(13, "Aloo Tamatar Gravy", "Main Course", "Aloo-tamatar curry with light gravy and homestyle comfort.", two("Half", 60, "Full", 100)),
  item(14, "Dum Aloo", "Main Course", "Slow-cooked potatoes in a rich masala gravy.", two("Half", 70, "Full", 130)),
  item(15, "Mix Veg Dry", "Main Course", "Seasonal vegetables sauteed in Indian masala with a dry finish.", two("Half", 80, "Full", 150)),
  item(16, "Aloo Gobhi Dry", "Main Course", "Classic potato and cauliflower sabzi cooked dry and aromatic.", two("Half", 50, "Full", 90)),
  item(17, "Gobhi Matar Dry", "Main Course", "Cauliflower and peas tossed in a light home-style masala.", two("Half", 50, "Full", 90)),
  item(18, "Veg Korma Dry", "Main Course", "Veg korma-inspired mix with softer spices and a rich coating.", two("Half", 70, "Full", 130)),
  item(19, "Paneer Istu", "Main Course", "Paneer cooked in a lighter gravy with comforting Indian flavors.", one(100)),
  item(20, "Paneer Korma", "Main Course", "Paneer in mildly sweet and creamy korma-style gravy.", two("Half", 120, "Full", 220)),
  item(21, "Kadhai Paneer", "Main Course", "Paneer with capsicum and onion in bold kadai masala.", two("Half", 120, "Full", 220), true),
  item(22, "Shahi Paneer", "Main Course", "Royal paneer curry with creamy texture and balanced sweetness.", two("Half", 150, "Full", 250), true),
  item(23, "Handi Paneer", "Main Course", "Paneer finished in handi-style masala with a warm aromatic profile.", two("Half", 120, "Full", 220)),
  item(24, "Paneer Butter Masala", "Main Course", "Smooth buttery paneer gravy that stays rich and crowd-pleasing.", two("Half", 120, "Full", 220), true),
  item(25, "Paneer Do Pyaza", "Main Course", "Paneer with onion-forward gravy for a deeper desi bite.", two("Half", 120, "Full", 220)),
  item(26, "Paneer Tamatar Fry", "Main Course", "Paneer and tomato cooked together in a lighter masala base.", two("Half", 60, "Full", 100)),
  item(27, "Masala Mushroom", "Main Course", "Mushroom masala with bold gravy and earthy flavor.", two("Half", 150, "Full", 220)),
  item(28, "Tamatar Mushroom", "Main Course", "Mushroom in a tomato-led gravy with sharper tang and spice.", two("Half", 90, "Full", 160)),

  item(29, "Chilli Paneer Dry", "Chinese", "Crispy paneer tossed in hot chilli sauce with onion and capsicum.", two("Half", 70, "Full", 140), true),
  item(30, "Chilli Paneer Gravy", "Chinese", "Paneer in glossy chilli gravy that pairs well with noodles or rice.", two("Half", 80, "Full", 150)),
  item(31, "Chilli Paneer Garlic Gravy", "Chinese", "Extra garlic paneer gravy with stronger sauce and heat.", two("Half", 90, "Full", 170)),
  item(32, "Paneer Manchurian Dry", "Chinese", "Paneer Manchurian with a dry wok-style coating and big flavor.", two("Half", 70, "Full", 140)),
  item(33, "Paneer Manchurian Gravy", "Chinese", "Paneer in Manchurian gravy with saucy Indo-Chinese balance.", two("Half", 80, "Full", 150)),
  item(34, "Veg Manchurian Dry", "Chinese", "Crisp veg Manchurian balls tossed dry in garlic-chilli sauce.", two("Half", 50, "Full", 100), true),
  item(35, "Veg Manchurian Gravy", "Chinese", "Veg Manchurian in hot, savory, and glossy gravy.", two("Half", 60, "Full", 120)),
  item(36, "Veg Noodles", "Chinese", "Simple veg noodles tossed with fresh vegetables and sauce.", two("Half", 60, "Full", 100)),
  item(37, "Chilli Garlic Noodles", "Chinese", "Noodles with extra garlic, chilli kick, and wok-smoked flavor.", two("Half", 80, "Full", 150), true),
  item(38, "Hakka Noodles", "Chinese", "Classic hakka noodles with balanced seasoning and vegetable crunch.", two("Half", 90, "Full", 160)),
  item(39, "Singapore Noodles", "Chinese", "Singapore-style noodles with brighter spice and fuller seasoning.", two("Half", 90, "Full", 160)),
  item(40, "Paneer Noodles", "Chinese", "Hakka-style noodles enriched with paneer for a heartier plate.", two("Half", 80, "Full", 150)),
  item(41, "Veg Fried Rice", "Chinese", "Vegetable fried rice with wok flavor and soy-based seasoning.", two("Half", 70, "Full", 120), true),
  item(42, "Mix Fried Rice", "Chinese", "Mixed fried rice with more variety and a stronger savory note.", two("Half", 80, "Full", 150)),
  item(43, "Garlic Fried Rice", "Chinese", "Fried rice with a sharper garlic-led flavor profile.", two("Half", 90, "Full", 170)),
  item(44, "Schezwan Fried Rice", "Chinese", "Schezwan fried rice with extra heat and bold sauce.", two("Half", 90, "Full", 170)),
  item(45, "Paneer Fried Rice", "Chinese", "Paneer fried rice built for a richer, more filling Chinese plate.", two("Half", 100, "Full", 180)),

  item(46, "Tawa Roti", "Breads", "Everyday soft tawa roti served fresh and hot.", one(5, "Single")),
  item(47, "Tawa Roti Butter", "Breads", "Soft tawa roti finished with butter.", one(7, "Single")),
  item(48, "Tandoori Roti", "Breads", "Tandoor-baked roti with a firmer bite and smoky finish.", one(10, "Single")),
  item(49, "Tandoori Roti Butter", "Breads", "Tandoori roti glazed with butter for extra richness.", one(15, "Single")),
  item(50, "Plain Naan", "Breads", "Classic naan from the tandoor with a soft center.", one(15, "Single")),
  item(51, "Butter Naan", "Breads", "Soft naan brushed with butter, a reliable curry partner.", one(20, "Single"), true),
  item(52, "Garlic Naan", "Breads", "Garlic naan with buttery aroma and tandoor char.", one(25, "Single"), true),
  item(53, "Lachha Paratha", "Breads", "Layered paratha with flaky texture and hearty bite.", one(25, "Single")),
  item(54, "Garlic Lachha Paratha", "Breads", "Layered lachha paratha finished with garlic flavor.", one(35, "Single")),
  item(55, "Chilli Garlic Lachha Paratha", "Breads", "Lachha paratha with chilli-garlic punch and layered texture.", one(40, "Single")),

  item(56, "Plain Rice", "Rice & Biryani", "Simple steamed rice that pairs with every curry.", two("Half", 40, "Full", 70)),
  item(57, "Jeera Rice", "Rice & Biryani", "Fragrant jeera rice with light tempering and aroma.", two("Half", 50, "Full", 90)),
  item(58, "Veg Pulao", "Rice & Biryani", "Lightly spiced vegetable pulao for a balanced rice option.", one(60)),
  item(59, "Veg Biryani", "Rice & Biryani", "Layered veg biryani with stronger masala and fuller flavor.", one(70), true),

  item(60, "Normal Thali", "Thali", "Dal, sabzi, roti, rice, and essentials in one complete plate.", one(100), true),
  item(61, "Deluxe Thali", "Thali", "Upgraded thali with richer variety and fuller meal value.", one(150), true),
  item(62, "Super Deluxe Thali", "Thali", "A larger thali built for guests who want the most variety.", one(200), true),

  item(63, "Idli Sambar", "South Indian", "Soft idli served with sambar for a light and comforting meal.", one(50)),
  item(64, "Sambar Vada", "South Indian", "Crisp vada dipped or served with sambar.", one(70)),
  item(65, "Paper Dosa", "South Indian", "Large crisp dosa with classic South Indian simplicity.", one(60)),
  item(66, "Masala Dosa", "South Indian", "Crispy dosa filled with spiced aloo masala.", one(70), true),
  item(67, "Onion Masala Dosa", "South Indian", "Masala dosa with onion for extra sweetness and bite.", one(80)),
  item(68, "Paneer Masala Dosa", "South Indian", "Dosa with paneer masala filling for a richer twist.", one(100)),
  item(69, "Paneer Dosa", "South Indian", "Crisp dosa with paneer-focused filling and softer spice.", one(140)),
  item(70, "Chilli Paneer Dosa", "South Indian", "Dosa filled with spicy chilli paneer for Indo-South flavor.", one(160)),
  item(71, "Manchurian Dosa", "South Indian", "Dosa with Manchurian-style filling for a Chinese fusion touch.", one(140)),
  item(72, "Chowmein Dosa", "South Indian", "Dosa stuffed with noodles for a playful fusion option.", one(120)),
  item(73, "Rava Masala Dosa", "South Indian", "Rava dosa with masala filling and extra crisp texture.", one(140)),
  item(74, "Rava Paneer Dosa", "South Indian", "Rava dosa loaded with paneer filling for a fuller bite.", one(200)),
  item(75, "Chilli Mushroom Dosa", "South Indian", "Dosa with spicy mushroom filling and stronger wok notes.", one(180)),
  item(76, "Chilli Potato Dosa", "South Indian", "Dosa with chilli potato stuffing for a sharper spicy edge.", one(140)),
  item(77, "Schezwan Dosa", "South Indian", "Schezwan-style dosa with extra heat and saucy finish.", one(150)),
  {
    ...item(
      78,
      "Desi Tadka Special Dosa",
      "South Indian",
      "The house special loaded dosa for guests who want the biggest option.",
      one(250),
      true,
    ),
    image: resolveImage("Desi Tadka Special Dosa"),
  },

  item(79, "Chilli Chicken Dry", "Non Vegs", "Dry chilli chicken with capsicum, onion, and spicy sauce.", two("4 pcs", 90, "8 pcs", 180), true),
  item(80, "Chilli Chicken Gravy", "Non Vegs", "Chilli chicken in thick gravy that pairs easily with rice.", two("4 pcs", 100, "8 pcs", 200), true),
  item(81, "Garlic Chilli Chicken Dry", "Non Vegs", "Dry chilli chicken finished with stronger garlic flavor.", two("4 pcs", 90, "8 pcs", 180)),
  item(82, "Garlic Chilli Chicken Gravy", "Non Vegs", "Garlic-rich chicken gravy with chilli heat and glossy sauce.", two("4 pcs", 100, "8 pcs", 200)),
  item(83, "Chicken Fried Rice", "Non Vegs", "Chicken fried rice with savory wok seasoning and filling portions.", one(100)),
  item(84, "Chicken Garlic Fried Rice", "Non Vegs", "Garlic chicken fried rice with deeper aroma and extra punch.", one(120)),
  item(85, "Chicken Schezwan Fried Rice", "Non Vegs", "Chicken fried rice in Schezwan style with stronger heat.", one(120)),
  item(86, "Chicken Noodles", "Non Vegs", "Chicken noodles tossed with sauce and simple wok flavor.", one(100)),
  item(87, "Chicken Garlic Noodles", "Non Vegs", "Chicken noodles with a garlic-forward finish.", one(120)),
  item(88, "Chicken Manchurian", "Non Vegs", "Chicken Manchurian in saucy Indo-Chinese style.", one(100)),
  item(89, "Chicken Garlic Manchurian", "Non Vegs", "Garlic-forward chicken Manchurian with extra savory depth.", one(120)),
  item(90, "Chilli Chicken + Noodle", "Non Vegs", "A combo plate pairing chilli chicken with noodles.", one(130), true),
  item(91, "Garlic Chilli Chicken + Noodle", "Non Vegs", "Garlic chilli chicken served with noodles in one combo.", one(140)),
  item(92, "Chilli Chicken + Fried Rice", "Non Vegs", "Chilli chicken served with fried rice for a complete combo.", one(130), true),
  item(93, "Garlic Chilli Chicken + Fried Rice", "Non Vegs", "Garlic chilli chicken with fried rice in a heavier combo plate.", one(140)),
  item(94, "Chicken Manchurian + Noodles", "Non Vegs", "Chicken Manchurian paired with noodles in one serving.", one(130)),
  item(95, "Chicken Manchurian + Fried Rice", "Non Vegs", "Chicken Manchurian and fried rice combo for bigger appetite.", one(130)),
  item(96, "Fish Fry", "Non Vegs", "Fried fish portion with crisp coating and bold masala.", one(150, "250 g")),
  item(97, "Tandoori Fish Tikka", "Non Vegs", "Fish tikka from the tandoor with smoky and spicy finish.", one(180)),
  item(98, "Chicken Fry", "Non Vegs", "Quick-fried chicken portion with masala coating.", one(100, "250 g")),
  item(99, "Chicken Tikka", "Non Vegs", "Classic tandoori chicken tikka with juicy pieces and char.", one(160, "8 pcs"), true),
  item(100, "Chicken Malai Tikka", "Non Vegs", "Creamy chicken malai tikka with mild richness.", one(180, "8 pcs"), true),
  item(101, "Chicken Afgani Tikka", "Non Vegs", "Afghani-style chicken tikka with a richer, creamier profile.", one(170, "8 pcs")),
  item(102, "Chicken Afghani Malai Tikka", "Non Vegs", "Afghani malai tikka for an extra rich tandoori starter.", one(190, "8 pcs")),
  item(103, "Tandoori Chicken", "Non Vegs", "Signature tandoori chicken roasted for smoke, spice, and char.", two("Half", 230, "Full", 450), true),
  item(104, "Tandoori Chicken Kali Mirch", "Non Vegs", "Tandoori chicken with kali mirch-led spice and darker edge.", two("Half", 250, "Full", 490)),
  item(105, "Tandoori Chicken Afgani", "Non Vegs", "Afghani tandoori chicken with creamy marinade and smoke.", two("Half", 260, "Full", 500)),
  item(106, "Chicken Lollipop", "Non Vegs", "Chicken lollipop with crisp coating and restaurant-style appeal.", one(260, "4 pcs")),
  item(107, "Chicken Tangdi", "Non Vegs", "Tandoori-style tangdi with bigger portion and juicy bite.", one(280, "4 pcs")),
  item(108, "Chicken Malai Kebab", "Non Vegs", "Mild chicken kebab with creamy marinade and tender texture.", one(200)),
  item(109, "Tandoori Salad Non-Veg", "Non Vegs", "A tandoori-style non-veg salad plate with lighter feel.", one(150)),
  item(110, "Fish Curry", "Non Vegs", "Fish curry with homestyle gravy and softer spice.", one(130)),
  item(111, "Fish Masala", "Non Vegs", "Fish masala with thicker sauce and richer seasoning.", one(180)),
  item(112, "Fish Kali Mirch", "Non Vegs", "Fish in kali mirch-style gravy for peppery warmth.", one(160)),
  item(113, "Chicken Curry", "Non Vegs", "Classic chicken curry with balanced spice and desi gravy.", one(120)),
  item(114, "Chicken Tikka Masala", "Non Vegs", "Tandoori chicken tikka folded into rich masala gravy.", one(160), true),
  item(115, "Kadhai Chicken", "Non Vegs", "Chicken in kadai masala with capsicum and onion flavor.", one(180)),
  item(116, "Handi Chicken", "Non Vegs", "Handi-style chicken gravy with full-bodied Indian masala.", one(160, "3 pcs")),
  item(117, "Chicken Do Pyaza", "Non Vegs", "Onion-led chicken gravy for a classic North Indian taste.", one(150)),
  item(118, "Butter Chicken With Bone", "Non Vegs", "Butter chicken with bone for richer flavor and fuller gravy.", one(140, "3 pcs")),
  item(119, "Butter Chicken Boneless", "Non Vegs", "Boneless butter chicken in creamy tomato-butter gravy.", one(150, "3 pcs"), true),
  item(120, "Chicken Kali Mirch", "Non Vegs", "Chicken gravy with kali mirch spice and bold finish.", one(180)),
  item(121, "Chicken Lababdar", "Non Vegs", "Richer chicken lababdar with buttery masala profile.", one(180)),
  item(122, "Murgh Khada Masala", "Non Vegs", "Chicken in rustic khada masala with multiple serving sizes.", three("Quarter", 80, "Half", 150, "Full", 280)),
  item(123, "Egg Curry", "Non Vegs", "Boiled eggs in spiced curry for a simple and hearty plate.", one(80)),
  item(124, "Mutton Keema", "Non Vegs", "Minced mutton cooked with masala for a rich meaty dish.", one(260)),
  item(125, "Desi Mutton Masala", "Non Vegs", "Signature mutton masala with slow-cooked depth and full spice.", three("Quarter", 150, "Half", 290, "Full", 580), true),
  item(126, "Mutton Korma", "Non Vegs", "Mutton in korma-style gravy with richer texture and aroma.", one(260)),
  item(127, "Mutton Do Pyaza", "Non Vegs", "Mutton curry with onion-forward flavor and satisfying gravy.", two("Half", 180, "Full", 350)),
  item(128, "Keema Kaleji", "Non Vegs", "Keema and kaleji cooked together for a stronger non-veg plate.", one(260)),
  item(129, "Mutton Curry", "Non Vegs", "Classic mutton curry with balanced spice and deeper broth.", two("Half", 190, "Full", 360)),
  item(130, "Mutton Rogan Josh", "Non Vegs", "Rogan Josh-inspired mutton curry with bold red masala flavor.", two("Half", 140, "Full", 260)),
  item(131, "Mutton Rara", "Non Vegs", "Rara-style mutton gravy with stronger meat richness.", two("Half", 160, "Full", 300)),
  item(132, "Chicken Biryani", "Non Vegs", "Chicken biryani layered with masala rice and fuller flavor.", two("Half", 80, "Full", 150), true),
  item(133, "Mutton Biryani", "Non Vegs", "Mutton biryani with richer masala and heavier meat flavor.", two("Half", 120, "Full", 200), true),
  item(134, "Chicken Tikka Rice", "Non Vegs", "Chicken tikka rice for a tandoori-meets-rice meal option.", two("Half", 80, "Full", 150)),
  item(135, "Chicken Lollipop Rice", "Non Vegs", "Rice combo finished with chicken lollipop for bigger appetite.", two("Half", 110, "Full", 180)),
  item(136, "Chicken Leg Rice", "Non Vegs", "Rice plate topped with a fuller chicken leg serving.", one(150)),
  item(137, "Chicken Thali", "Non Vegs", "Chicken thali for a full non-veg meal in one plate.", one(180)),
  item(138, "Mutton Thali", "Non Vegs", "Mutton thali with richer gravies and heavier meal feel.", one(300)),
];

export const foodData = rawFoodData.map((menuItem) => ({
  ...menuItem,
  image: menuItem.image || getItemImage(menuItem),
})).filter((menuItem) => menuItem.image);

export const menuCategories = categoryOrder.filter((category) =>
  foodData.some((menuItem) => menuItem.category === category),
);

export default foodData;
