import React from 'react'
import Image from 'next/image'
const VerticalNewsThumbnail = ({category, date, title, subTitle, imgPath, withLine}) => {
  return (
    <div className={`w-full max-w-sm flex flex-col font-libre-franklin mx-auto lg:max-w-[2000px]  ${withLine ? '' : 'py-8 lg:py-2'}`} >
      <div className='flex flex-col lg:flex-row-reverse lg:gap-8'>
        <div className='flex mb-5'>
          {/* <div className='w-full h-[193px] bg-slate-700'></div> */}
          <Image src={imgPath} width={200} height={193} alt="thumbnail news" className='w-full lg:w-[500px] lg:object-cover lg:h-full'/>
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
                <p className='text-xs lg:hidden'>{date}</p>
            </div>

            <div className='flex font-manjari mb-2'>
              <h2 className='hover:underline text-xl font-bold leading-snug lg:text-2xl'>{title}</h2>

            </div>
            <div className='flex'>
              <p className='text-xs lg:text-sm'>{subTitle} </p>

            </div>
            
          </div>

          <div className='flex justify-between lg:mt-8'>
            <p className='hidden text-xs lg:flex'>{date}</p>
            <p className='hidden text-xs lg:flex'>Author</p>


          </div>

        </div>


      </div>
      <hr className={`mx-auto w-full lg:max-w-full lg:mx-0 ${withLine ? 'border-c-green border-[0,5px] my-12' :'hidden'}`}/>

      

    </div>


  )
}

export default VerticalNewsThumbnail
