import { UserButton } from "@clerk/nextjs"

const DashboardLayout = ({ children }) => {
    return <div className="h-screen w-screen relative">
        <aside className="absolute w-[200px] top-0 left-0 h-full border-r flex items-top justify-center border-black/10">
            <h1 className="mt-5">MyFeed</h1>
        </aside>
        <div className="ml-[200px]">
            <header className="h-[60px] border-b border-black/10">

                <div className="h-full w-full px-6 flex items-center justify-end">
                    <UserButton />
                </div>
            </header>
            <div>{children}</div> 
        </div>
    </div>
}

export default DashboardLayout