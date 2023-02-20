import { useState } from "react"

type Props = {
    onNewChatMessageCreate: (content: string) => void
}

export const NewMessageCreator = ({onNewChatMessageCreate}: Props) => {
    const [content, setContent] = useState('')
    return <form>
        <input type='text' value={content} onChange={(e) => {setContent(e.target.value)}} />
        <button 
            type='button'
            disabled={content.length < 1}
            onClick={() => {
                onNewChatMessageCreate(content)
                setContent('')
            }}>
            Send
        </button>
    </form>
}