import React from 'react'
import Image from 'next/image'
import BgDesktop from '/src/public/assets/images/apa-kata-mereka/bg-desktop-apa.png'
import BgDesktopCrop from '/src/public/assets/images/apa-kata-mereka/bg-desktop-apa 2.png'
import Button from '../../Button/Button'
import CindyDesktop from '/src/public/assets/images/apa-kata-mereka/Cindy.png'
import AkbarDesktop from '/src/public/assets/images/apa-kata-mereka/Akbar.png'
import BuNiaDesktop from '/src/public/assets/images/apa-kata-mereka/Bu Nia.png'
import ProfPurwoDesktop from '/src/public/assets/images/apa-kata-mereka/Prof Purwo.png'


export const ApaKataMereka = () => {
  return (
    <div className='lg:mt-48 relative'>
      <Image src={BgDesktopCrop} className='w-full h-auto absolute -z-20 lg:-top-[440px]'/>

      <div className='lg:px-48 w-full h-auto flex gap-10'>
        <div className='flex flex-col lg:w-[55%]'>
          <div className='flex h-[60%] w-full lg:gap-8'>
            {/* Bu Nia */}
            <div className='w-full h-[545px] backdrop-blur-sm border-2 border-white rounded-[30px] bg-white/15  overflow-clip'>
              <h3 className='font-manjari text-3xl text-center text-c-yellow lg:translate-x-0 lg:translate-y-6'>Ir. Kurnia Widiastuti, S.T., M.T., IPM.</h3>
              <Image src={BuNiaDesktop} className='w-auto h-[90%] mx-auto lg:mt-10'/>
              <p className='lg:-translate-y-56 translate-x-2 text-center max-w-md px-10 text-md'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
            </div>
            {/* Akbar */}
            <div className='w-full h-[545px] backdrop-blur-sm border-2 border-white rounded-[30px] bg-white/15  overflow-clip'>
            <h3 className='font-manjari text-3xl text-center text-c-yellow lg:translate-x-0 lg:translate-y-6'>Akbar Santoso</h3>
              <Image src={AkbarDesktop} className='w-auto h-[90%]  lg:mt-10'/>
              <p className='lg:-translate-y-48 translate-x-2 text-center max-w-md px-10 text-md'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
            </div>
          </div>
          <div className='flex h-[40%] w-full'>
            {/* Prof Purwo */}
            <div className='w-full h-[467px] backdrop-blur-sm border-2 border-white rounded-[30px] bg-white/15  overflow-clip'>
              <h3 className='font-manjari text-3xl text-left text-c-yellow lg:translate-x-12 lg:translate-y-6'>Prof. Dr. Purwo Santoso, M.A.</h3>
              <Image src={ProfPurwoDesktop} className='w-auto h-[90%] mx-auto lg:mt-10 -translate-x-12'/>
              <p className='lg:-translate-y-32 translate-x-12 text-left max-w-md text-md'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
            </div>
          </div>
        </div>

        <div className='flex lg:w-[45%] lg:flex-col text-right  lg:gap-24'>
          <div className='flex lg:flex-col h-[45%] text-right items-end'>
            <div className='flex lg:flex-col text-right text-c-yellow'>
              <h1 className='font-reikna lg:text-9xl '>Apa Kata</h1>
              <h1 className='font-reikna lg:text-9xl lg:-mt-12'>Mereka</h1>
            </div>
            <p className='flex '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia ultrices quam, in rhoncus justo posuere a. Praesent at varius magna.</p>
            <div className='flex lg:mt-8'>
              <Button 
                text="VIEW TEAM"
                isAction={true}
                isPrimary={false}
              />
            </div>
          </div>

          <div className='flex lg:h-[55%]'>
            {/* Cindy */}
            <div className='w-full h-[497px] lg:translate-y-16 backdrop-blur-sm border-2 border-white rounded-[30px] bg-white/15  overflow-clip'>
              <h3 className='font-manjari text-3xl text-left text-c-yellow lg:translate-x-12 lg:translate-y-6'>Cindy Mutiara</h3>
              <Image src={CindyDesktop} className='w-auto h-[90%] mx-auto lg:mt-10'/>
              <p className='lg:-translate-y-32 translate-x-12 text-left max-w-md text-md'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
            </div>
          </div>
          

        </div>


      </div>
    </div>
  )
}
