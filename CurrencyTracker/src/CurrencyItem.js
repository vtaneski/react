import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react';

class CurrencyItem extends Component {

    onClick = () => {
        const selectedCurrencyId = this.props.item.id;
        this.props.state.fetchCurrencyData(selectedCurrencyId);
    }

    render() {
        const item = this.props.item;
        const fiatCurrency = this.props.state.fiatCurrency;
        const quotes = item.quote[fiatCurrency];

        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.cmc_rank}</td>
                <td>{item.symbol}</td>
                <td>{quotes.price}</td>
                <td>{quotes.percent_change_24h}</td>
                <td>
                    <Link
                        to={{
                            pathname: '/currencyinfo/' + item.id
                        }}
                    >
                        <button onClick={this.onClick}>Details</button>
                    </Link></td>
            </tr >
        )
    }
}

export default observer(CurrencyItem);