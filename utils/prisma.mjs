import { prisma } from "../prisma/prisma"

export default async function main() {
  const photos = await prisma.gallery.findMany()
  console.log(photos)
}

main()
