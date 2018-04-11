import { combineReducers } from 'redux';
import { seasonReducer } from './seasonReducer';
import { selectSeasonReducer } from './selectSeasonReducer';

const rootReducer = combineReducers({
  season: seasonReducer,
  selectSeason: selectSeasonReducer
});

export default rootReducer;
