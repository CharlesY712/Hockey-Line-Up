import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from '../Game/Game';

class Day extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount(){
    const gameChildren = this.displayGames();
    this.setState({games: gameChildren});
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const gameChildren = this.displayGames();
      this.setState({games: gameChildren});
    }
  }

  displayGames() {
    const selectedDate = parseInt(this.props.date.split('-').join(''));
    const todaysDate = parseInt(new Date().toJSON().slice(0, 10).split('-').join(''));
    if (selectedDate >= todaysDate) {
      const mappedGames = this.props.schedule.map(schedule => {
        return <Game
          key={schedule.id}
          homeTeamCity={schedule.homeTeam.City}
          homeTeamName={schedule.homeTeam.Name}
          awayTeamCity={schedule.awayTeam.City}
          awayTeamName={schedule.awayTeam.Name}
          time={schedule.time}
        />;
      });
      return mappedGames;
    } else {
      const mappedGames = this.props.scoreboard.map(scoreboard => {
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
  }
  
  render() {
    return (
      <section>
        <div>Please select a day in the box above.</div>
        <h1>{this.props.date}</h1>
        {this.state.games}
      </section>
    );
  }
}

Day.propTypes = {
  schedule: PropTypes.array,
  scoreboard: PropTypes.array,
  date: PropTypes.string
};

export const mapStateToProps = state => ({
  schedule: state.schedule,
  scoreboard: state.scoreboard,
  date: state.setDate
});

export default withRouter(connect(mapStateToProps)(Day));