import { useState } from "react";
import { View } from "../../../types";
import { StreamDetailSide } from "../../components/StreamDetailSide";
import { StreamVideo } from "../../components/StreamVideo";

type Props = {
    id: string
    name: string
    streamer: string
    game: string
    streamLink: string
    onSetView: (newView: View) => void
}

export const StreamDetailScreen = ({
    onSetView,
    id,
    name,
    streamer,
    game,
    streamLink }: Props) => {
    const [sideOpen, setSideOpen] = useState(false)
    return (
        <>
            <button onClick={() => {onSetView({type: 'catalog'})}}>Back</button>
            <StreamVideo
                streamLink={streamLink}
                name={name}
                streamer={streamer}
                game={game} />

            <button onClick={() => setSideOpen((prev) => !prev)}>Toggle chat</button>
            {sideOpen ? <StreamDetailSide id={id} /> : null }
        </>
    );
};
