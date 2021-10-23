import React, {Component} from "react";

class Converter extends Component {


    componentDidMount() {
        const amount = this.state.amount;
        if (amount === isNaN) {
            return;
        } else {
            fetch(`https://www.cbr-xml-daily.ru/latest.js?base=${this.state.base}`)
                .then(res => res.json())
                .then(data => {
                    const currencies = data.rates
                    this.setState({
                        currencies,
                    });
                });
        }
    }

    state = {
        currencies: {},
        base: "BYN",
        amount: "",
        convertTo: "EUR",
        result: "",
    };


    handleSelect = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
                result: null
            },
            this.calculate
        );
    };

    handleInput = e => {
        this.setState(
            {
                amount: e.target.value,
                result: null,
            },
            this.calculate
        );
    };

    calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
            return;
        } else {
            const koef = this.state.currencies[this.state.base] / this.state.currencies[this.state.convertTo];
            this.setState({
                result: (this.state.amount / koef).toFixed(4)
            })
        }
    };


    render() {
        const {currencies, base, amount, convertTo, result} = this.state;
        return (
            <div>
                <h2>
                    Converter
                </h2>
                <div>
                    <div>
                        <form>
                            <input
                                type="number"
                                value={amount}
                                onChange={this.handleInput}
                            />
                            <select
                                name="base"
                                value={base}
                                onChange={this.handleSelect}
                            >
                                {Object.keys(currencies).map(currency => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                        </form>

                        <form>
                            <input
                                disabled={true}
                                value={
                                    amount === ""
                                        ? "0"
                                        : result === null
                                        ? "Calculating..."
                                        : result
                                }
                            />
                            <select
                                name="convertTo"
                                value={convertTo}
                                onChange={this.handleSelect}
                            >
                                {Object.keys(currencies).map(currency => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Converter;

