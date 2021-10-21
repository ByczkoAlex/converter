import React, {useEffect, useState} from 'react';
import './App.scss';
import Currency from "./Components/currency/Currency";
import axios from "axios";

const BASE_URL = 'https://www.cbr-xml-daily.ru/latest.js'

function App() {

    const [currencyName, setCurrencyName] = useState([])
    const [fromCurrency, setFromCurrency] = useState([])
    const [toCurrency, setToCurrency] = useState([])
    const [exchangeRate, setExchangeRate] = useState([])
    const [sum, setSum] = useState(1)
    const [sumInFromCurrency, setSumInFromCurrency] = useState(true)


    // let toSum = sum
    // let fromSum = sum
    //
    // if (sumInFromCurrency) {
    //     toSum = sum / exchangeRate
    // } else {
    //     fromSum = sum * exchangeRate
    // }
    console.log(sumInFromCurrency)

    let toSum, fromSum
    if (sumInFromCurrency) {
        fromSum = sum
        toSum = sum * exchangeRate
    } else {
        toSum = sum
        fromSum = sum / exchangeRate
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                setCurrencyName([data.base, ...Object.keys(data.rates)])
                setFromCurrency(data.base)
                setToCurrency(firstCurrency)
                setExchangeRate(data.rates[firstCurrency])
                // console.log(response.data)
            })
    }, []);

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(response => response.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
                    //
                    // console.log(response.data.rates[toCurrency])
        }
    }, [fromCurrency, toCurrency])

    function handleFromSumChange(e) {
        debugger
        setSum(e.target.value)
        setSumInFromCurrency(true)
    }

    function handleToSumChange(e) {
        debugger
        setSum(e.target.value)
        setSumInFromCurrency(false)
    }

    function callback1 (e) {
        debugger
        setSumInFromCurrency(false)
        setFromCurrency(e.target.value)
    }

    function callback2 (e) {
        debugger
        setSumInFromCurrency(true)
        setToCurrency(e.target.value)
    }

    return (
        <div className="App">
            <h1>Currency Converter</h1>
            <div className="content">
                <Currency currencyName={currencyName}
                          selectedCurrency={fromCurrency}
                          onChangeCurrency={callback1}
                          sum={fromSum}
                          onChangeSum={handleFromSumChange}
                />
                <span className="equal">
                    =
                </span>
                <Currency currencyName={currencyName}
                          selectedCurrency={toCurrency}
                          onChangeCurrency={callback2}
                          sum={toSum}
                          onChangeSum={handleToSumChange}
                />
            </div>
        </div>
    );
}

export default App;
