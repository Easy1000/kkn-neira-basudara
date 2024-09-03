'use client'
import React, { useRef, useState } from 'react';
import Image from "next/image";
import GradientBackground from "/src/public/assets/images/konten-interaktif/gradient-group.png";
import Button from '../../Button/Button';
import Carousel1 from "/src/public/assets/images/konten-interaktif/carousel-1.png";
import Carousel2 from "/src/public/assets/images/konten-interaktif/carousel-2.png";
import Carousel3 from "/src/public/assets/images/konten-interaktif/carousel-3.png";
import Carousel4 from "/src/public/assets/images/konten-interaktif/carousel-4.png";
import Carousel5 from "/src/public/assets/images/konten-interaktif/carousel-5.png";
import Carousel6 from "/src/public/assets/images/konten-interaktif/carousel-6.png";
import Carousel7 from "/src/public/assets/images/konten-interaktif/carousel-7.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import './konten-interaktif-styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const KontenInteraktif = () => {
    return (
      <div className='mt-20'>
        {/* mobile */}
        <div>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            navigation={true}
          >
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel1} alt='konten interaktif'/>
          </SwiperSlide>

          <SwiperSlide>
            <Image width={200} height={200} src={Carousel2} alt='konten interaktif'/>
          </SwiperSlide>

          <SwiperSlide>
            <Image width={200} height={200} src={Carousel3} alt='konten interaktif'/>
          </SwiperSlide>
          
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel4} alt='konten interaktif'/>
          </SwiperSlide>

          <SwiperSlide>
            <Image width={200} height={200} src={Carousel5} alt='konten interaktif'/>
          </SwiperSlide>

          <SwiperSlide>
            <Image width={200} height={200} src={Carousel6} alt='konten interaktif'/>
          </SwiperSlide>
        
          </Swiper>
        </div>

      </div>
    )
}

export default KontenInteraktif;
  