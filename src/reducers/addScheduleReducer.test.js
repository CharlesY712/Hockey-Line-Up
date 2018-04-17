import { addScheduleReducer } from './addScheduleReducer';
import * as actions from '../actions';
import mockSchedule from '../mocks/mockSchedule';

describe('addScheduleReducer', () => {

  it('should return a default state', () => {
    const expected = [];
    expect(addScheduleReducer(undefined, {})).toEqual(expected);
  });

  it('should add schedule to state', () => {
    const schedule = mockSchedule;
    const expected = schedule;
    expect(addScheduleReducer(undefined, actions.addSchedule(schedule)))
      .toEqual(expected);
  });
});