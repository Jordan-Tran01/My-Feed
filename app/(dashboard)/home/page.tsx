import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import NewFeedCard from "@/components/NewFeedCard"
import FeedCard from "@/components/FeedCard"
import Link from 'next/link'


const getFeeds = async () => { //Function to extract the feeds of the specific user
    const user = await getUserFromClerkID()
    const feeds = await prisma.feedEntry.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return feeds
}

const getEmail = async () => {
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


const HomePage = async () => {
    const feeds = await getFeeds()
    const email = await getEmail()

    return ( 
    <div className="p-6 bg-gray-50"> 
        <div className="py-8">{email}</div>
        <NewFeedCard />
        <div className="grid grid-cols-3 gap-4 p-5">
        {feeds.map((feed) => (
          <div key={feed.id}>
            <Link href={`/home/${feed.id}`}>
              <FeedCard feed={feed} />
            </Link>
        </div>
        ))}
      </div>
    </div>
    )
}

export default HomePage