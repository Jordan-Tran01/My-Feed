import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import NewEntryCard from "@/components/NewEntryCard"
import EntryCard from "@/components/EntryCard"
import Link from 'next/link'


const getEntries = async () => {
    const user = await getUserFromClerkID()
    const entries = await prisma.feedEntry.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return entries
}

const HomePage = async () => {
    const entries = await getEntries()

    return ( 
    <div className="p-6 bg-gray-50"> 
        <h1>Your Discussions</h1>
        <div className="grid grid-cols-3 gap-4 p-5">
        <NewEntryCard />
        {entries.map((entry) => (
          <div key={entry.id}>
            <Link href={`/journal/${entry.id}`}>
              <EntryCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </div>
    )
}

export default HomePage