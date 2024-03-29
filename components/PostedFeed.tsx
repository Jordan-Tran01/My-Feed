import { getUserbyUserId } from "@/utils/auth"

const PostedFeedCard = async ({feed}) => {
    const date = new Date(feed.createdAt).toDateString()
    const title = feed.title
    const user = await getUserbyUserId(feed.userId)

    return (
        <div className="divide-y divide-gray-200 overflow-hidden bg-white shadow border-double border-4 border-black">
            <div className="px-4 py-5 sm:p-6">{title}</div>
            <div className="px-4 py-5 sm:p-6">Posted by {user.username} on {date} </div>
        </div>
    )
}

export default PostedFeedCard