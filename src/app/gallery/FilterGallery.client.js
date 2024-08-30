'use client';

import { useState } from "react";
import Image from "next/image";

const FilterGallery = ({ sampleGalleryData }) => {
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
        <div>
            {/* Filter buttons */}
            <div className="gap-4 flex flex-col lg:flex-row mt-6 lg:mt-14 lg:mx-auto lg:gap-0 lg:w-64 lg:justify-center">
                <label className="text-center mx-auto">
                    <input
                        type="radio"
                        value="Semua"
                        checked={selectedCategory === 'Semua'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="hidden"
                    />
                    <div className={`cursor-pointer border-[1px] border-white w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w- ${selectedCategory === 'Semua' ? 'border-c-yellow text-c-yellow' : ''}`}>
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
                    <div className={`cursor-pointer border-[1px] border-white w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w- ${selectedCategory === 'Aktivitas KKN' ? 'border-c-yellow text-c-yellow' : ''}`}>
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
                    <div className={`cursor-pointer border-[1px] border-white w-40 lg:py-1 rounded-[10px] lg:rounded-[13px] bg-[#666666]/45 font-reikna text-2xl lg:text-3xl lg:w- ${selectedCategory === 'Explore Banda' ? 'border-c-yellow text-c-yellow' : ''}`}>
                        Explore Banda
                    </div>
                </label>
            </div>

            <p className="text-center text-xs mt-12 max-w-72 mx-auto lg:text-base lg:max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum...</p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-center min-w-[350px] 2xl:w-[1450px] lg:gap-12 mx-auto mt-12">
                {filteredData.map((item, index) => (
                    <div key={item.id} onClick={() => openPopup(index)} className="cursor-pointer">
                        <img
                            src={item.link}
                            alt={item.caption}
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
                        <Image
                            src={selectedImage.link}
                            alt={selectedImage.caption}
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
        </div>
    )
}

export default FilterGallery
