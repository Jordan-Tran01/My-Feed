'use client'
import { createEntry } from "@/utils/api"
import { useRouter } from "next/navigation"

const NewFeedCard = () => {
    const router = useRouter()

    const HandleOnClick = async () => {
        const data = await createEntry()
        router.push(`/home/${data.id}`)
    }

    return (
        <div
            className="cursor-pointer overflow-hidden rounded-lg bg-white shadow"
            onClick={HandleOnClick}>
            <div className="px-4 py-5 sm:p-6">
                <span className="text-3xl">New Feed</span>
            </div>
        </div>
    )
}

export default NewFeedCard