import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { getEmail } from "@/utils/email"
import NewFeedCard from "@/components/NewFeedCard"
import FeedCard from "@/components/FeedCard"
import Link from 'next/link'
import { clerkClient } from '@clerk/nextjs';
import { auth } from "@clerk/nextjs"

import { currentUser } from '@clerk/nextjs'


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
    const email = await getEmail()
    //const userId = await auth()
    //const user = await clerkClient.users.getUser(userId.userId);
    const user = await getUserFromClerkID()
    const username = user.username;
    return ( 
    <div className="p-6 bg-gray-50"> 
        <div className="py-8">{username}'s drafts</div>
        <NewFeedCard />
        <h1 className="p-6 font-semibold text-gray-700 text-3xl">Drafted Feeds</h1>
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