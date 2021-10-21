import React from 'react'
import './currency.scss';

export default function Currency ({currencyName,selectedCurrency,onChangeCurrency,sum,onChangeSum}) {
    return (
        <div className="currency">
            <input className="input" type="number" value={sum} onChange={onChangeSum}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyName.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
        </div>
    )
}