import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dayCleaner from '../../helpers/dayCleaner';
import Game from '../Game/Game';

class Day extends Component {

  componentDidUpdate() {
    let day = "2016-10-12";
    const gamesOnDay = dayCleaner(this.props.season, day);
    console.log(gamesOnDay);
    this.displayGames(gamesOnDay);
  }

  displayGames(games) {
    const mappedGames = games.map(game => {
      return <Game
        key={game.id}
        homeTeamCity={game.homeTeam.City}
        homeTeamName={game.homeTeam.Name}
        awayTeamCity={game.awayTeam.City}
        awayTeamName={game.awayTeam.Name}
      />;
    });
    return mappedGames;
  }
  
  render() {
    return (
      <section>
        <div>Please select a day in the box above.</div>
      </section>
    );
  }
}

Day.propTypes = {
  season: PropTypes.array
};

const mapStateToProps = state => ({
  season: state.season
});

export default withRouter(connect(mapStateToProps)(Day));