'use client'
import React, { useState } from "react";
import Button from "../../Button/Button";
import { HorizontalNewsThumbnail } from "./HorizontalNewsThumbnail";
import VerticalNewsThumbnail from "./VerticalNewsThumbnail";
import { useLayoutEffect } from 'react';
import newsData  from './newsdata.json';
import Image from "next/image";
import { useRouter } from "next/navigation";

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen;
};

const NewsHero = () => {
  const router = useRouter(); 
  const isLargeScreen = useIsLargeScreen();

  const handleButtonClick = () => {
    router.push('/news'); 
  };
    return (
      <div className="h-auto lg:w-1/2 relative">
        
        <Image src="/images/landing-page/news/bg-news-full.png" width={200} height={200} alt="background news section" className="absolute -z-30 w-[400px] scale-[370%] md:scale-[400%] md:translate-y-56  translate-x-1/2 top-32 lg:hidden" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4 mx-auto"> 
            
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="13" fill="none" viewBox="0 0 45 13" className="scale-110">
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="M21.053 11.671 1.803 7.42c-1.071-.237-1.07-1.753 0-1.99l19.25-4.252c1.072-.236 1.822-.236 2.894 0l19.25 4.253c1.07.236 1.071 1.752 0 1.989l-19.25 4.252c-1.072.237-1.822.237-2.894 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.548 9.878-12.67-2.8c-.705-.155-.704-1.153 0-1.308l12.67-2.799c.705-.156 1.2-.156 1.904 0l12.67 2.799c.705.155.705 1.153 0 1.309l-12.67 2.799c-.705.155-1.199.155-1.904 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.981 8.308-6.91-1.527c-.385-.084-.385-.629 0-.714l6.91-1.526a2.147 2.147 0 0 1 1.039 0l6.91 1.526c.385.085.385.63 0 .714l-6.91 1.527a2.15 2.15 0 0 1-1.039 0Z" clipRule="evenodd"/>
            </svg>  
  
            <h2 className="text-c-yellow font-reikna lg:text-5xl text-4xl">News</h2>
  
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="13" fill="none" viewBox="0 0 45 13" className="scale-110">
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="M21.053 11.671 1.803 7.42c-1.071-.237-1.07-1.753 0-1.99l19.25-4.252c1.072-.236 1.822-.236 2.894 0l19.25 4.253c1.07.236 1.071 1.752 0 1.989l-19.25 4.252c-1.072.237-1.822.237-2.894 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.548 9.878-12.67-2.8c-.705-.155-.704-1.153 0-1.308l12.67-2.799c.705-.156 1.2-.156 1.904 0l12.67 2.799c.705.155.705 1.153 0 1.309l-12.67 2.799c-.705.155-1.199.155-1.904 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.981 8.308-6.91-1.527c-.385-.084-.385-.629 0-.714l6.91-1.526a2.147 2.147 0 0 1 1.039 0l6.91 1.526c.385.085.385.63 0 .714l-6.91 1.527a2.15 2.15 0 0 1-1.039 0Z" clipRule="evenodd"/>
            </svg> 
  
          </div>
          
          <div className="max-w-xl mx-6 sm:mx-auto">
            
            <hr className='mx-auto max-w-sm lg:max-w-full lg:mx-0 border-c-green-dark border-[1px]'/>
            {newsData.map((news) => (
            isLargeScreen ? (
              <div key={news.id}>
                <HorizontalNewsThumbnail
                  key={news.id}
                  {...news}
                />
              <hr className='mx-auto max-w-sm lg:max-w-full lg:mx-0 border-c-green-dark border-[1px]'/>

              </div>
              
            ) : (
              <div key={news.id}>
                <VerticalNewsThumbnail
                  key={news.id}
                  {...news}
                />
              <hr className='mx-auto max-w-sm lg:max-w-full lg:mx-0 border-c-green-dark border-[1px]'/>


              </div>
            )
          ))}

          <div className="w-full h-auto mt-12 lg:mt-8 flex justify-center lg:justify-end " onClick={handleButtonClick}>
            <Button 
              text='READ MORE'
              isPrimary={false}
              isAction={true}
              className=''
              
            />
          </div>
                      
              
        </div>
      </div>
    </div>
  )
}
    

export default NewsHero;
