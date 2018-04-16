import { setDateReducer } from './setDateReducer';
import * as actions from '../actions';

describe('setDateReducer', () => {

  it('should return a default state', () => {
    const expected = '';
    expect(setDateReducer(undefined, {})).toEqual(expected);
  });

  it('should add date to state', () => {
    const date = '2018-04-12';
    const expected = date;
    expect(setDateReducer(undefined, actions.setDate(date)))
      .toEqual(expected);
  });
});