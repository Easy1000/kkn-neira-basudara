// Get All Images in Neira gallery

import { prisma } from "../../../../prisma/prisma";

export async function GET() {
  const photos = await prisma.gallery.findMany()

  // example result is array of object with this structure

  // photos = [
  //   {
  //     id String,
  //     judul String,
  //     link String,
  //     caption String
  //     category String
  //   }
  // ]


  return Response.json({ photos })
}
