import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from '../../components/Game/Game';
import * as actions from '../../actions';
import { fetchSeason } from '../../helpers/fetchSeason';
import loadingGif from '../../images/icons/blue_loading.gif';
import './Month.css';

class Month extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      games: []
    };
  }

  componentDidMount() {
    if (this.props.date.length === 7) {
      this.getMonthDays();
      this.setState({isLoading: true});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      if (this.props.date.length === 7) {
        this.setState({isLoading: true});
        this.getMonthDays();
      }
    }
  }

  async getMonthDays() {
    const date = this.props.date + '-01';
    let monthOfGames = [];
    for (let index = 0; index < 28; index++) {
      let myDate = new Date(date);
      myDate.setDate(myDate.getDate() + index);
      let nextDay = myDate.toISOString().slice(0, 10);
      const games = await fetchSeason(nextDay);
      const gameSchedule = games.dailygameschedule.gameentry;
      if (gameSchedule !== undefined) {
        monthOfGames = [...monthOfGames, ...gameSchedule];
      }
    }
    this.props.addSchedule(monthOfGames);
    const gameComponents = this.displayGames(monthOfGames);
    this.setState({games: gameComponents, isLoading: false});
  }

  displayGames() {
    const mappedGames = this.props.schedule.map(schedule => {
      return <Game
        key={schedule.id}
        homeTeamCity={schedule.homeTeam.City}
        homeTeamName={schedule.homeTeam.Name}
        awayTeamCity={schedule.awayTeam.City}
        awayTeamName={schedule.awayTeam.Name}
        time={schedule.time}
        date={schedule.date.slice(5)}
      />;
    });
    return mappedGames;
  }
  
  render() {
    if (this.props.date.length === 7) {
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
            <div className="directions">Please select a Month in the box above.</div>
            <h1 className="date">{this.props.date}</h1>
            {this.state.games}
          </section>
          }
        </div>
      );
    } else {
      return (
        <section>
          <div className="directions">Please select a Month in the box above.</div>
        </section>
      );
    }
  }
}

Month.propTypes = {
  addSchedule: PropTypes.func,
  addScoreboard: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  schedule: PropTypes.array
};

export const mapStateToProps = state => ({
  date: state.setDate,
  schedule: state.schedule
});

export const mapDispatchToProps = dispatch => ({
  addSchedule: (season) => dispatch(actions.addSchedule(season)),
  setDate: (date) => dispatch(actions.setDate(date))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Month));
