import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from 'next/server'
import { update } from "@/utils/actions"

export const POST = async () => { 
    const user = await getUserFromClerkID()
    const entry = await prisma.feedEntry.create({
        data: {
            title: "Title",
            userId: user.id,
            content: 'Write your post...',
        },
    })

    update(['/home'])

    return NextResponse.json({ data: entry })
}

//Handles the route to creating a new drafted feed