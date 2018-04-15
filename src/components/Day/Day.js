import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dayCleaner from '../../helpers/dayCleaner';
import Game from '../Game/Game';

class Day extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount(){
    this.captureDayGames();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.captureDayGames();
    }
  }

  captureDayGames = () => {
    const gamesOnDay = dayCleaner(this.props.scoreboard, this.props.date);
    const gameChildren = this.displayGames(gamesOnDay);
    this.setState({games: gameChildren});
  }

  displayGames(games) {
    const mappedGames = games.map(scoreboard => {
      return <Game
        key={scoreboard.game.ID}
        homeTeamCity={scoreboard.game.homeTeam.City}
        homeTeamName={scoreboard.game.homeTeam.Name}
        awayTeamCity={scoreboard.game.awayTeam.City}
        awayTeamName={scoreboard.game.awayTeam.Name}
        time={scoreboard.game.time}
      />;
    });
    return mappedGames;
  }
  
  render() {
    return (
      <section>
        <div>Please select a day in the box above.</div>
        {this.state.games}
      </section>
    );
  }
}

Day.propTypes = {
  scoreboard: PropTypes.array,
  date: PropTypes.string
};

export const mapStateToProps = state => ({
  scoreboard: state.scoreboard,
  date: state.setDate
});

export default withRouter(connect(mapStateToProps)(Day));