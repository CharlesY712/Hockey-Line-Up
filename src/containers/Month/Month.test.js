import React from 'react';
import { shallow } from 'enzyme';
import { Month, mapStateToProps, mapDispatchToProps } from './Month';
import { schedule }  from '../../mocks/mockSchedule';
import { fetchSeason } from '../../helpers/fetchSeason';
import * as actions from '../../actions';

jest.mock('../../helpers/fetchSeason.js');
jest.mock('../../helpers/fetchScoreboard.js');

describe('Month', () => {

  describe('Month container', () => {
    const mockAddSchedule = jest.fn();
    const mockSetDate = jest.fn();
    let wrapper;

    it('should not display schedule if there are no games in Month', () => {
      wrapper = shallow(<Month
        date={'2018-06'}
        schedule={schedule.dailygameschedule.gameentry}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-04'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(wrapper).toMatchSnapshot();
    });

    it('should not display games on mount if selected date length is not 7', () => {
      wrapper = shallow(<Month
        date={'2018-04-12'}
        schedule={[schedule]}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      expect(wrapper).toMatchSnapshot();
    });

    it('should not display games on update if selected date length is not 7', () => {
      wrapper = shallow(<Month
        date={'2018-04-12'}
        schedule={[schedule]}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-04-14'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(wrapper).toMatchSnapshot();
    });

    it('should display schedule when a month is selected', () => {
      wrapper = shallow(<Month
        date={'2018-04'}
        schedule={schedule.dailygameschedule.gameentry}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      expect(fetchSeason).toHaveBeenCalled();
    });

    it('should display schedule when the component is updated', () => {
      wrapper = shallow(<Month
        date={'2018-04'}
        schedule={schedule.dailygameschedule.gameentry}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);

      const mockPrevProps = {date: '2018-03'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(fetchSeason).toHaveBeenCalled();
    });

    it('should display a loading gif if state.isLoading is true', () => {
      wrapper.setState({isLoading: true});
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    
    it('correctly maps the schedule to props', () => {
      const mockState = { schedule: [schedule] };
      const mapped = mapStateToProps(mockState);
      const expected = [schedule];

      expect(mapped.schedule).toEqual(expected);
    });

    it('correctly maps the date to props', () => {
      const date = '2018-04';
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