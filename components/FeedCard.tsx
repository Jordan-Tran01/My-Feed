
const FeedCard = ({feed}) => {
    const date = new Date(feed.createdAt).toDateString()
    const title = feed.title

    return (
        <div className="divide-y divide-gray-200 overflow-hidden bg-white shadow">
            <div className="px-4 py-5 sm:p-6">{title}</div>
            <div className="px-4 py-5 sm:p-6">Drafted by name.username on {date} </div>
        </div>
    )
}

export default FeedCard