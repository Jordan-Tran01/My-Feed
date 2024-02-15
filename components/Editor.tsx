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
            <button onClick={handleSave}>Save</button>
            
        </div>
    )
}

export default Editor