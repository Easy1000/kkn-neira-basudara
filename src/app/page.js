import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/LandingPage/Hero/Hero";
import News from "./components/LandingPage/News/News";
import KontenInteraktif from "./components/LandingPage/KontenInteraktif/KontenInteraktif";
import WhatsOnBanda from "./components/LandingPage/WhatsOnBanda/WhatsOnBanda";
import { ApaKataMereka } from "./components/LandingPage/ApaKataMereka/ApaKataMereka";
import NeiraGallery from "./components/LandingPage/NeiraGallery/NeiraGallery";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className=" w-auto h-auto mt-32 z-30 flex lg:flex-row lg:mx-48 lg:gap-12 ">
        <WhatsOnBanda />
        <News />
      </div>
      <KontenInteraktif />
      <ApaKataMereka />
      <NeiraGallery />
      <Footer />
      
    </main>
  );
}



