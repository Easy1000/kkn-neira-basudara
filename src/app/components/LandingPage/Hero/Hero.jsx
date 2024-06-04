import Image from 'next/image';
import DesktopHero from "/public/images/landing-page/bg-hero-desktop.png";
import Logo from "/public/images/landing-page/LOGO.png";
import HeroOrnament1 from "/public/images/landing-page/ornament-hero-1.png";
import HeroOrnament2 from "/public/images/landing-page/ornament-hero-2.png";

const Hero = () => {
    return(
      
      <div className="relative">
        <div className="w-full h-screen object-cover absolute -z-50 bg-slate-600">
          <Image src={DesktopHero} className="w-full h-screen object-cover -z-50 absolute" />
          <div className="w-full h-48 bg-gradient-to-b from-transparent to-black absolute bottom-0"></div>
        </div>

        <div className="lg:text-right flex flex-col lg:mx-32 pt-72 mx-12">
          <div className="flex flex-row justify-end ml-20 z-10">
            <Image src={Logo} className="flex scale-75 lg:scale-100 translate-x-6 translate-y-4 lg:translate-x-0 lg:translate-y-0" />
          </div>
  
          <div className="flex flex-col lg:-mt-6 z-10 items-end lg:gap-8 -mt-2">
            {/* small screen */}
            <div className='flex flex-col lg:hidden sm:flex-row sm:gap-2'>
              <h1 className="font-reikna break-all text-8xl line-clamp-2 text-wrap text-right">  
                Banda
              </h1>
              <h1 className="font-reikna break-all text-8xl text-right -mt-8 sm:mt-0">  
                Neira
              </h1>
            </div>

            {/* big screen */}
            <div className='hidden lg:flex'>
              <h1 className="font-reikna text-9xl lg:-mb-10 break-all line-clamp-2 text-wrap text-right mt-4">  
                Banda Neira
              </h1>
            </div>
              
            <p className="text-right font-manjari lg:text-3xl -mt-2 text-lg md:text-2xl">Neira Basudara KKN-PPN UGM Periode II 2024</p>
          </div>

        </div>
  
        
        <div className="flex justify-center">
          <p className="flex text-center xl:mx-96 lg:mx-72 lg:text-lg lg:mt-56 xl:mt-72 z-30 lg:max-w-7xl mt-48 mx-12 max-w-md">
            Tim KKN-PPM UGM unit Banda melaksanakan audiensi dengan Bappeda dan Pemerintah Provinsi Maluku Tengah pada tanggal 3 dan 5 Februari 2024. Audiensi yang dilakukan membahas tentang hasil eksperimentasi penerapan action research model Living Lab dalam KKN-PPM dengan tema “Akselerasi pengembangan pariwisata kawasan Banda Neira”. Lorem ipsum dolor sit amet consectetur. Dictumst donec urna turpis adipiscing cum cursus tempus ultrices vitae. In maecenas magna egestas sed dolor faucibus sit eu habitant. Tellus tristique tellus vel et facilisis amet et id duis. Erat vitae nec libero. Lorem ipsum dolor sit amet consectetur. Dictumst donec urna turpis adipiscing cum cursus tempus ultrices vitae. In maecenas magna egestas sed dolor faucibus sit eu habitant. Tellus tristique tellus vel et facilisis amet et id duis. Erat vitae nec libero.
          </p>     
        </div>
  
        <div className="absolute w-full h-full -z-20">
          <div className='absolute lg:-top-1/2 -top-[1000px]'>
            <Image src={HeroOrnament2} className="h-auto lg:w-[500px] w-56" />
          </div>
  
        </div>
  
        <div className='absolute right-0 lg:-bottom-72 -z-20'>
          <Image src={HeroOrnament1} className="h-auto lg:w-[330px] w-28" />
        </div>
  </div>
    );
  }
export default Hero;