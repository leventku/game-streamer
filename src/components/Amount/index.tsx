type Props = {
    value: number;
    currency: string;
};

export const Amount = ({ value, currency: currency }: Props) => {
    const formattedMoney = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol',
    }).format(value)

    return <div className="amount">{formattedMoney}</div>
}