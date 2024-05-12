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


import './konten-interaktif-styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const KontenInteraktif = () => {
    return (
      <div className="overflow-x-clip relative lg:mt-72">
        <Image src={GradientBackground} className="scale-[175%] absolute -z-20" quality={100}/>
        
        <Swiper
        effect={'coverflow'}
        
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
      
        <SwiperSlide>
          <Image src={Carousel1} className="scale-[150%]" quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Carousel2} className="scale-[150%]" quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Carousel3} className="scale-[150%]" quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Carousel4} className="scale-[150%]" quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Carousel5} className="scale-[150%]" quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Carousel6} className="scale-[150%]" quality={100}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Carousel7} className="scale-[150%]" quality={100}/>
        </SwiperSlide>

        
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" fill="none" viewBox="0 0 30 52">
            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="7.333" d="M26 4 4 26l22 22"/>
          </svg>
        </div>
        <div className="swiper-button-next slider-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" fill="none" viewBox="0 0 30 52">
            <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="7.333" d="m4 4 22 22L4 48"/>
          </svg>
        </div>
        <div className="swiper-pagination"></div>
      </div>
        
        <div className='flex justify-center lg:-translate-y-20'>
          <Button 
            text="SEE MORE"
            isPrimary={false}
            isAction={true}
          />

        </div>
      </div>
    )
}

export default KontenInteraktif;
  