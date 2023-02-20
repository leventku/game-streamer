import { useState } from "react"
import { Amount } from "../Amount"

type Props = {
    id: string
}

export const DonationCreator = ({id}: Props) => {
    const [state, setState] = useState({
        savedValue: 124,
        currentValue: 0,
    })
    return <>
        <span>Total donation:</span><Amount value={state.savedValue} currency='USD'></Amount>
        <form>
            <input
                type='number'
                value={Number(state.currentValue).toString()}
                onChange={(e) => {setState({...state, currentValue: Number(e.target.value)})}}></input>
            USD
            <button
                type='button'
                onClick={() => {setState({savedValue: state.savedValue + state.currentValue, currentValue: 0})}}
            >
                Donate
            </button>
        </form>
    </>
}