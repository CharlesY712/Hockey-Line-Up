import React from 'react';
import { shallow } from 'enzyme';
import { Week, mapStateToProps, mapDispatchToProps } from './Week';
import { schedule }  from '../../mocks/mockSchedule';
import { fetchSeason } from '../../helpers/fetchSeason';
import * as actions from '../../actions';

jest.mock('../../helpers/fetchSeason.js');
jest.mock('../../helpers/fetchScoreboard.js');

describe('Week', () => {

  describe('Week container', () => {
    const mockAddSchedule = jest.fn();
    const mockSetDate = jest.fn();
    let wrapper;

    it('should not display schedule on update if there are no games in Week', () => {
      wrapper = shallow(<Week
        date={'2018-W24'}
        schedule={schedule.dailygameschedule.gameentry}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-W24'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(wrapper).toMatchSnapshot();
    });

    it('should not display games on mount if selected date doesnt include W', () => {
      wrapper = shallow(<Week
        date={'2018-04-12'}
        schedule={[schedule]}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      expect(wrapper).toMatchSnapshot();
    });

    it('should not display games on update if selected date doesnt inclued W', () => {
      wrapper = shallow(<Week
        date={'2018-04-12'}
        schedule={[schedule]}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-04-14'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(wrapper).toMatchSnapshot();
    });

    it('should display schedule when a Week with games is selected', () => {
      wrapper = shallow(<Week
        date={'2018-W16'}
        schedule={schedule.dailygameschedule.gameentry}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);
      
      expect(fetchSeason).toHaveBeenCalled();
    });

    it('should display schedule when the component is updated', () => {
      wrapper = shallow(<Week
        date={'2018-W15'}
        schedule={schedule.dailygameschedule.gameentry}
        addSchedule={mockAddSchedule}
        setDate={mockSetDate}
      />);

      const mockPrevProps = {date: '2018-W14'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(fetchSeason).toHaveBeenCalled();
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