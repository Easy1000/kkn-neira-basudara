import { cache } from 'react';
import { prisma } from '../../../prisma/prisma';
import FilterPameran from './FilterPameran.client';

export default async function ListKarya() {
  const listKarya = await getListKarya();  // Fetch all the items on the server-side

  return (
    <div className='bg-white min-h-screen text-black'>
      <h1 className='text-3xl font-bold text-center pt-8'>Jejak Sejarah dalam Langkah Kaki:</h1>
      <h1 className='text-2xl font-bold text-center pt-1 pb-8'>Menata Kembali Banda Naira sebagai Living Museum</h1>
      
      <FilterPameran initialListKarya={listKarya} />
    </div>
  );
}

export const getListKarya = cache(async () => {
  const listKarya = await prisma.pameran.findMany();
  console.log(listKarya);
  return listKarya;
});
