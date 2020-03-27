import { observable, decorate } from 'mobx';

class CurrencyState {
    list = [];
    selectedCurrency = {};
    fiatCurrency = "USD";
    newFiatCurrencySet = false;

    getSelectedItem = (id) => {
        return this.list.filter(
            item => item.id === id
        );
    }

    fetchData() {
        // sorted by rank
        // format - array
        // fiat currency
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=' + this.fiatCurrency; 
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': '0a60a53d-38be-416f-9cb3-9b733ed93eae'
            },
        };

        console.log("Retrieving data");
        fetch(proxyUrl + targetUrl, requestOptions)
            .then(results => results.json())
            .then(newData => this.list = newData.data);
    }

    /* TO DO - change url */
    fetchCurrencyData(id) {
        // retreiving data for selected currency
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD'; 
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': '0a60a53d-38be-416f-9cb3-9b733ed93eae'
            },
        };

        console.log("Retrieving data for selected currency with id: " + id);
        fetch('https://api.coinmarketcap.com/v2/ticker/' + id + '/?convert=' + this.fiatCurrency)
            .then(results => results.json())
            .then(selectedItem => {
                console.log("Updating state");
                this.selectedCurrency = selectedItem.data;
                console.log("Done fetching!");
            });
    }
}

decorate(CurrencyState, {
    list: observable,
    selectedCurrency: observable,
    fiatCurrency: observable
});

export default CurrencyState;
