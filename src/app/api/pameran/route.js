import { prisma } from "../../../../prisma/prisma";

export async function GET() {
  const pameran = await prisma.pameran.findMany({
    include: {
      paragraph: true,
      accessories: true
    }
  })

  return Response.json(pameran)
}
