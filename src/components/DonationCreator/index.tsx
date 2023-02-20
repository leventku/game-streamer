import { useState } from "react"
import { Amount } from "../Amount"

type Props = {
    id: string
}

export const DonationCreator = ({ id }: Props) => {
    const [state, setState] = useState({
        savedValue: 124,
        currentValue: 0,
    })
    return <form className="donation-form" onSubmit={(e) => e.preventDefault()}>
        <span>Total donation:</span> <Amount value={state.savedValue} currency='USD'></Amount>
        <div className="amount-input-field">
            <input
                type='number'
                value={Number(state.currentValue).toString()}
                onChange={(e) => { setState({ ...state, currentValue: Number(e.target.value) }) }} />
            <span>USD</span>
            <button
                type='button'
                onClick={() => { setState({ savedValue: state.savedValue + state.currentValue, currentValue: 0 }) }}
            >
                Donate
            </button>
        </div>
    </form>

}