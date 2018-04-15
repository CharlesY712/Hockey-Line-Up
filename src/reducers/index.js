import { combineReducers } from 'redux';
import { addSeasonReducer } from './addSeasonReducer';
import { setDateReducer } from './setDateReducer';
import { setSeasonTypeReducer } from './setSeasonTypeReducer';
import { setSeasonYearReducer } from './setSeasonYearReducer';

const rootReducer = combineReducers({
  season: addSeasonReducer,
  setDate: setDateReducer,
  seasonType: setSeasonTypeReducer,
  seasonYear: setSeasonYearReducer
});

export default rootReducer;
