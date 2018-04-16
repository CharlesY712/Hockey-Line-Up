import { addScoreboardReducer } from './addScoreboardReducer';
import * as actions from '../actions';
import mockScoreboard from '../mocks/mockScoreboard';

describe('addScoreboardReducer', () => {

  it('should return a default state', () => {
    const expected = [];
    expect(addScoreboardReducer(undefined, {})).toEqual(expected);
  });

  it('should add scoreboard to state', () => {
    const scoreboard = mockScoreboard;
    const expected = scoreboard;
    expect(addScoreboardReducer(undefined, actions.addScoreboard(scoreboard)))
      .toEqual(expected);
  });
});