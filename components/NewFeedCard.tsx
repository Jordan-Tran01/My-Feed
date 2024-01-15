'use client'
import { createEntry } from "@/utils/api"
import { useRouter } from 'next/navigation'

const NewFeedCard = () => {
    const router = useRouter()

    const handleOnClick = async () => {
      const data = await createEntry()
      router.push(`/journal/${data.id}`)
    }

    return (
        <div
            className="cursor-pointer overflow-hidden rounded-lg bg-white shadow"
            onClick={handleOnClick}>
            <div className="px-4 py-5 sm:p-6">
                <span className="text-3xl">New Feed</span>
            </div>
        </div>
    )
}

export default NewFeedCard