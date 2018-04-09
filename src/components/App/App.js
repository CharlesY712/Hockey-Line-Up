import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Day from '../Day/Day';
import Week from '../Week/Week';
import Month from '../Month/Month';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            path="/day"
            component={Day}
          />
          <Route
            path="/week"
            component={Week}
          />
          <Route
            path="/month"
            component={Month}
          />
        </Switch>
      </div>
    );
  }
}

export default App;