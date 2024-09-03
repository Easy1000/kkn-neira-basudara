    import React, { useRef, useState } from 'react';
    // Import Swiper React components
    import { Swiper, SwiperSlide } from 'swiper/react';
    import Image from 'next/image';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/navigation';


    import './carouselStyles.css';

    // import required modules
    import { EffectCoverflow, Mousewheel, Navigation } from 'swiper/modules';
    import Button from '../../Button/Button';
    import Link from 'next/link';

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
            id: 6,
            name: 'video2',
            path: '/videos/interactive-carousel/video-2.mp4',
            url: 'https://www.tiktok.com/@neira.basudara/video/7351399344391654661'
        },
        {
            id: 7,
            name: 'video4',
            path: '/videos/interactive-carousel/video-4.mp4',
            url: 'https://www.tiktok.com/@neira.basudara/video/7345450970526010629'
        },
        {
            id: 8,
            name: 'video1',
            path: '/videos/interactive-carousel/video-1.mp4',
            url: 'https://www.tiktok.com/@neira.basudara/video/7351399344391654661'
        },
    ]

    export default function App() {
        
        const handleVideoClick = (videoId, url, swiper) => {
            // if (swiper.realIndex === getActiveVideoIndex(videodata, videoId)) {
              window.open(url, '_blank');
            // }
          };
        
        // const getActiveVideoIndex = (data, id) => {
        //     return data.findIndex(videoData => videoData.id === id);
        // };
          

        const handleSlideChange = (swiper) => {
            const activeSlideIndex = swiper.realIndex;
        
            // Loop through videos
            videodata.forEach((videoData, index) => {
                const videoElement = document.querySelector(`#video-${videoData.id}`); // Assuming unique video IDs
            if (index !== activeSlideIndex) {
                videoElement.pause(); // Pause inactive videos
                videoElement.currentTime = 0;
            } else {
                // Optional: Play the active video (if desired)
                videoElement.play();
                console.log(index)
            }
            });
        };

        

    return (
        <div className='w-full relative  overflow-x-clip'>
            
            <div className='overflow-y-visible relative'>
                
                <div className='w-full h-screen absolute '>
                    
                    <Image alt='ornamen 1' width={700} height={700} src = '/images/landing-page/konten-interaktif/Group 132.png' className='absolute -z-50 w-full h-auto lg:hidden object-cover scale-[175%]'/>
                </div>
                <div className='w-full h-screen object-cover absolute '>
                    <Image alt='ornamen 2' width={700} height={700} src = '/images/landing-page/konten-interaktif/Group 130(1).png' className='absolute opacity-0 lg:opacity-100 -z-50 w-screen h-full  object-cover scale-150 2xl:scale-[220%] 2xl:-translate-y-12 -translate-y-72'/>
                </div>
                

            </div>
            
            <div className='my-64 md:my-96 lg:my-[450px]'>
                
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    mousewheel={true}
                    direction={'horizontal'}
                    // slidesPerView={3}
                    navigation={true}
                    loop={true}
                    // autoplay={true}

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
                    
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 5,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Navigation, Mousewheel]}
                    className="mx-auto "
                    onSlideChange={handleSlideChange}



                >
                {videodata.map((videodata, index) => (
                <SwiperSlide key={videodata.id}>
                    <video
                    id={`video-${videodata.id}`} // Assuming unique video IDs
                    key={videodata.id}
                    width={400}
                    height={800}
                    muted={true}
                    loop
                    onClick={() => handleVideoClick(videodata.id, videodata.url)}
                    
                    >
                    <source src={videodata.path} type="video/mp4" />
                    </video>
                </SwiperSlide>
                ))}
                
                </Swiper>
                
            </div>
            <Link href='https://www.tiktok.com/@neira.basudara' target='_blank'>
                <Button 
                    text='SEE MORE'
                    isAction={true}
                    isPrimary={false}
                    className='z-50 flex justify-center -translate-y-56 md:-translate-y-80 lg:-translate-y-96 ' 
                />
            </Link>
            
                    
        </div>
    );
    }
