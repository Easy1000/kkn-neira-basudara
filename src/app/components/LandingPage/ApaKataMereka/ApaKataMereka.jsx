import React from 'react'
import Image from 'next/image'
import BgDesktopCrop from '/public/images/landing-page/apa-kata-mereka/bg-desktop-apa 2.png'
import BgMobileCrop from '/public/images/landing-page/apa-kata-mereka/bg-mobile.png'
import Button from '../../Button/Button'
import CindyDesktop from '/public/images/landing-page/apa-kata-mereka/Cindy.png'
import AkbarDesktop from '/public/images/landing-page/apa-kata-mereka/Akbar.png'
import BuNiaDesktop from '/public/images/landing-page/apa-kata-mereka/Bu Nia.png'
import ProfPurwoDesktop from '/public/images/landing-page/apa-kata-mereka/Prof Purwo.png'


export const ApaKataMereka = () => {
  return (
    <div className='xl:mt-48 relative '>
      <Image src={BgDesktopCrop} alt='' className='w-full h-auto absolute -z-20 xl:-top-[500px]  opacity-0 xl:opacity-100 translate-y-96 scale-[160%]'/>
      <Image src={BgMobileCrop} alt='' className='w-full h-auto absolute object-cover -z-20 -top-[100px] md:-top-[840px]  xl:hidden'/>
      

      <div className='xl:px-48 w-full h-auto flex xl:gap-10 flex-col xl:flex-row px-12 gap-4'>
        
        <div className='xl:hidden flex-col h-[45%] text-center items-center flex mb-14 '>
            <div className='flex flex-col text-right text-c-yellow'>
              <h1 className='font-reikna text-8xl leading-[60px] text-center'>Apa Kata <br/><span className=''>Mereka<span className='text-6xl'>?</span></span></h1>
            </div>
            <p className='flex text-sm w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia ultrices quam, in rhoncus justo posuere a. Praesent at varius magna.</p>
        </div>
        
        <div className='flex flex-col xl:flex-row max-w-lg mx-auto xl:max-w-full xl:gap-10 gap-4'>
          <div className='flex flex-col xl:w-[55%] gap-4 xl:gap-0 '>
            <div className='flex h-[60%] w-full xl:gap-8 flex-row-reverse xl:flex-row gap-4'>
              
              <div className='w-full xl:h-[545px] h-[312px] backdrop-blur-sm border-[0.8px] xl:border-2 border-white rounded-xl xl:rounded-[30px] bg-white/15  overflow-clip'>
                <h3 className='font-manjari text-2xl translate-y-2 xl:text-3xl text-center text-c-yellow xl:translate-x-0 xl:translate-y-6 hidden xl:block'>Ir. Kurnia Widiastuti, S.T., M.T., IPM.</h3>
                <h3 className='font-manjari text-lg translate-y-2 xl:text-3xl text-center text-c-yellow xl:hidden px-2'>Ir. Kurnia Widiastuti, S.T., M.T., IPM.</h3>
                <Image src={BuNiaDesktop} className='object-cover w-auto h-[90%] mx-auto xl:mt-10' alt='Ir. Kurnia Widiastuti, S.T., M.T., IPM.'/>
                <p className='xl:-translate-y-56 -translate-y-24 text-[8px] xl:text-base  text-center max-w-md px-10 text-md'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
              </div>
              
              <div className='w-full xl:h-[545px] h-[312px] backdrop-blur-sm border-[0.8px] xl:border-2 border-white rounded-xl xl:rounded-[30px] bg-white/15  overflow-clip'>
              <h3 className='font-manjari text-2xl translate-y-2 xl:text-3xl text-center text-c-yellow xl:translate-x-0 xl:translate-y-6 hidden xl:block'>Akbar Santoso</h3>
              <h3 className='font-manjari text-lg translate-y-2 xl:text-3xl text-center text-c-yellow xl:hidden'>Akbar Santoso</h3>
                <Image src={AkbarDesktop} className='object-cover w-auto h-[90%] xl:mt-10 translate-y-4 xl:translate-y-0' alt='akbar'/>
                <p className='xl:-translate-y-48 -translate-y-16 text-[8px] xl:text-base translate-x-2 text-center xl:max-w-md px-10 text-md'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
              </div>
            </div>
            <div className='flex h-[40%] w-full'>
              
              <div className='w-full xl:h-[467px] h-[246px] backdrop-blur-sm border-[0.8px] xl:border-2 border-white rounded-xl xl:rounded-[30px] bg-white/15  overflow-clip '>
                <h3 className='font-manjari text-2xl translate-y-2 xl:text-3xl text-left text-c-yellow xl:translate-x-12 xl:translate-y-6 hidden xl:block'>Prof. Dr. Purwo Santoso, M.A.</h3>
                <h3 className='font-manjari text-lg translate-y-2 translate-x-4 xl:text-3xl text-left text-c-yellow xl:hidden'>Prof. Dr. Purwo Santoso, M.A.</h3>
                <Image src={ProfPurwoDesktop} className='object-cover w-auto h-[90%] mx-auto xl:mt-10 xl:-translate-x-12 -translate-x-24 ' alt='Prof. Dr. Purwo Santoso, M.A.'/>
                <p className='xl:-translate-y-32 -translate-y-20 text-[8px] xl:text-base max-w-40 text-right translate-x-72 md:translate-x-80 xl:text-left xl:max-w-md text-md '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
              </div>
            </div>
          </div>

          <div className='flex xl:w-[45%] xl:flex-col text-right xl:gap-24'>
            <div className='xl:flex xl:flex-col h-[45%] text-right items-end hidden'>
              <div className='flex xl:flex-col text-right text-c-yellow'>
                <h1 className='font-reikna xl:text-9xl '>Apa Kata</h1>
                <h1 className='font-reikna xl:text-9xl xl:-mt-12'>Mereka<span className='text-7xl'>?</span></h1>
              </div>
              <p className='flex '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia ultrices quam, in rhoncus justo posuere a. Praesent at varius magna.</p>
              <div className='flex xl:mt-8'>
                <Button 
                  text="VIEW TEAM"
                  isAction={true}
                  isPrimary={false}
                />
              </div>
            </div>

            <div className='flex xl:h-[55%] w-full xl:w-auto'>
              
              <div className='w-full xl:h-[497px] h-[217px] xl:translate-y-16 backdrop-blur-sm border-[0.8px] xl:border-2 border-white rounded-xl xl:rounded-[30px] bg-white/15  overflow-clip'>
                <h3 className='font-manjari text-2xl translate-y-2 xl:text-3xl text-left text-c-yellow xl:translate-x-12 xl:translate-y-6 hidden xl:block'>Cindy Mutiara</h3>
                <h3 className='font-manjari text-lg translate-y-2 translate-x-4 xl:text-3xl text-left text-c-yellow xl:hidden'>Cindy Mutiara</h3>
                <Image src={CindyDesktop} className='object-cover w-auto h-[90%] mx-auto xl:mt-10 translate-x-28' alt='cindy'/>
                <p className='xl:-translate-y-32 -translate-y-20 text-[8px] xl:text-base  translate-x-8 xl:translate-x-12 text-left max-w-40 xl:max-w-md '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus feugiat lacus quis bibendum. Cras sodales magna magna, quis venenatis turpis faucibus eu.”</p>
              </div>
            </div>
          </div>
        
          

        </div>


      </div>
    </div>
  )
}
