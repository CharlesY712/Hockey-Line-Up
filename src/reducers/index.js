import { combineReducers } from 'redux';
import { seasonReducer } from './seasonReducer';

const rootReducer = combineReducers({
  season: seasonReducer
});

export default rootReducer;
