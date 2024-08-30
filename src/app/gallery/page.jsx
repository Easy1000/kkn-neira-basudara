'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OrnamentLeft from "/public/images/neira-gallery/ornament-left.png";
import OrnamentRight from "/public/images/neira-gallery/ornament-right.png";
import OrnamentLeftDesktop from "/public/images/neira-gallery/ornament-left-desktop.png";
import OrnamentRightDesktop from "/public/images/neira-gallery/ornament-right-desktop.png";
import sampleGalleryData from "./sampleGalleryData";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility
  const [currentIndex, setCurrentIndex] = useState(0); // State for tracking current index
  const [selectedCategory, setSelectedCategory] = useState('Semua'); // State for selected category

  // Function to open popup with selected image
  const openPopup = (index) => {
    setSelectedImage(filteredData[index]);
    setIsPopupVisible(true);
    setCurrentIndex(index);
  };

  // Function to close popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  // Function to navigate to previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredData.length) % filteredData.length;
    setSelectedImage(filteredData[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Function to navigate to next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredData.length;
    setSelectedImage(filteredData[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Filter images based on selected category
  const filteredData = selectedCategory === 'Semua'
    ? sampleGalleryData
    : sampleGalleryData.filter(item => item.category === selectedCategory);

  return (
    <div className="">
      <Navbar />

      {/* Ornaments and Heading */}
      <Image src={OrnamentLeft} alt="ornament left" className="absolute top-0 left-0 -z-20 scale-75 lg:hidden" />
      <Image src={OrnamentRight} alt="ornament right" className="absolute top-0 right-0 -z-20 scale-75 lg:hidden" />
      <Image src={OrnamentLeftDesktop} alt="ornament left desktop" className="lg:absolute top-0 left-0 -z-20 hidden" />
      <Image src={OrnamentRightDesktop} alt="ornament right desktop" className="lg:absolute top-0 right-0 -z-20 hidden" />

      <div className="mt-24 lg:mt-44 flex flex-col justify-center ">
        <h1 className="font-reikna text-c-green text-6xl text-center lg:text-7xl">Neira Gallery</h1>
        
        {/* Filter buttons */}
        <div className="gap-4 flex flex-col lg:flex-row mt-6 lg:mt-14 lg:mx-auto">
          <label className="text-center mx-auto">
            <input
              type="radio"
              value="Semua"
              checked={selectedCategory === 'Semua'}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="hidden"
            />
            <div className={`cursor-pointer border-[1px] border-white w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w-56 ${selectedCategory === 'Semua' ? 'border-c-yellow text-c-yellow' : ''}`}>
              Semua
            </div>
          </label>
          <label className="text-center mx-auto">
            <input
              type="radio"
              value="Aktivitas KKN"
              checked={selectedCategory === 'Aktivitas KKN'}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="hidden"
            />
            <div className={`cursor-pointer border-[1px] border-white w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w-56 ${selectedCategory === 'Aktivitas KKN' ? 'border-c-yellow text-c-yellow' : ''}`}>
              Aktivitas KKN
            </div>
          </label>
          <label className="text-center mx-auto">
            <input
              type="radio"
              value="Explore Banda"
              checked={selectedCategory === 'Explore Banda'}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="hidden"
            />
            <div className={`cursor-pointer border-[1px] border-white w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w-56 ${selectedCategory === 'Explore Banda' ? 'border-c-yellow text-c-yellow' : ''}`}>
              Explore Banda
            </div>
          </label>
        </div>
        
        <p className="text-center text-xs mt-12 max-w-72 mx-auto lg:text-base lg:max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum...</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-[350px] lg:w-[1450px] lg:gap-12 mx-auto mt-12">
        {filteredData.map((item, index) => (
          <div key={item.id} onClick={() => openPopup(index)} className="cursor-pointer">
            <img
              src={item.path}
              alt={item.description}
              className="w-40 h-40 lg:w-[450px] lg:h-[450px] object-cover"
              width={450}
              height={450}
            />
          </div>
        ))}
      </div>

      {/* Popup for selected image */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button onClick={closePopup} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
            <img
              src={selectedImage.path}
              alt={selectedImage.description}
              className="max-w-full max-h-full"
              width={800}
              height={800}
            />
            <div className="flex justify-between mt-4">
              <button onClick={prevImage} className="text-white text-2xl">&larr;</button>
              <button onClick={nextImage} className="text-white text-2xl">&rarr;</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Gallery;
