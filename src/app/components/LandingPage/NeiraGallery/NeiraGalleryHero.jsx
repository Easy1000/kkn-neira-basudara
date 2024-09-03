'use client'
import React from 'react'
import './gallery-styles.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '/src/app/components/Button/Button';
import Link from 'next/link';
import Pic1 from '/public/images/landing-page/neira-gallery/c2.png'
import Pic2 from '/public/images/landing-page/neira-gallery/c2.png'
import Pic3 from '/public/images/landing-page/neira-gallery/c3.png'
import Pic4 from '/public/images/landing-page/neira-gallery/c4.png'
import Pic5 from '/public/images/landing-page/neira-gallery/c5.png'
import Pic6 from '/public/images/landing-page/neira-gallery/c6.png'
import Pic7 from '/public/images/landing-page/neira-gallery/c7.png'
import Pic8 from '/public/images/landing-page/neira-gallery/c8.png'
import Pic9 from '/public/images/landing-page/neira-gallery/c9.png'


const NeiraGalleryHero = () => {
  const router = useRouter();

  return (
    <div className='lg:mt-72 w-full  md:bg-transparent h-auto '>
        <div className="flex flex-col ">
        <div className="flex flex-row items-center gap-4 mx-auto mt-20 lg:mb-14"> 
            
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="13" fill="none" viewBox="0 0 45 13" className="scale-110">
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="M21.053 11.671 1.803 7.42c-1.071-.237-1.07-1.753 0-1.99l19.25-4.252c1.072-.236 1.822-.236 2.894 0l19.25 4.253c1.07.236 1.071 1.752 0 1.989l-19.25 4.252c-1.072.237-1.822.237-2.894 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.548 9.878-12.67-2.8c-.705-.155-.704-1.153 0-1.308l12.67-2.799c.705-.156 1.2-.156 1.904 0l12.67 2.799c.705.155.705 1.153 0 1.309l-12.67 2.799c-.705.155-1.199.155-1.904 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.981 8.308-6.91-1.527c-.385-.084-.385-.629 0-.714l6.91-1.526a2.147 2.147 0 0 1 1.039 0l6.91 1.526c.385.085.385.63 0 .714l-6.91 1.527a2.15 2.15 0 0 1-1.039 0Z" clipRule="evenodd"/>
            </svg>  
  
            <h2 className="text-c-yellow font-reikna lg:text-5xl text-4xl ">Neira Gallery</h2>
  
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="13" fill="none" viewBox="0 0 45 13" className="scale-110">
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="M21.053 11.671 1.803 7.42c-1.071-.237-1.07-1.753 0-1.99l19.25-4.252c1.072-.236 1.822-.236 2.894 0l19.25 4.253c1.07.236 1.071 1.752 0 1.989l-19.25 4.252c-1.072.237-1.822.237-2.894 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.548 9.878-12.67-2.8c-.705-.155-.704-1.153 0-1.308l12.67-2.799c.705-.156 1.2-.156 1.904 0l12.67 2.799c.705.155.705 1.153 0 1.309l-12.67 2.799c-.705.155-1.199.155-1.904 0Z" clipRule="evenodd"/>
              <path stroke="#629A9D" strokeMiterlimit="22.926" strokeWidth=".472" d="m21.981 8.308-6.91-1.527c-.385-.084-.385-.629 0-.714l6.91-1.526a2.147 2.147 0 0 1 1.039 0l6.91 1.526c.385.085.385.63 0 .714l-6.91 1.527a2.15 2.15 0 0 1-1.039 0Z" clipRule="evenodd"/>
            </svg> 
  
          </div>
        </div>

        {/* slider */}
        <div className='relative w-full lg:h-[1128px] h-[728px]  grid grid-rows-3 lg:gap-6  gap-2 overflow-x-hidden  m-auto  '>
            {/* slidetrack */}
            <div className='w-[3600px] flex flex-row lg:gap-6 gap-2'>
            
                <div className='slide hover:scale-110 transform duration-300 h-full w-[524px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic1} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic2} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic3} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[524px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic1} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic2} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic3} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[524px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic1} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic2} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                
            </div>

            {/* slidetrack 2*/}
            <div className='w-[3460px] flex flex-row lg:gap-6 gap-2 -translate-x-[50%] slide-2'>
            
                <div className='transform duration-300 h-full w-[341px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic4} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='transform duration-300 h-full w-[341px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic5} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='transform duration-300 h-full w-[707px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic6} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='transform duration-300 h-full w-[341px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic4} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='transform duration-300 h-full w-[341px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic5} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='transform duration-300 h-full w-[707px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic6} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='transform duration-300 h-full w-[341px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic4} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='transform duration-300 h-full w-[341px] bg-slate-500 flex relative '><Image className='object-cover' src={Pic5} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                
                
                
                
            </div>

            {/* slidetrack-3 */}
            <div className='w-[3600px] flex flex-row gap-2 lg:gap-6'>
            
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic7} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[524px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic8} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic9} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic7} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[524px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic8} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic9} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[376px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic7} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                <div className='slide hover:scale-110 transform duration-300 h-full w-[524px] bg-slate-500 flex relative'><Image className='object-cover' src={Pic8} alt='galeri neira' fill={true}/><p className='absolute bottom-8 left-6'>Snorkeling Points</p></div>
                
                
            </div>

        </div>

        <div className=''>
          <div className='flex justify-around lg:py-20 px-16 py-4'>
            <div className='flex flex-col lg:max-w-screen-md lg:gap-2 hover:border-white border-2 border-transparent hover:border-2 rounded-md p-4  lg:p-8 lg:rounded-[30px] hover:bg-white/10 transform duration-150 hover:cursor-pointer' onClick={() => router.push('/gallery?filter=Aktivitas%20KKN')}>
              <h2 className='font-reikna lg:text-6xl text-3xl text-c-green'>Aktivitas KKN</h2>
              <p className='text-xs lg:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. </p>
              <p className='hidden lg:flex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. </p>
              
            </div>

            <div className='flex flex-col lg:max-w-screen-md lg:gap-2 hover:border-white border-2 border-transparent hover:border-2 rounded-md p-4  lg:p-8 lg:rounded-[30px] text-right hover:bg-white/10  transform duration-150 hover:cursor-pointer' onClick={() => router.push('/gallery?filter=Explore%20Banda')}>
              <h2 className='font-reikna lg:text-6xl text-3xl text-c-green'>Explore Banda</h2>
              <p className='text-xs lg:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. </p>
              <p className='hidden lg:flex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. </p>  
            </div>

          </div>
        
          <Link href="/gallery">
            <Button 
              text='SEE MORE'
              isPrimary={false}
              isAction={true}
              // path={'/gallery'}
              className='flex justify-center'
              />
          </Link>

        </div>
        
        
    </div>
  )
}

export default NeiraGalleryHero;