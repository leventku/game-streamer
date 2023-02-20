import { useEffect, useState } from "react"
import { mockMessages } from "../../mocks/userMessages"
import { NewMessageCreator } from "./NewMessageCreator"
import { ChatMessageItem } from "./ChatMessageItem"

type Props = {
    id: string
}

const scrollToLast = () => {
    document.getElementById('last-message')?.scrollIntoView();
}

export const StreamChat = ({ id }: Props) => {
    const [messages, setMessages] = useState(mockMessages)

    useEffect(() => {
        scrollToLast()
    }, [messages.length])
    return <>
        <h3>Stream chat</h3>

        <div className="chat-messages-container">
            {messages.map((m, idx) =>
                <ChatMessageItem
                    key={m.id}
                    message={m}
                    isLast={idx +1 === messages.length}
                    />
            )}
        </div>

        <NewMessageCreator 
            onNewChatMessageCreate={(newMessage) => {
                setMessages([
                    ...messages, 
                    { id: ''+(Number(messages[messages.length - 1].id) + 1),
                    userName: 'You',
                    content: newMessage 
                }])
            }} 
        />
    </>
}