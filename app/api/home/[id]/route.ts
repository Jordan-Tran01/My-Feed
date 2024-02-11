import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from '@/utils/db'
import { NextResponse } from "next/server"

export const PATCH = async (request: Request, {params}) => {
    const {content, title} = await request.json()

    const user = await getUserFromClerkID()
    const postedFeed = await prisma.feedEntry.update({
        where: {
            userId_id: {
                userId: user.id,
                id: params.id,
            },
        },
        data: {
            content,
            title,
        },
    })

    return NextResponse.json({ data: postedFeed})
}