import { addScheduleReducer } from './addScheduleReducer';
import * as actions from '../actions';
import mockSeason from '../mocks/mockSeason';

describe('addScheduleReducer', () => {

  it('should return a default state', () => {
    const expected = [];
    expect(addScheduleReducer(undefined, {})).toEqual(expected);
  });

  it('should add schedule to state', () => {
    const schedule = mockSeason;
    const expected = schedule;
    expect(addScheduleReducer(undefined, actions.addSchedule(schedule)))
      .toEqual(expected);
  });
});