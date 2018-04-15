import { combineReducers } from 'redux';
import { addScheduleReducer } from './addScheduleReducer';
import { addScoreboardReducer } from './addScoreboardReducer';
import { setDateReducer } from './setDateReducer';

const rootReducer = combineReducers({
  schedule: addScheduleReducer,
  scoreboard: addScoreboardReducer,
  setDate: setDateReducer
});

export default rootReducer;
