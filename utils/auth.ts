import { auth } from "@clerk/nextjs"
import { prisma } from "./db"

export const getUserFromClerkID = async () => {
  const { userId } = auth();
  const user = await prisma.user.findUniqueOrThrow({
      where: {
          clerkId: userId as string,
      },
  });
  
  return user;
};

export const getUserbyUserId = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
      where: {
          id: userId,
      },
  });
  
  return user;
};
