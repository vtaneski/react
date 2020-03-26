import React, { Component } from 'react';
import CurrencyItem from "./CurrencyItem";
import { observer } from 'mobx-react';
import './CurrencyList.css';

class CurrencyList extends Component {

    componentDidMount() {
        if (this.props.listState.newFiatCurrencySet) {
            this.props.listState.fetchData();
        }
    }

    onRefresh = () => {
        console.log("Refresh button clicked");
        this.props.listState.fetchData();
    }

    render() {
        const state = this.props.listState;
        const fiatCurrency = state.fiatCurrency;
        
        return (
            <div>
                <div className="refresh">
                    <button onClick={this.onRefresh}>Refresh</button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Rank</td>
                            <td>Symbol</td>
                            <td>Price ({fiatCurrency})</td>
                            <td>24h change</td>
                            <td></td>
                        </tr>
                        {state.list.map(item => <CurrencyItem item={item} state={state} key={item.id} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default observer(CurrencyList);
