import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { getEmail } from "@/utils/email"
import NewFeedCard from "@/components/NewFeedCard"
import FeedCard from "@/components/FeedCard"
import Link from 'next/link'
import PostedFeedCard from "@/components/PostedFeed"

const getPostedFeeds = async () => {
  try {
      const user = await getUserFromClerkID();
      const feeds = await prisma.feedEntry.findMany({
          where: {
              userId: user.id,
              posted: true,
          },
          orderBy: {
              createdAt: 'desc',
          },
      });

      return feeds;
  } catch (error) {
      console.error('Error fetching feeds:', error);
      throw new Error('Failed to fetch feeds');
  }
};

const getDraftedFeeds = async () => {
  try {
      const user = await getUserFromClerkID();
      const feeds = await prisma.feedEntry.findMany({
          where: {
              userId: user.id,
              posted: false,
          },
          orderBy: {
              createdAt: 'desc',
          },
      });

      return feeds;
  } catch (error) {
      console.error('Error fetching feeds:', error);
      throw new Error('Failed to fetch feeds');
  }
};

const HomePage = async () => {
    const draftedFeeds = await getDraftedFeeds()
    const postedFeeds = await getPostedFeeds()
    const email = await getEmail()
    const user = await getUserFromClerkID()
    const username = user.username;

    return ( 
    <div className="p-6 bg-gray-50"> 
        <NewFeedCard />
        <h1 className="p-6 font-semibold text-gray-700 text-3xl">{username}'s Drafted Feeds</h1>
        <div className="grid grid-cols-3 gap-4 p-5">
        {draftedFeeds.map((feed) => (
          <div key={feed.id}>
            <Link href={`/home/${feed.id}`}>
              <FeedCard feed={feed} />
            </Link>
        </div>
        ))}
      </div>

      <h1 className="p-6 font-semibold text-gray-700 text-3xl">{username}'s Posted Feeds</h1>
        <div className="grid grid-cols-3 gap-4 p-5">
        {postedFeeds.map((feed) => (
          <div key={feed.id}>
            <Link href={`/home/${feed.id}`}>
              <PostedFeedCard feed={feed} />
            </Link>
        </div>
        ))}
      </div>
    </div>
    )
}

export default HomePage