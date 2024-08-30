import Image from 'next/image';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OrnamentLeft from "/public/images/neira-gallery/ornament-left.png";
import OrnamentRight from "/public/images/neira-gallery/ornament-right.png";
import OrnamentLeftDesktop from "/public/images/neira-gallery/ornament-left-desktop.png";
import OrnamentRightDesktop from "/public/images/neira-gallery/ornament-right-desktop.png";
import FilterGallery from './FilterGallery.client';
import { cache } from 'react';
import { prisma } from '../../../prisma/prisma';

async function Gallery() {
  const listImages = await getListImages()

  return (
    <div className="">
      <Navbar />

      {/* Ornaments and Heading */}
      <Image src={OrnamentLeft} alt="ornament left" className="absolute top-0 -left-5 -z-20 scale-75 md:scale-150 md:left-8 md:top-14 lg:hidden" />
      <Image src={OrnamentRight} alt="ornament right" className="absolute top-0 -right-5 -z-20 scale-75 md:right-8 md:top-14 lg:hidden md:scale-150" />
      <Image src={OrnamentLeftDesktop} alt="ornament left desktop" className="absolute top-0 left-0 -z-20 opacity-0 lg:opacity-100" />
      <Image src={OrnamentRightDesktop} alt="ornament right desktop" className="absolute top-0 right-0 -z-20 opacity-0 lg:opacity-100" />

      <div className="mt-24 lg:mt-44 flex flex-col justify-center ">
        <h1 className="font-reikna text-c-green text-6xl text-center lg:text-7xl">Neira Gallery</h1>
      </div>

      <FilterGallery sampleGalleryData={listImages} />


      <Footer />
    </div>
  );
}

export const getListImages = cache(async () => {
  const listImages = await prisma.gallery.findMany()

  return listImages
})

export default Gallery;
