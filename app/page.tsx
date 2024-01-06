import Link from 'next/link'
import { auth } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/home' : '/new-user'

  return (
  <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
    <div className="w-full max-w-[600px] mx-auto">
      <h1 className="text-6xl mb-4">FeedMate</h1>
      <p className="text-2xl text-white/60 mb-4">Browse through this app and explore amazing features to interact with!</p>
      <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started now
            </button>
          </Link>
        </div>
    </div>
  </div>
  )
}
