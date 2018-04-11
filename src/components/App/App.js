import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/index';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Day from '../Day/Day';
import Week from '../Week/Week';
import Month from '../Month/Month';
import fetchSeason from '../../helpers/apiCalls';


import './App.css';
import NavButtons from '../NavButtons/NavButtons';

class App extends Component {

  async componentDidMount() {
    const fullSeason = await fetchSeason();
    const seasonGames = fullSeason.fullgameschedule.gameentry;
    this.props.addSeason(seasonGames);
  }

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

App.propTypes = {
  addSeason: PropTypes.func
};



const mapDispatchToProps = dispatch => ({
  addSeason: (season) => dispatch(actions.addSeason(season))
});

export default withRouter(connect(null, mapDispatchToProps)(App));