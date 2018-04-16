import { mapDispatchToProps } from './Header';
import { schedule }  from '../../mocks/mockSchedule';
import * as actions from '../../actions';

describe('Header', () => {

  describe('Header container', () => {

  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params on setDate', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.setDate(schedule);

      mapped.setDate(schedule);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});