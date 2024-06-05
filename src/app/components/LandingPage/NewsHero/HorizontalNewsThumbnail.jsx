import React from 'react'
import Image from 'next/image'
export const HorizontalNewsThumbnail = ({category, date, title, subTitle, imgPath}) => {
  return (
    <div>
        <div className='flex lg:gap-8 lg:py-5 gap-3 md:gap-6 lg:min-h-56'>          
            {/* <div className='md:py-4 h-full w-auto lg:py-0 lg:w-1/3 '>
                <Image src={imgPath} alt='thumbnail news' width={200} height={200} className='h-full w-auto lg:object-cover' />
            </div> */}
            <div className='flex hover:cursor-pointer'>
                <Image src={imgPath} alt='thumbnail news' width={200} height={200} className='h-full w-auto lg:object-cover' />               
            </div>
            <div className='flex flex-col justify-evenly lg:gap-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-8 items-center'>
                        <p className='uppercase hover:cursor-pointer text-xs lg:text-base md:text-sm'>{category}</p>
                        <div className='scale-[60%] lg:scale-100 lg:hidden xl:flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" fill="none" viewBox="0 0 9 12" className='w-auto h-4'>
                                <path fill="#4C7C7F" d="M0 11.724h9l-2.919-4.67H9L4.573 0 .243 7.054h2.87L0 11.724Z"/>
                            </svg>
                        </div>

                    </div>
                    <p className='text-xs md:text-sm lg:hidden xl:flex  '>{date}</p>
                </div>

                <div className='lg:max-w-xs flex flex-col justify-center hover:cursor-pointer'>
                    <h2 className='font-manjari lg:text-xl font-bold hover:underline hover:cursor-pointer text-sm md:text-lg'>{title}</h2>
                    <p className=' text-xs md:text-sm lg:hidden xl:flex'>{subTitle}</p>
                </div>

            </div>

        </div>
        
        

    </div>
  )
}
