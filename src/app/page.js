'use client'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/LandingPage/Hero/Hero";
import NewsHero from "./components/LandingPage/NewsHero/NewsHero";
import CarouselKontenInteraktif from "./components/LandingPage/CarouselKontenInteraktif/CarouselKontenInteraktif";
import WhatsOnBanda from "./components/LandingPage/WhatsOnBanda/WhatsOnBanda";
import { ApaKataMereka } from "./components/LandingPage/ApaKataMereka/ApaKataMereka";
import NeiraGalleryHero from "./components/LandingPage/NeiraGallery/NeiraGalleryHero";
import Footer from "./components/Footer/Footer";
import React from "react";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="w-auto h-auto mt-32 z-30 flex flex-col lg:flex-row lg:mx-48 lg:gap-12 gap-20">
        <WhatsOnBanda />
        <NewsHero />
      </div>
      <CarouselKontenInteraktif />
      <ApaKataMereka />
      <NeiraGalleryHero />
      <Footer />
    </main>
  );
}



