type Props = {
    id: string, 
    name: string,
    streamer: string,
    streamLink: string,
    onGameStreamClick: (id: string) => void
}

export const GameStreamThumb = ({id, name, streamer, streamLink, onGameStreamClick}: Props) => <div 
    className='catalog-item'
    onClick={() => onGameStreamClick(id)}>
    <img className="catalog-item-image" src={streamLink} alt={name}/>
    <p className="catalog-item-name">{name}</p>
    <p className="catalog-item-streamer-name">{streamer}</p>
</div>