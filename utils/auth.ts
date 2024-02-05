import { auth } from "@clerk/nextjs"
import { prisma } from "./db"
import {redirect} from "next/navigation"

export const getUserFromClerkID = async (select = { id: true }) => {
    const { userId } = auth()
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        clerkId: userId as string,
      },
      select,
    })
    
    return user
  }