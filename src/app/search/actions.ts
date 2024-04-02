"use server"

import { db } from "../../../prisma/client"

export async function GetJobs({
  search,
  offset = 0,
  limit = 2,
}: {
  search?: string | undefined
  offset?: number
  limit?: number
}) {
  const data = await db.jobPost.findMany({
    where: {
       title: { contains: search ,mode:"insensitive" 
      
      } },
    skip: offset,
    take: limit,
  })

  const totalCount = await db.jobPost.count({
    where: { title: { contains: search,mode:"insensitive" } },
  })
  const totalPages = Math.ceil(totalCount / limit)

  return { data, totalCount, totalPages }
}