import { prisma } from "../../../../../prisma/prisma";
import { makeArticleBody } from "../../../../../utils/articleBody";

export async function GET(request, { params }) {
  const id = Number(params.id)

  const karya = await prisma.pameran.findFirst(
    {
      where: {
        ID: id
      },
      include: {
        paragraph: true,
        accessories: true
      }
    }
  )

  const karyaBody = makeArticleBody(karya.paragraph, karya.accessories)

  return Response.json({ karya, karyaBody })
}
