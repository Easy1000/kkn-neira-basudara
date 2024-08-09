import { prisma } from "../../../../../prisma/prisma"
import { makeArticleBody } from "../../../../../utils/articleBody"

export async function GET(request, { params }) {
  const id = params.id

  const article = await prisma.artikel.findFirst(
    {
      where: {
        ID: Number(id)
      },
      include: {
        paragraph: true,
        accessories: true
      }
    }
  )

  const articleBody = makeArticleBody(article.paragraph, article.accessories)

  return Response.json({ article, articleBody })
}
