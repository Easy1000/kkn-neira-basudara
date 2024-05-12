import React from 'react'
import Image from 'next/image'

const Card = ({imagePath, title, subtitle}) => {
  return (
    <div>
        <div className='w-full h-[500px] backdrop-blur-md rounded-[30px] overflow-clip border-[1px] drop-shadow-lg flex flex-col bg-white/10 hover:scale-105 transition duration-150 ease-out hover:ease-in hover:cursor-pointer'>
            
            <div className='bg-gray-700 w-full h-[317px] overflow-clip'>
                <Image src={imagePath}  className='h-auto w-full lg:-translate-y-10' />
            </div>
            <div className='p-12 '>
                <h2 className='text-c-green font-manjari lg:text-2xl font-extrabold hover:brightness-125 transition duration-150 ease-out hover:ease-in hover:cursor-pointer'>{title}</h2>
                <h3>{subtitle}</h3>

            </div>
        </div>


    </div>
  )
}


export default Card