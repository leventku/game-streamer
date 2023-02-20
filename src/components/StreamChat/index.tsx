import { useState } from "react"
import { mockMessages } from "../../mocks/userMessages"
import { NewMessageCreator } from "./NewMessageCreator"

type Props = {
    id: string
}

export const StreamChat = ({ id }: Props) => {
    const [messages, setMessages] = useState(mockMessages)
    return <>
        {messages.map(m => <p key={m.id}>{m.userName}: {m.content}</p>)}
        <NewMessageCreator onNewChatMessageCreate={(newMessage) => {
                setMessages([...messages, { id: ''+(Number(messages[messages.length - 1].id) + 1), userName: 'You', content: newMessage }]) 
            }} 
        />
    </>
}