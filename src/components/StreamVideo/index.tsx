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
    <p>{streamer}</p>
    <p>{name}</p>
    <p>{game}</p>
</>