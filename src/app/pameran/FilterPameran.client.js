'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FilterPameran({ initialListKarya }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua Karya');
  const [filteredKarya, setFilteredKarya] = useState(initialListKarya);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);

    if (category === 'Semua Karya') {
      setFilteredKarya(initialListKarya);
    } else {
      setFilteredKarya(initialListKarya.filter(karya => karya.category === category));
    }
  };

  const getButtonClass = (category) => (
    selectedCategory === category 
      ? 'text-black bg-white border-2 border-black'
      : 'text-white bg-black border-2 border-white hover:scale-105' 
  );

  return (
    <div>
      <div className='flex justify-center -translate-y-4 gap-2'>
        <button 
          onClick={() => handleFilterClick('Semua Karya')} 
          className={`rounded-full px-4 py-2 font-bold ${getButtonClass('Semua Karya')}`}
        >
          Semua karya
        </button>
        <button 
          onClick={() => handleFilterClick('Fotografi')} 
          className={`rounded-full px-4 py-2 font-bold ${getButtonClass('Fotografi')}`}
        >
          Fotografi
        </button>
        <button 
          onClick={() => handleFilterClick('Sketsa')} 
          className={`rounded-full px-4 py-2 font-bold ${getButtonClass('Sketsa')}`}
        >
          Sketsa
        </button>
      </div>
      
      <div className='container mx-auto grid md:grid-cols-3 gap-4 p-4 max-w-sm md:max-w-6xl'>
        {filteredKarya.map((karya) => (
          <div key={karya.id} className='bg-white hover:bg-gray-800 hover:text-white rounded-lg shadow-md overflow-hidden'>
            <Link href={"/pameran/" + karya.ID}>
              <Image
                src={karya.thumbnail}
                alt={karya.thumbnailAlt}
                width={500}
                height={500}
                className='w-full h-48 object-cover'
              />
              <div className='p-4 flex flex-col justify-between'>
                <p className='text-xs opacity-40 font-medium items-center flex'>{karya.category}</p>
                <h1 className='text-lg font-semibold truncate'>{karya.judul}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
