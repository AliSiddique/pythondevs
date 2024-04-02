import { nanoid } from "nanoid";
import { db } from "../../../../prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: Response) {
 
        const limit = 2
        const cursor = req.nextUrl.searchParams.get('cursor') ?? ''
        const search = req.nextUrl.searchParams.get('q')

        const cursorObj = cursor === '' ? undefined : { id: parseInt(cursor as string, 10)}


        console.log("Search term:", search);
        console.log("Cursor:", cursor);

        const posts = await db.jobPost.findMany({
            where: {
                title: {
                    contains: search ?? "",
                    mode: 'insensitive',
                }
            },
            orderBy: 
                {
                    created_at: 'asc',
                }
            ,
            skip: cursor !== '' ? 1 : 0,
            cursor: cursorObj, 
            take: limit,
        });
        
        console.log("Number of posts retrieved:", posts.length);
        
        console.log(posts)
        // if (posts.length === 0) {
        //   return NextResponse.json({ posts: [], nextId: 0 })
        // }
        // return res.json({ posts, nextId: posts.length === limit ? posts[limit - 1].id : undefined })
       return  NextResponse.json({ posts, nextId: posts.length === limit ? posts[limit - 1].id : undefined })
   
}