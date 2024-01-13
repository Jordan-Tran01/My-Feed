import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from 'next/server'

export const POST = async () => {
    const user = await getUserFromClerkID()
    const entry = await prisma.feedEntry.create({
        data: {
            userId: user.id,
            content: 'Write any questions away!',
        },
    })

    return NextResponse.json({ data: entry })
}