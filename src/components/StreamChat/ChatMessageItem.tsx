import { UserMessage } from "../../../types"

type Props = {
    message: UserMessage
    isLast: boolean
}

export const ChatMessageItem = ({message, isLast}: Props) => {
    return <p className="chat-message-item" {...(isLast && {id:'last-message'})}>
        <span className="user-name">{message.userName}</span><span className="message-content">: {message.content}</span>
    </p>
}