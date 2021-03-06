import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Header.css';

export class Header extends Component {

  determineSelectBox() {
    if (this.props.location.pathname === '/day') {
      return (<input 
        type="date" 
        name="day" 
        className="date-selector" 
        id="date"
        min="2017-10-04"
        onChange={this.handleChange}
      />);
    } else if (this.props.location.pathname === '/week') {
      return (<input 
        type="week" 
        name="week" 
        className="date-selector" 
        id="week"
        min="2017-10-04"
        onChange={this.handleChange}
      />);
    } else if (this.props.location.pathname === '/month') {
      return (<input 
        type="month" 
        name="month"  
        className="date-selector" 
        id="month"
        min="2017-10"
        onChange={this.handleChange}
      />);
    } else {
      return null;
    }
  }

  handleChange = (event) => {
    this.props.setDate(event.target.value);
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
