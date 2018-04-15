import { combineReducers } from 'redux';
import { seasonReducer } from './seasonReducer';
import { seasonDateReducer } from './seasonDateReducer';
import { seasonTypeReducer } from './seasonTypeReducer';

const rootReducer = combineReducers({
  season: seasonReducer,
  seasonDate: seasonDateReducer,
  seasonType: seasonTypeReducer
});

export default rootReducer;
