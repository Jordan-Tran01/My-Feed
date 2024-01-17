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

const HomePage = async () => {
    const feeds = await getFeeds()

    return ( 
    <div className="p-6 bg-gray-50"> 
        <h1>Your Discussions</h1>
        <div className="grid grid-cols-3 gap-4 p-5">
        <NewFeedCard />
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