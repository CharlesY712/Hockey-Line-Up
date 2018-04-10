import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import dayCleaner from '../../helpers/dayCleaner';

const Day = ({ season }) => {

  let day = "2016-10-12";
  dayCleaner(season, day);

  return (
    <div>Please select a day in the box above.</div>
  );
};

const mapStateToProps = state => ({
  season: state.season
});

export default withRouter(connect(mapStateToProps)(Day));