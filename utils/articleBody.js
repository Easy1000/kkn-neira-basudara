export function makeArticleBody(paragraphs, accessories) {
  const mergedBody = paragraphs.concat(accessories);

  const sortedBody = mergedBody.sort((paragraphs, accessories) => paragraphs.urutan - accessories.urutan)

  return sortedBody

}
