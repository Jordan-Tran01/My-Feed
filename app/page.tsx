import Link from 'next/link'
import { auth } from '@clerk/nextjs'


export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/home' : '/new-user'

  return (
    <div className="w-screen h-screen flex justify-center items-center text-white bg-[url('assets/images/home-img.jpg')]">
    <div className="w-full max-w-[500px] py-20 backdrop-blur-md">
      <h1 className="text-6xl mb-4">MyFeed</h1>
      <p className="text-2xl text-white/60 mb-4">Browse through this app and express your thoughts!</p>
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
