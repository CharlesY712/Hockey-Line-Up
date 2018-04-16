import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Header.css';

class Header extends Component {

  determineSelectBox() {
    if (this.props.location.pathname === '/day') {
      return (<input 
        type="date" 
        name="day" 
        className="dateSelector" 
        id="date"
        min="2017-10-04"
        onChange={event => this.props.setDate(event.target.value)}
      />);
    } else if (this.props.location.pathname === '/week') {
      return (<input 
        type="week" 
        name="week" 
        className="dateSelector" 
        id="week"
        min="2017-10-04"
        onChange={event => this.props.setDate(event.target.value)}
      />);
    } else if (this.props.location.pathname === '/month') {
      return (<input 
        type="month" 
        name="month"  
        className="dateSelector" 
        id="month"
        min="2017-10"
        onChange={event => this.props.setDate(event.target.value)}
      />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <header className="header">
        <Link to="/" className="app-title">HOCKEY LINE-UP</Link><br/>
        <div className="select-boxes">
          {this.determineSelectBox()}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  setDate: PropTypes.func,
  location: PropTypes.object
};

export const mapDispatchToProps = dispatch => ({
  setDate: (date) => dispatch(actions.setDate(date))
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
