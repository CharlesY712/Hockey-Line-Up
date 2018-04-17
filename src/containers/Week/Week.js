import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from '../../components/Game/Game';
import * as actions from '../../actions';
import { fetchSeason } from '../../helpers/fetchSeason';
import loadingGif from '../../images/icons/blue_loading.gif';
import './Week.css';

export class Week extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      isLoading: false
    };
  }

  componentDidMount() {
    if (this.props.date.includes('W')) {
      this.getWeekDays();
      this.setState({isLoading: true});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      if (this.props.date.includes('W')) {
        this.getWeekDays();
        this.setState({isLoading: true});
      }
    }
  }

  getDateOfISOWeek(year, week) {
    const simple = new Date(year, 0, 1 + (week - 1) * 7);
    const dow = simple.getDay();
    const ISOweekStart = simple;
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart.toISOString().slice(0, 10);
  }

  async getWeekDays() {
    const year = this.props.date.slice(0, 4);
    const week = this.props.date.slice(6, 8);
    const date = this.getDateOfISOWeek(year, week);
    let weekOfGames = [];
    for (let index = 0; index < 7; index++) {
      let myDate = new Date(date);
      myDate.setDate(myDate.getDate() + index);
      let nextDay = myDate.toISOString().slice(0, 10);
      const games = await fetchSeason(nextDay);
      const gameSchedule = games.dailygameschedule.gameentry;
      if (gameSchedule !== undefined) {
        weekOfGames = [...weekOfGames, ...gameSchedule];
      }
    }
    this.props.addSchedule(weekOfGames);
    const gameComponents = this.displayGames(weekOfGames);
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
        date={schedule.date.slice(5)}
        time={schedule.time}
      />;
    });
    return mappedGames;
  }
  
  render() {
    if (this.props.date.includes('W')) {
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
            <div className="directions">Please select a week in the box above.</div>
            <h1 className="date">{this.props.date}</h1>
            {this.state.games}
          </section>
          }
        </div>
      );
    } else {
      return (
        <section>
          <div className="directions">Please select a week in the box above.</div>
        </section>
      );
    }
  }
}

Week.propTypes = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Week));
