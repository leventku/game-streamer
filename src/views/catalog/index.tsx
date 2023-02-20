import { View } from "../../../types";
import { GameStreamThumb } from "../../components/GameStreamThumb";
import { mostFollowedGames } from "../../mocks/mostFollowedGames";
import { recommendedStreamsMock } from "../../mocks/recommendedStreams";
import './catalog.css'


type Props = {
    onSetView: (newView: View) => void
}
export const CatalogScreen = ({ onSetView }: Props) => (
    <>
        <h2>Recommended streams</h2>
        <div className="catalog-row">
            {recommendedStreamsMock.map((it) => <GameStreamThumb
                key={it.id}
                id={it.id}
                name={it.name}
                streamer={it.streamer}
                streamLink={it.streamLink}
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
        </div>

        <h2>Most followed games</h2>
        <div className="catalog-row">
            {mostFollowedGames.map((it) => <GameStreamThumb
                key={it.id}
                id={it.id}
                name={it.name}
                streamer={it.streamer}
                streamLink={it.streamLink}
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
        </div>
    </>
);
