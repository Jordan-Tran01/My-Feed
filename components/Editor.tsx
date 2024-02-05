'use client'

import { useState } from "react"

const Editor = ({ feed }) => {
    const [titleValue, setTitleValue] = useState(feed.title)
    const [contentValue, setContentValue] = useState(feed.content)
    return (

        <div className="w-full h-full">
            <textarea className="w-200 h-20 p-8 text-xl outline-none" 
            value={contentValue} 
            onChange={(e) => setContentValue(e.target.value)} 
            />
            <textarea className="w-200 h-200 p-8 text-xl outline-none" 
            value={titleValue} 
            onChange={(e) => setTitleValue(e.target.value)} 
            />
            
        </div>
    )
}

export default Editor