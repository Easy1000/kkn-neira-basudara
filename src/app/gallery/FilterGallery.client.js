'use client';

import { useState } from "react";
import Image from "next/image";

const FilterGallery = ({ sampleGalleryData }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Semua');

    const openPopup = (index) => {
        setSelectedImage(filteredData[index]);
        setIsPopupVisible(true);
        setCurrentIndex(index);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + filteredData.length) % filteredData.length;
        setSelectedImage(filteredData[newIndex]);
        setCurrentIndex(newIndex);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % filteredData.length;
        setSelectedImage(filteredData[newIndex]);
        setCurrentIndex(newIndex);
    };

    const filteredData = selectedCategory === 'Semua'
        ? sampleGalleryData
        : sampleGalleryData.filter(item => item.category === selectedCategory);

    return (
        <div>
            {/* Filter buttons */}
            <div className="gap-4 flex flex-col lg:flex-row mt-6 lg:mt-14 lg:mx-auto lg:gap-4 lg:w-64 lg:justify-center">
                <label className="text-center mx-auto">
                    <input
                        type="radio"
                        value="Semua"
                        checked={selectedCategory === 'Semua'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="hidden"
                    />
                    <div className={`cursor-pointer border-[1px]  w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w- ${selectedCategory === 'Semua' ? 'border-c-yellow text-c-yellow' : ''}`}>
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
                    <div className={`cursor-pointer border-[1px]  w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w- ${selectedCategory === 'Aktivitas KKN' ? 'border-c-yellow text-c-yellow' : ''}`}>
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
                    <div className={`cursor-pointer border-[1px]  w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w- ${selectedCategory === 'Explore Banda' ? 'border-c-yellow text-c-yellow' : ''}`}>
                        Explore Banda
                    </div>
                </label>
            </div>

            <p className="text-center text-xs mt-12 max-w-72 mx-auto lg:text-base lg:max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum...</p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-[350px] lg:min-w-full xl:min-w-[1450px] lg:gap-12 mx-auto mt-12">
                {filteredData.map((item, index) => (
                    <div key={item.id} onClick={() => openPopup(index)} className="cursor-pointer">
                        <Image
                            src={item.path}
                            alt="sample"
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
                    <div className="relative max-w-full max-h-full p-4">
                        {/* Close button */}
                        <button onClick={closePopup} className="absolute top-4 right-4 text-white text-2xl z-10 scale-[250%] -translate-x-8 translate-y-6 drop-shadow-lg">
                            &times;
                        </button>
                        {/* Image and arrows */}
                        <div className="relative">
                            <Image
                                src={selectedImage.path}
                                alt={selectedImage.description}
                                className="max-w-auto max-h-[700px] object-contain"
                                width={600}
                                height={600}
                            />
                            <p className="text-sm mx-auto max-w-xl text-center mt-2">{selectedImage.description}</p>
                            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-14 text-white text-2xl z-10  lg:-translate-x-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" fill="none" viewBox="0 0 30 52">
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.333" d="M26 4 4 26l22 22" />
                                </svg>
                            </button>
                            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-14 text-white text-2xl z-10  lg:translate-x-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" fill="none" viewBox="0 0 30 52">
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.333" d="m4 4 22 22L4 48" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterGallery;
