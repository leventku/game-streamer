import { View } from "../../../types";
import { GameStreamThumb } from "../../components/GameStreamThumb";
import { mostFollowedGames } from "../../mocks/mostFollowedGames";
import { recommendedStreamsMock } from "../../mocks/recommendedStreams";



type Props = {
    onSetView: (newView: View) => void
}
export const CatalogScreen = ({ onSetView }: Props) => (
    <>
        <h2>Recommended streams</h2>
        {recommendedStreamsMock.map((it) => <GameStreamThumb
            key={it.id}
            id={it.id}
            name={it.name}
            streamer={it.streamer}
            onGameStreamClick={() => {
                onSetView({
                    type: 'detail',
                    id: it.id,
                    name: it.name,
                    streamer: it.streamer,
                    game: it.game,
                    streamLink: it.streamLink
                })
            }}
        />)}

        <h2>Most followed games</h2>
        {mostFollowedGames.map((it) => <GameStreamThumb
            key={it.id}
            id={it.id}
            name={it.name}
            streamer={it.streamer}
            onGameStreamClick={() => {
                onSetView({
                    type: 'detail',
                    id: it.id,
                    name: it.name,
                    streamer: it.streamer,
                    game: it.game,
                    streamLink: it.streamLink
                })
            }}
        />)}
    </>
);
