import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

export const getEmail = async () => {
    try {
      const user = await getUserFromClerkID();
  
      if (user) {
        const foundUser = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
        });
  
        if (foundUser) {
          console.log('User Email:', foundUser.email);
          return foundUser.email;
        } else {
          console.log('User not found');
        }
      } else {
        console.log('User not found for Clerk ID');
      }
    } catch (error) {
      console.error('Error retrieving user email:', error);
    }
  };