import React from 'react'
import Image from 'next/image'
const VerticalNewsThumbnail = ({category, tanggal, judul, deskripsi, thumbnail}) => {
  console.log(thumbnail)
  return (
    <div className={`w-full max-w-sm flex flex-col font-libre-franklin mx-auto lg:max-w-[2000px] `} >
      <div className='flex flex-col lg:flex-row-reverse lg:gap-8 hover:cursor-pointer group'>
        <div className='flex mb-5 overflow-clip'>
          <img src={thumbnail} width={200} height={150} alt="thumbnail news"  className='w-full group-hover:scale-105 transition-transform lg:w-[600px] object-cover lg:h-full' />
        </div>

        <div className='flex lg:flex-col lg:justify-between'>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center mb-5'>
            
              <div className='flex gap-4 items-center'>
                <p className='text-xs uppercase'>{category}</p> 
                <div className='flex w-auto h-4 scale-90'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" fill="none" viewBox="0 0 9 12" className='w-auto h-4'>
                        <path fill="#4C7C7F" d="M0 11.724h9l-2.919-4.67H9L4.573 0 .243 7.054h2.87L0 11.724Z"/>
                    </svg>
                </div>

              </div>
                <p className='text-xs lg:hidden'>{tanggal}</p>
            </div>

            <div className='flex font-manjari mb-2 hover:cursor-pointer'>
              <h2 className='text-xl font-bold leading-snug lg:text-2xl group-hover:underline'>{judul}</h2>

            </div>
            <div className='flex'>
              <p className='text-xs lg:text-sm'>{deskripsi} </p>

            </div>
            
          </div>

          <div className='flex justify-between lg:mt-8'>
            <p className='hidden text-xs lg:flex'>{tanggal}</p>
            <p className='hidden text-xs lg:flex'>Author</p>


          </div>

        </div>


      </div>
      <hr className={`mx-auto w-full lg:max-w-full lg:mx-0 border-c-green border-[0,5px] my-12`}/>

      

    </div>


  )
}

export default VerticalNewsThumbnail
