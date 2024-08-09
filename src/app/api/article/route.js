// Get All Articles

import { prisma } from "../../../../prisma/prisma"

export async function GET() {
  const articles = await prisma.artikel.findMany({
    include: {
      paragraph: true,
      accessories: true
    }
  })

  return Response.json({ articles })
}
