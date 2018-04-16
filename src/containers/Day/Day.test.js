import { mapStateToProps, mapDispatchToProps } from './Day';
import { schedule }  from '../../mocks/mockSchedule';
import { scoreboard } from '../../mocks/mockScoreboard';
import * as actions from '../../actions';

describe('Day', () => {

  describe('Day container', () => {

  });

  describe('mapStateToProps', () => {
    
    it('correctly maps the schedule to props', () => {
      const mockState = { schedule: [schedule] };
      const mapped = mapStateToProps(mockState);
      const expected = [schedule];

      expect(mapped.schedule).toEqual(expected);
    });

    it('correctly maps the scoreboard to props', () => {
      const mockState = { scoreboard: [scoreboard] };
      const mapped = mapStateToProps(mockState);
      const expected = [scoreboard];

      expect(mapped.scoreboard).toEqual(expected);
    });

    it('correctly maps the date to props', () => {
      const date = '2018-04-12';
      const mockState = { setDate: date };
      const mapped = mapStateToProps(mockState);
      const expected = date;

      expect(mapped.date).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params on addSchedule', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.addSchedule(schedule);

      mapped.addSchedule(schedule);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with the correct params on addScoreboard', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.addScoreboard(scoreboard);

      mapped.addScoreboard(scoreboard);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with the correct params on setDate', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.setDate(schedule);

      mapped.setDate(schedule);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});