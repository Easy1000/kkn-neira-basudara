import { cache } from 'react'
import { prisma } from '../../../../prisma/prisma'
import { makeArticleBody } from '../../../../utils/articleBody'
import Image from 'next/image'
import Link from 'next/link'

export default async function Karya({ params }) {
  const { karya, karyaBody } = await getKarya(params.id)

  return <div className="bg-white min-h-screen text-black">
    <div className='container sm:max-w-2xl mx-auto'>
      {/* Header */}
      <div className='mb-8 p-4 text-center'>
        <Image
          src={karya.thumbnail}
          alt={karya.thumbnailAlt}
          width={500}
          height={500}
          className='w-full h-auto max-w-lg mx-auto object-cover rounded-lg shadow-lg'
        />
        <h1 className='text-4xl font-bold mt-4'>{karya.judul}</h1>
        {karya.author && <p className='text-xl text-gray-700 mt-2'>Oleh {karya.author}</p>}
        {karya.date && <p className='text-md text-gray-500 mt-1'>Dibuat pada {new Date(karya.date).toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>}
        <p className='text-lg text-gray-600 mt-4'>{karya.deskripsi}</p>
      </div>

      {/* Body */}
      <div className='p-2'>
        {karyaBody.map((item, index) => (
          <div key={index} className='mb-6 '>
            {item.paragraph && <p>{item.paragraph}</p>}
            {item.accessories && <div className='mb-4 text-center'>
              <Image
                src={item.accessories}
                alt={item.caption}
                width={500}
                height={500}
                className='w-full h-auto max-w-sm mx-auto object-cover rounded-lg shadow-lg'
              />
              <p className='text-sm text-gray-500 mt-1'>{item.caption}</p>
            </div>}
          </div>
        ))}
      </div>
    </div>

    {/* Back Button */}
    <div className='fixed bottom-4 right-4 backdrop-blur-sm'>
      <Link className='hover:bg-gray-600 hover:text-white font-bold py-2 px-4 rounded-full shadow-lg' href="/pameran/">Back</Link>
    </div>
  </div>
}

export const getKarya = cache(async (id) => {
  const karya = await prisma.pameran.findFirst({
    where: {
      ID: Number(id)
    },
    include: {
      paragraph: true,
      accessories: true
    }
  })

  const karyaBody = makeArticleBody(karya.paragraph, karya.accessories)

  return { karya, karyaBody }
})

export async function generateStaticParams() {
  const listKarya = await prisma.pameran.findMany()

  return listKarya.map(karya => ({
    id: karya.ID.toString()
  }))
}
