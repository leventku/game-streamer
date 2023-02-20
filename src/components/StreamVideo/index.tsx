type Props = {
    name: string
    streamer: string
    game: string
    streamLink: string
}

export const StreamVideo = ({
    name,
    streamer,
    game,
    streamLink,
}: Props) => <>
    <img src={streamLink} alt={name}/>
    <p className="streamer">{streamer}</p>
    <h4>{name}</h4>
    <p className="game">{game}</p>
</>