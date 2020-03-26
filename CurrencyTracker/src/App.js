import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyList from './CurrencyList';
import CurrencyState from './CurrencyState';
import CurrencyInfo from './CurrencyInfo';
import Settings from './Settings';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    const currencyState = new CurrencyState();
    currencyState.fetchData();
    return (
      <Router>
        <div>
          <header className="App-header">
            <h1>Currency Tracker</h1>
          </header>

          <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/settings"><button>Settings</button></Link>
          </div>

          <Route exact path="/" render={(props) => <CurrencyList {...props} listState={currencyState} />} />
          <Route path="/currencyinfo/:id" render={(props) => <CurrencyInfo {...props} listState={currencyState} />} />
          <Route path="/settings" render={(props) => <Settings {...props} listState={currencyState} />} />

        </div>
      </Router>
    );
  }
}

export default App;
