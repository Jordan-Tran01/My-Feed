import Link from 'next/link'

export default function Home() {
  return <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
    <div className="w-full max-w-[600px] mx-auto">
      <h1 className="text-6xl mb-4">ChatMate</h1>
      <p className="text-2xl text-white/60 mb-4">Browse through this app and explore amazing features to interact to your friend with!</p>
      <div>
        <Link href="/home">
          <button className="bg-blue-600 px-4 py-3 rounded-lg text-xl text-white">Get started</button>
        </Link>
      </div>
    </div>
  </div>
}
