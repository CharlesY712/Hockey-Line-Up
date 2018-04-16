import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from '../../components/Game/Game';
import * as actions from '../../actions';
import './Day.css';
import { fetchSeason, fetchScoreboard } from '../../helpers/apiCalls';
import loadingGif from '../../images/icons/blue_loading.gif';

class Day extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      isLoading: false
    };
  }

  componentDidMount() {
    if (this.props.date.length === 10) {
      const selectedDate = parseInt(this.props.date.split('-').join(''), 10);
      const todaysDate = parseInt(new Date().toJSON().slice(0, 10).split('-').join(''), 10);
      if (selectedDate >= todaysDate) {
        this.getSchedule();
        const gameChildren = this.displayGames();
        this.setState({games: gameChildren});
        this.setState({isLoading: true});
      } else {
        this.getScoreboard();
        const gameChildren = this.displayGames();
        this.setState({games: gameChildren});
        this.setState({isLoading: true});
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.date.length === 10) {
      if (prevProps.date !== this.props.date) {
        const selectedDate = parseInt(this.props.date.split('-').join(''), 10);
        const todaysDate = parseInt(new Date().toJSON().slice(0, 10).split('-').join(''), 10);
        if (selectedDate >= todaysDate) {
          this.getSchedule();
        } else {
          this.getScoreboard();
        }
      }
    }
  }

  async getSchedule(){
    const date = this.props.date;
    const games = await fetchSeason(date);
    const gameSchedule = games.dailygameschedule.gameentry;
    this.props.addSchedule(gameSchedule);
    const gameComponents = this.displayGames(gameSchedule);
    this.setState({games: gameComponents, isLoading: false});
  }

  async getScoreboard(){    
    const date = this.props.date;
    const scoreboard = await fetchScoreboard(date);
    const gameScores = scoreboard.scoreboard.gameScore;
    if (gameScores !== undefined) {
      this.props.addScoreboard(gameScores);
      const gameComponents = this.displayGames();
      this.setState({games: gameComponents, isLoading: false});
    } else {
      const noGames = <Game
        key={'noGames'}
        noGames={'No Games Scheduled'}
      />;
      this.setState({games: noGames, isLoading: false});
    }
  }

  displayGames() {
    const selectedDate = parseInt(this.props.date.split('-').join(''), 10);
    const todaysDate = parseInt(new Date().toJSON().slice(0, 10).split('-').join(''), 10);
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
    if (this.props.date.length === 10) {
      return (
        <div>
          {
            this.state.isLoading &&
          <section>
            <img className="loading-gif" src={loadingGif} alt="loading"/>
          </section>
          }
          {
            !this.state.isLoading &&
          <section>
            <div className="directions">Please select a day in the box above.</div>
            <h2 className="date">{this.props.date}</h2>
            {this.state.games}
          </section>
          }
        </div>
      );
    } else {
      return (
        <section>
          <div className="directions">Please select a day in the box above.</div>
        </section>
      );
    }
  }
}

Day.propTypes = {
  addSchedule: PropTypes.func,
  addScoreboard: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  schedule: PropTypes.array,
  scoreboard: PropTypes.array
};

export const mapStateToProps = state => ({
  date: state.setDate,
  schedule: state.schedule,
  scoreboard: state.scoreboard
});

export const mapDispatchToProps = dispatch => ({
  addSchedule: (season) => dispatch(actions.addSchedule(season)),
  addScoreboard: (season) => dispatch(actions.addScoreboard(season)),
  setDate: (date) => dispatch(actions.setDate(date))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Day));
