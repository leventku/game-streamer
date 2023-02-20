import { DonationCreator } from "../DonationCreator"
import { StreamChat } from "../StreamChat"

type Props = {
    id: string
}

export const StreamDetailSide = ({id}: Props) => <div className="StreamDetailSide">
    <DonationCreator id={id}/>
    <StreamChat id={id}/>
</div>