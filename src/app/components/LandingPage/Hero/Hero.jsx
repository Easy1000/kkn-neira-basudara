import Image from 'next/image';
import DesktopHero from "/src/public/assets/images/bg-hero-desktop.png";
import Logo from "/src/public/assets/images/LOGO.png";
import HeroOrnament1 from "/src/public/assets/images/ornament-hero-1.png";
import HeroOrnament2 from "/src/public/assets/images/ornament-hero-2.png";

const Hero = () => {
    return(
      
      <div className="relative">
        <div className="w-full h-screen object-cover absolute -z-50 bg-slate-600">
        <Image src={DesktopHero} className="w-full h-screen object-cover -z-50 absolute" />
  
        <div className="w-full h-48 bg-gradient-to-b from-transparent to-black absolute bottom-0"></div>
        </div>
        <div className="lg:text-right flex flex-col lg:mx-32 lg:pt-72">
          <div className="flex flex-row justify-end ml-20 z-10">
            <Image src={Logo} className="flex" />
          </div>
  
          <div className="flex flex-col lg:-mt-6 z-10">
            <h1 className="font-bold font-reikna lg:text-[154px] lg:-mb-12">
              Neira Basudara
            </h1>
            <p className=" font-manjari lg:text-3xl">KKN-PPN UGM Periode II 2024</p>
          </div>
        </div>
  
        
        <div className="flex justify-center">
          <p className="flex text-center lg:mx-96 lg:text-lg lg:mt-56 z-30 lg:max-w-7xl">
            Tim KKN-PPM UGM unit Banda melaksanakan audiensi dengan Bappeda dan Pemerintah Provinsi Maluku Tengah pada tanggal 3 dan 5 Februari 2024. Audiensi yang dilakukan membahas tentang hasil eksperimentasi penerapan action research model Living Lab dalam KKN-PPM dengan tema “Akselerasi pengembangan pariwisata kawasan Banda Neira”. Lorem ipsum dolor sit amet consectetur. Dictumst donec urna turpis adipiscing cum cursus tempus ultrices vitae. In maecenas magna egestas sed dolor faucibus sit eu habitant. Tellus tristique tellus vel et facilisis amet et id duis. Erat vitae nec libero. Lorem ipsum dolor sit amet consectetur. Dictumst donec urna turpis adipiscing cum cursus tempus ultrices vitae. In maecenas magna egestas sed dolor faucibus sit eu habitant. Tellus tristique tellus vel et facilisis amet et id duis. Erat vitae nec libero.
          </p>     
        </div>
  
        <div className="absolute w-full h-full -z-20">
          <div className='lg:absolute lg:-top-1/2'>
            <Image src={HeroOrnament2} className="h-auto lg:w-[500px]" />
          </div>
  
        </div>
  
        <div className='lg:absolute lg:right-0 lg:-bottom-72 -z-20'>
          <Image src={HeroOrnament1} className="h-auto lg:w-[330px]" />
        </div>
  </div>
    );
  }
export default Hero;