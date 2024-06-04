'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "/public/images/landing-page/LOGO.png";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 z-[9999] lg:px-20 lg:py-1 w-[90%] lg:mx-20 rounded-full border-[1px] lg:backdrop-blur-2xl backdrop-blur-md lg:drop-shadow-md lg:mt-12 bg-white/10 py-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 mt-9 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-36'}`}>
            <div className="flex flex-row w-full justify-between">
                <a href="#" className="flex items-center lg:gap-4">
                    <Image src={Logo} alt="logo neira basudara" className="flex lg:w-auto lg:h-12 w-10 ml-4"/>
                    <p className="font-reikna lg:text-4xl lg:flex hidden lg:ml-2">Neira Basudara</p>
                </a>

                <div className="lg:flex lg:gap-10 xl:gap-32 items-center hidden">
                    <a className='hover:underline' href="">NEWS</a>
                    <a className='hover:underline' href="">PODCAST</a>
                    <a className='hover:underline' href="">TEAM</a>
                    <a className='hover:underline' href="">GALLERY</a>
                    <a className='hover:underline' href="">ABOUT US</a>
                </div>

                <button className="flex items-center mr-4 lg:hidden" onClick={toggleDropdown}>
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_184_4870"  maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                            <rect width="16" height="16" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_184_4870)">
                            <path d="M2.66667 12C2.29848 12 2 11.7015 2 11.3333C2 10.9651 2.29848 10.6667 2.66667 10.6667H13.3333C13.7015 10.6667 14 10.9651 14 11.3333C14 11.7015 13.7015 12 13.3333 12H2.66667ZM2.66667 8.66667C2.29848 8.66667 2 8.36819 2 8C2 7.63181 2.29848 7.33333 2.66667 7.33333H13.3333C13.7015 7.33333 14 7.63181 14 8C14 8.36819 13.7015 8.66667 13.3333 8.66667H2.66667ZM2.66667 5.33333C2.29848 5.33333 2 5.03486 2 4.66667C2 4.29848 2.29848 4 2.66667 4H13.3333C13.7015 4 14 4.29848 14 4.66667C14 5.03486 13.7015 5.33333 13.3333 5.33333H2.66667Z" fill="white"/>
                        </g>
                    </svg>
                </button>

                {/* dropdown component */}
                {isDropdownOpen && (
                    <div className="w-200 h-auto fixed z-[9999] drop-shadow-md right-0 top-16 border-[1px] rounded-2xl py-4 px-8 font-manjari visible lg:hidden bg-white/10 backdrop-blur-md">
                        <div className="flex flex-col items-center gap-2 ">
                            <a className='hover:underline' href="">NEWS</a>
                            <a className='hover:underline' href="">PODCAST</a>
                            <a className='hover:underline' href="">TEAM</a>
                            <a className='hover:underline' href="">GALLERY</a>
                            <a className='hover:underline' href="">ABOUT US</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
