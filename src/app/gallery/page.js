import { cache } from 'react'
import { prisma } from '../../../prisma/prisma'
import Image from 'next/image'

// Page that shows all of the images in Neira Gallery
export default async function Gallery() {
  const photos = await getPhotos()

  // example result is array of object with this structure

  // photos = [
  //   {
  //     id String,
  //     judul String,
  //     link String,
  //     caption String
  //   }
  // ]

  return (
    <div>
      gallery page
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image src={photo.link} alt={photo.judul} width={250} height={250} />
          </div>
        ))}
      </div>
    </div>
  )
}

export const getPhotos = cache(async () => {
  const photos = await prisma.gallery.findMany()

  return photos
})
