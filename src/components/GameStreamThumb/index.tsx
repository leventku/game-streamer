type Props = {
    id: string,
    name: string,
    streamer: string,
    onGameStreamClick: (id: string) => void
}

export const GameStreamThumb = ({id, name, streamer, onGameStreamClick}: Props) => <div onClick={() => onGameStreamClick(id)}>
    <p>{name}</p>
    <p>{streamer}</p>
</div>