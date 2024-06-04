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

        {/* desktop */}
        {/* <div className="overflow-x-clip lg:mt-72 hidden lg:relative">
          <Image width={200} height={200} src={GradientBackground} alt='' className="scale-[175%] absolute -z-20" quality={100}/>
        
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
            <Image width={200} height={200} src={Carousel1} alt='konten interaktif' className="scale-[150%]" quality={100}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel2} alt='konten interaktif' className="scale-[150%]" quality={100}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel3} alt='konten interaktif' className="scale-[150%]" quality={100}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel4} alt='konten interaktif' className="scale-[150%]" quality={100}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel5} alt='konten interaktif' className="scale-[150%]" quality={100}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel6} alt='konten interaktif' className="scale-[150%]" quality={100}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={200} height={200} src={Carousel7} alt='konten interaktif' className="scale-[150%]" quality={100}/>
          </SwiperSlide>

          
          </Swiper>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" fill="none" viewBox="0 0 30 52">
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.333" d="M26 4 4 26l22 22"/>
              </svg>
            </div>
            <div className="swiper-button-next slider-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" fill="none" viewBox="0 0 30 52">
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.333" d="m4 4 22 22L4 48"/>
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
        </div> */}
      </div>
    )
}

export default KontenInteraktif;
  