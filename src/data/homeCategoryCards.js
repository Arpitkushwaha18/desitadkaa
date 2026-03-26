import chickenTikkaImage from "../assets/images/Chicken Tikka.avif";
import garlicNaanImage from "../assets/images/Garlic naan.avif";
import masalaDosaImage from "../assets/images/Masala Dosa.avif";
import normalThaliImage from "../assets/images/Normal Thali.avif";
import peanutMasalaImage from "../assets/images/peanut masala.avif";
import shahiPaneerImage from "../assets/images/Shahi Paneer.avif";
import vegManchurianImage from "../assets/images/Veg Manchurian Gravy.avif";
import vegPulaoImage from "../assets/images/veg pulao.avif";

export const homeCategoryCards = [
  {
    name: "Starters",
    slug: "starters",
    description: "Fresh tandoor starters and quick bites to start your meal right.",
    image: peanutMasalaImage,
    itemCount: 8,
    startingPrice: 50,
  },
  {
    name: "Main Course",
    slug: "main-course",
    description: "Everyday favourites, rich gravies, and paneer dishes made fresh.",
    image: shahiPaneerImage,
    itemCount: 20,
    startingPrice: 50,
  },
  {
    name: "Chinese",
    slug: "chinese",
    description: "Indo-Chinese dishes with bold flavours, noodles, and fried rice.",
    image: vegManchurianImage,
    itemCount: 17,
    startingPrice: 50,
  },
  {
    name: "Breads",
    slug: "breads",
    description: "Fresh tandoor breads and parathas, made to pair with every dish.",
    image: garlicNaanImage,
    itemCount: 10,
    startingPrice: 5,
  },
  {
    name: "Rice & Biryani",
    slug: "rice-and-biryani",
    description: "Simple rice, pulao, and biryani options to complete your meal.",
    image: vegPulaoImage,
    itemCount: 4,
    startingPrice: 40,
  },
  {
    name: "South Indian",
    slug: "south-indian",
    description: "Dosa, idli, and comfort dishes served hot and fresh.",
    image: masalaDosaImage,
    itemCount: 16,
    startingPrice: 50,
  },
  {
    name: "Thali",
    slug: "thali",
    description: "Complete meals with a bit of everything on one plate.",
    image: normalThaliImage,
    itemCount: 3,
    startingPrice: 100,
  },
  {
    name: "Non Veg",
    slug: "non-veg",
    description: "Chicken, fish, and mutton dishes across starters, curry, and rice.",
    image: chickenTikkaImage,
    itemCount: 60,
    startingPrice: 80,
  },
];

export default homeCategoryCards;
