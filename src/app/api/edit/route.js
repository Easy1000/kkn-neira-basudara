import { prisma } from "../../../../prisma/prisma";


export async function GET() {
  const edit = await prisma.gallery.updateMany({
    data: {
      category: ""
    }
  })

  console.log(edit)

  return Response.json({ edit })
}
