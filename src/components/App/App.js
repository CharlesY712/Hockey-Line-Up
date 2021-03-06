import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../containers/Header/Header';
import NavButtons from '../NavButtons/NavButtons';
import Home from '../Home/Home';
import Day from '../../containers/Day/Day';
import Week from '../../containers/Week/Week';
import Month from '../../containers/Month/Month';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <NavButtons />
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

export default (App);