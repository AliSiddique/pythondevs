import { db } from "../../../../prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: Response) {
 
        const limit = 20
        const cursor = req.nextUrl.searchParams.get('cursor') ?? ''

        const cursorObj = cursor === '' ? undefined : { id: parseInt(cursor as string, 10)}


        const posts = await db.jobPost.findMany({
            skip: cursor !== '' ? 1 : 0,
            cursor: cursorObj,
            take: limit,
        })
        // if (posts.length === 0) {
        //   return NextResponse.json({ posts: [], nextId: 0 })
        // }
        // return res.json({ posts, nextId: posts.length === limit ? posts[limit - 1].id : undefined })
       return  NextResponse.json({ posts, nextId: posts.length === limit ? posts[limit - 1].id : undefined })
   
}