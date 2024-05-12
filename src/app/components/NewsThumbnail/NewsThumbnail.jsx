import React from 'react'
import Image from 'next/image'
import PicThumbnail from '/src/public/assets/images/news/news-thumbnail-2.png';
export const NewsThumbnail = () => {
  return (
    <div>
        
        <div className='flex lg:gap-8 lg:py-5'>
            
            <div className='w-60 h-40  hover:cursor-pointer'>
                <Image src={PicThumbnail}/>
            </div>
            <div className='flex flex-col justify-evenly'>
                <div className='flex justify-between items-center '>
                    <div className='flex gap-8 items-center'>
                        <p className='uppercase hover:cursor-pointer'>NATURE</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" fill="none" viewBox="0 0 9 12" className='w-auto h-4'>
                            <path fill="#4C7C7F" d="M0 11.724h9l-2.919-4.67H9L4.573 0 .243 7.054h2.87L0 11.724Z"/>
                        </svg>

                    </div>
                    <p>17 Agustus 2024</p>
                </div>

                <div className='lg:max-w-xs flex flex-col justify-center hover:cursor-pointer'>
                    <h2 className='font-manjari lg:text-xl font-bold hover:underline hover:cursor-pointer'>Benteng Belgica</h2>
                    <p className='lg:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

            </div>

        </div>
        
        

    </div>
  )
}
