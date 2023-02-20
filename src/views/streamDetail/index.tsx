import { useState } from "react";
import { View } from "../../../types";
import { StreamDetailSide } from "../../components/StreamDetailSide";
import { StreamVideo } from "../../components/StreamVideo";
import { ToggleChatBtn } from "../../components/ToggleChatBtn";
import './streamDetail.css'

type Props = {
    id: string
    name: string
    streamer: string
    game: string
    streamLink: string
}

export const StreamDetailScreen = ({
    id,
    name,
    streamer,
    game,
    streamLink }: Props) => {
    const [sideOpen, setSideOpen] = useState(false)
    
    return (
        <div className="stream-detail">
            <div className={`stream-video ${sideOpen ? 'narrow' : 'wide'}`}>
                <StreamVideo
                    streamLink={streamLink}
                    name={name}
                    streamer={streamer}
                    game={game} />

            </div>
            <div className={`stream-side ${sideOpen ? 'open' : 'close'}`}>
                <ToggleChatBtn directionRight={sideOpen} onClick={() => setSideOpen((prev) => !prev)} />
                
                {sideOpen ? <StreamDetailSide id={id} /> : null }
            </div>
        </div>
    );
};
