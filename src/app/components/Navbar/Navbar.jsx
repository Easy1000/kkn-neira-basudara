import React from "react";
import Image from "next/image";
import Logo from "/src/public/assets/images/LOGO.png";

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-[9999] lg:px-20 lg:py-1 w-[90%] lg:mx-20 rounded-full border-[1px] lg:backdrop-blur-2xl backdrop-blur-md lg:drop-shadow-md lg:mt-12 bg-white/10">
            <div className="flex flex-row w-full justify-between">
                <a href="#" className="flex items-center lg:gap-4">
                    <Image src={Logo} alt="logo neira basudara" className="flex w-auto lg:h-12"/>
                    <p className="flex font-reikna lg:text-4xl">Neira Basudara</p>
                </a>

                <div className="flex lg:gap-32 items-center">
                    <a className='hover:underline' href="">NEWS</a>
                    <a className='hover:underline' href="">PODCAST</a>
                    <a className='hover:underline' href="">TEAM</a>
                    <a className='hover:underline' href="">GALLERY</a>
                    <a className='hover:underline' href="">ABOUT US</a>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;