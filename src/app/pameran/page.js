import { cache } from 'react'
import { prisma } from '../../../prisma/prisma'
import Link from 'next/link'
import Image from 'next/image'

export default async function ListKarya() {
  const listKarya = await getListKarya()

  return <div className='bg-white min-h-screen text-black '>
    <h1 className='text-3xl font-bold text-center pt-8'>Jejak Sejarah dalam Langkah Kaki:</h1>
    <h1 className='text-2xl font-bold text-center pt-1 pb-8'>Menata Kembali Banda Naira sebagai Living Museum</h1>
    <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {listKarya.map((karya) => (
        <div key={karya.id} className='bg-white hover:bg-gray-800 hover:text-white rounded-lg shadow-md overflow-hidden'>
          <Link href={"/pameran/" + karya.ID}>
            <Image
              src={karya.thumbnail}
              alt={karya.thumbnailAlt}
              width={500} height={500}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h1 className='text-lg font-semibold'>{karya.judul}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
}

export const getListKarya = cache(async () => {
  const listKarya = await prisma.pameran.findMany()

  return listKarya
})

