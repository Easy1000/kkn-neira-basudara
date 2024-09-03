import React from 'react';
import Link from 'next/link';

const Button = ({ text, isPrimary, isAction, className, path }) => {
    return (
        <div className={className}>
            {isPrimary ? (
                // <Link href={path}>
                    <button className='bg-c-green hover:bg-black transition duration-300 ease-in-out text-white py-2 px-4 w-36 lg:w-[215px] rounded-[10px] font-manjari flex items-center justify-center gap-2 lg:gap-6 group '>
                        <p className='flex mt-1 lg:text-base text-sm'>{text}</p>
                        {isAction 
                        && 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none" viewBox="0 0 12 7" className='flex '>
                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M1 3.667h10m0 0L8.333 1M11 3.667 8.333 6.333"/>
                        </svg>
                        }
                    
                    </button>
                // </Link>
            ) : (
                // <Link href={path}>
                    <button className='hover:bg-white/70 hover:text-black transition duration-300 ease-in-out text-white py-2 px-4 w-36 lg:w-[215px] rounded-[10px] border-white border-[1px] font-manjari flex items-center justify-center gap-2 lg:gap-6 group' >
                        <p className='flex mt-1 lg:text-base text-xs'>{text}</p>
                        {isAction 
                        && 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none" viewBox="0 0 12 7" className='flex group-hover:brightness-0 transition duration-300 ease-in-out'>
                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M1 3.667h10m0 0L8.333 1M11 3.667 8.333 6.333"/>
                        </svg>
                        }
                        
                    </button>
                // </Link>
            )}
        </div>
    );
};

export default Button;
