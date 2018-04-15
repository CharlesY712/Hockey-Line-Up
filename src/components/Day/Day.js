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
    const gamesOnDay = dayCleaner(this.props.season, this.props.date);
    console.log(gamesOnDay);
    const gameChildren = this.displayGames(gamesOnDay);
    this.setState({games: gameChildren});
  }

  displayGames(games) {
    const mappedGames = games.map(game => {
      return <Game
        key={game.id}
        homeTeamCity={game.homeTeam.City}
        homeTeamName={game.homeTeam.Name}
        awayTeamCity={game.awayTeam.City}
        awayTeamName={game.awayTeam.Name}
        time={game.time}
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
  season: PropTypes.array,
  date: PropTypes.string
};

const mapStateToProps = state => ({
  season: state.season,
  date: state.setDate
});

export default withRouter(connect(mapStateToProps)(Day));