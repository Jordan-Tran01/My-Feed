'use client'

import { updateFeed} from "@/utils/api"
import { useState } from "react"

const Editor = ({ feed }) => {
    const [content, setContent] = useState(feed.content)
    const [title, setTitle] = useState(feed.title)
    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async () => {
        setIsLoading(true);
        await updateFeed(feed.id, content, title);
        setIsLoading(false);
      };

    return (

        <div className="w-full h-full">
            {isLoading && (<div>...loading</div>)}
            <textarea className="p-8 text-xl outline-none border-black" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            />
            <textarea className="p-8 text-xl outline-none border-black" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            />
            <button onClick={handleSave} className="ml-4 p-4 border-solid border-4 border-black">Save for later</button>
            <button onClick={handleSave} className="ml-4 p-4 border-solid border-4 border-black">Post!</button>
            
        </div>
    )
}

export default Editor