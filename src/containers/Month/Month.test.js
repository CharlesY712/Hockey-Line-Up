import { mapStateToProps, mapDispatchToProps } from './Month';
import { schedule }  from '../../mocks/mockSchedule';
import * as actions from '../../actions';

describe('Month', () => {

  describe('Month container', () => {

  });

  describe('mapStateToProps', () => {
    
    it('correctly maps the schedule to props', () => {
      const mockState = { schedule: [schedule] };
      const mapped = mapStateToProps(mockState);
      const expected = [schedule];

      expect(mapped.schedule).toEqual(expected);
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

    it('should call dispatch with the correct params on setDate', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.setDate(schedule);

      mapped.setDate(schedule);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});