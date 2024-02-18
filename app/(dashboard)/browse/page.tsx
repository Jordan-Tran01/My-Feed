import { prisma } from "@/utils/db"
import FeedCard from "@/components/FeedCard"
import Link from "next/link"

const getPublicFeeds = async () => { 
    const feeds = await prisma.feedEntry.findMany({
        where: {
            posted: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return feeds
}


const BrowsePage = async () => {
    const feeds = await getPublicFeeds()

    return (
        <div className="p-6 bg-gray-50"> 
        <h1 className="p-6 font-semibold text-gray-700 text-3xl">Browse and Comment on peoples feeds!</h1>
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

export default BrowsePage