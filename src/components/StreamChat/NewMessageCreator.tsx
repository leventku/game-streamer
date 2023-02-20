import EmojiPicker from "emoji-picker-react"
import { useState } from "react"

type Props = {
    onNewChatMessageCreate: (content: string) => void
}

export const NewMessageCreator = ({ onNewChatMessageCreate }: Props) => {
    const [content, setContent] = useState('')
    const [emojiOpen, setEmojiOpen] = useState(false)

    return <>
        <form className="new-message-form">
            <input className="send-message-input" type='text' value={content} onChange={(e) => { setContent(e.target.value) }} />
            <button
                disabled={content.length < 1}
                onClick={() => {
                    onNewChatMessageCreate(content)
                    setContent('')
                }}>
                Send
            </button>
            <span className="emoji-btn" onClick={() => { setEmojiOpen(!emojiOpen) }}>😃</span>
            <div className="emoji-picker">
                {emojiOpen ? <EmojiPicker onEmojiClick={(emojiData, event) => {
                    setContent(content + emojiData.emoji)
                    setEmojiOpen(false)
                }} /> : null}
            </div>
        </form>
    </>
}