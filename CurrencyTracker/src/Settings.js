import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DropdownButton from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Button';

class Settings extends Component {

    onChange = (event) => {
        const state = this.props.listState;
        const oldFiatCurrency = state.fiatCurrency;
        const newFiatCurrency = event.target.value;

        // load new data if the fiat currency is changed
        if (oldFiatCurrency !== newFiatCurrency) {
            state.fiatCurrency = newFiatCurrency;
            state.newFiatCurrencySet = true;
            state.fetchData();
            if (state.selectedCurrency !== null && state.selectedCurrency !== undefined) {
                state.fetchCurrencyData(state.selectedCurrency.id);
            }
        } else {
            state.newFiatCurrencySet = false;
        }
    }

    render() {
        const state = this.props.listState;
        console.log("Rendered: " + state.fiatCurrency);
        return (
            <div>
                <p>Select currency:</p>
                <select name="fiatCurrency" id="fiatCurrency" onChange={this.onChange}>
                    <option>-- select currency --</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CNY">CNY</option>
                </select>
            </div>
        );
    }
}

export default observer(Settings);