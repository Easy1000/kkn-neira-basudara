import React from 'react'
import Image from 'next/image'

const Card = ({imagePath, title, subtitle, className}) => {
  return (
    <div>
        <div className={`w-full lg:h-[500px] h-auto backdrop-blur-md rounded-[30px] overflow-clip border-[1px] drop-shadow-lg flex flex-col bg-white/10 hover:scale-105 transition duration-150 ease-out hover:ease-in hover:cursor-pointer ${className}`}>
            <div className='bg-gray-700 w-full h-auto overflow-clip'>
                <Image src={imagePath}  className='h-auto w-full ' alt='card image' />
            </div>
            <div className='lg:p-10 p-8'>
                <h2 className='text-c-green font-manjari lg:text-2xl text-xl font-extrabold hover:brightness-125 transition duration-150 ease-out hover:ease-in hover:cursor-pointer'>
                  {title}
                </h2>
                <h3 className='text-xs lg:text-base'>{subtitle}</h3>
            </div>
        </div>
    </div>
  )
}


export default Card