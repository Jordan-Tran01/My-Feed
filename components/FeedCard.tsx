const FeedCard = ({feed}) => {
    const date = new Date(feed.createdAt).toDateString()
    return (
        <div className="divide-y divide-gray-200 overflow-hidden bg-white shadow">
            <div className="px-5 py-5 sm:px-6">{date}</div>
            <div className="px-4 py-5 sm:p-6">summary</div>
            <div className="px-4 py-4 sm:px-6">feedback</div>
        </div>
    )
}

export default FeedCard