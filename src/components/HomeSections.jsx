import CategoryShowcase from "./CategoryShowcase";
import OurSpecialty from "./OurSpecialty";
import About from "./About";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import ContactCTA from "./ContactCTA";
import OrderNow from "./OrderNow";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { homeCategoryCards } from "../data/homeCategoryCards";

export default function HomeSections() {
  return (
    <>
      <CategoryShowcase categories={homeCategoryCards} />
      <OurSpecialty />
      <About />
      <Gallery />
      <Testimonials />
      <ContactCTA />
      <OrderNow />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
