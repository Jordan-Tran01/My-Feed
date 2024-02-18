'use client'

import { postFeed, updateFeed} from "@/utils/api"
import { useState } from "react"

const Editor = ({ feed }) => {
    const [content, setContent] = useState(feed.content)
    const [title, setTitle] = useState(feed.title)
    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async () => {
        setIsLoading(true);
        await updateFeed(feed.id, content, title, false);
        setIsLoading(false);
      };

      const handlePost = async () => {
        setIsLoading(true);
        await updateFeed(feed.id, content, title, true);
        setIsLoading(false);
      };

    return (

        <div className="w-screen h-screen relative">
            {isLoading && (<div>...loading</div>)}
            <div className="border-black border-solid border-4">
            <textarea className="p-8 text-xl outline-none placeholder:title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            />
            </div>

            <div className="border-black border-solid border-4 my-3">
            <textarea className="p-8 text-xl outline-none border-black" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            />
            </div>
            <div className="my-10">
            <button onClick={handleSave} className="ml-4 p-4 border-solid border-4 border-black">Save for later</button>
            <button onClick={handlePost} className="ml-4 p-4 border-solid border-4 border-black">Post!</button>
            </div>

        </div>
    )
}

export default Editor