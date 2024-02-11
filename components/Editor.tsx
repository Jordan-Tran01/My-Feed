'use client'

import { updateFeed, updateTitle } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({ feed }) => {
    const [value, setValue] = useState(feed.content)
    const [title, setTitle] = useState(feed.title)
    const [isLoading, setIsLoading] = useState(false)

    useAutosave({
        data: value,
        onSave: async (_value) =>{
            setIsLoading(true)
            const updated = await updateFeed(feed.id, _value, title)
            setIsLoading(false)
        },
    })

    useAutosave({
        data: title,
        onSave: async (_title) =>{
            setIsLoading(true)
            const updated = await updateFeed(feed.id, value, _title)
            setIsLoading(false)
        },
    })

    return (

        <div className="w-full h-full">
            {isLoading && (<div>...loading</div>)}
            <textarea className="p-8 text-xl outline-none border-black" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            />
            <textarea className="p-8 text-xl outline-none border-black" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            />
            
        </div>
    )
}

export default Editor