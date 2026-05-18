import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/modals/ModalContext";
import BookingModal from "@/components/modals/BookingModal";
import ContactModal from "@/components/modals/ContactModal";

export default function Home() {
  return (
    <ModalProvider>
      <Navbar />
      <Hero />
      <Services />
      <Classes />
      <Pricing />
      <Team />
      <Membership />
      <Footer />
      <BookingModal />
      <ContactModal />
    </ModalProvider>
  );
}
