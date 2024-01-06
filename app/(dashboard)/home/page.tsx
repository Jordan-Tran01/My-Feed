import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"


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
    console.log('entries ', entries)
    return <div>Home</div>
}

export default HomePage