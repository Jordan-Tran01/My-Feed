import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import Editor from '@/components/Editor'

const getFeed = async (id) => {
    const user = await getUserFromClerkID()
    const feed = await prisma.feedEntry.findUnique({
        where: {
            userId_id: {
                userId: user.id,
                id,
            },
        },
    })

    return feed
}

const EditorPage = async ({ params }) => {
    const feed = await getFeed(params.id)
    return <div>
        <Editor feed={feed} />
    </div>
}

export default EditorPage