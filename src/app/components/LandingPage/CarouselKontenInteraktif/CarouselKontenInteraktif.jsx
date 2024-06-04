import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


import './carouselStyles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Button from '../../Button/Button';

const videodata = [
    {
        id: 1,
        name: 'video1',
        path: '/videos/interactive-carousel/video-3.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7315950235539295493'
    },
    {
        id: 2,
        name: 'video2',
        path: '/videos/interactive-carousel/video-1.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7351399344391654661'
    },
    {
        id: 3,
        name: 'video3',
        path: '/videos/interactive-carousel/video-2.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7346049840876440838'
    },
    {
        id: 4,
        name: 'video6',
        path: '/videos/interactive-carousel/video-6.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7374731281042656518'
    },
    {
        id: 5,
        name: 'video4',
        path: '/videos/interactive-carousel/video-4.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7345450970526010629'
    },
    {
        id: 5,
        name: 'video2',
        path: '/videos/interactive-carousel/video-2.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7351399344391654661'
    },
    {
        id: 6,
        name: 'video4',
        path: '/videos/interactive-carousel/video-4.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7345450970526010629'
    },
    {
        id: 7,
        name: 'video1',
        path: '/videos/interactive-carousel/video-1.mp4',
        url: 'https://www.tiktok.com/@neira.basudara/video/7351399344391654661'
    },
]

export default function App() {
    const [isPlaying, setIsPlaying] = useState(null);
    const swiperRef = useRef(null);
  
    const handleSlideChange = () => {
      setIsPlaying(null); // Reset playing state on slide change
    };
  
    const handleVideoClick = (url, isActive) => {
      if (isActive) {
        window.open(url, '_blank'); // Open URL in new tab only if active
      }
    };

  return (
    <div className='w-full relative'>
        <div className='overflow-y-visible relative'>
            <div className='w-full h-screen  absolute'>
                <img src = '/images/landing-page/konten-interaktif/Group 132.png' className='absolute -z-50 w-full h-auto lg:hidden object-cover scale-[175%]'/>
            </div>
            <div className='w-full h-screen object-cover absolute '>
                <img src = '/images/landing-page/konten-interaktif/Group 130(1).png' className='absolute opacity-0 lg:opacity-100 -z-50 w-screen h-full  object-cover scale-150 2xl:scale-[220%] 2xl:-translate-y-12 -translate-y-72'/>
            </div>
            

        </div>
        <div className='my-64 md:my-96 lg:my-[450px]'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                // slidesPerView={3}
                navigation={true}
                loop={true}
                onSlideChange={handleSlideChange}
                autoplay={true}
                

                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        // spaceBetween: 10,
                        
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },              
                    1024: {
                    slidesPerView: 5,
                    // spaceBetween: 30,
                    },
                }}
                lazy={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 5,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="   mx-auto "
                ref={swiperRef}
            >
            {videodata.map((data) => (
                <SwiperSlide key={data.id}>
                <video
                    key={data.id}
                    width={400}
                    height={800}  
                    muted
                    loop
                    
                    // paused={isPlaying !== data.id} // Pause other videos
                    // onPlay={() => setIsPlaying(data.id)} // Update playing state
                    // onClick={() => {
                    // console.log('Video clicked:', data.url, swiperRef.current.activeIndex === index);
                    // handleVideoClick(data.url, swiperRef.current.activeIndex === index);
                    // }}
                    
                >
                    <source src={data.path} type="video/mp4" />
                </video>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className='flex mt-10 lg:mt-20'>
                <Button 
                    text='SEE MORE'
                    isAction={true}
                    isPrimary={false}
                    className='mx-auto'
                />

            </div>
        </div>
        
    </div>
  );
}
