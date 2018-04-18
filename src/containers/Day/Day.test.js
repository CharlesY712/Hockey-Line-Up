import React from 'react';
import { shallow } from 'enzyme';
import { Day, mapStateToProps, mapDispatchToProps } from './Day';
import { schedule }  from '../../mocks/mockSchedule';
import { scoreboard } from '../../mocks/mockScoreboard';
import { fetchSeason } from '../../helpers/fetchSeason';
import { fetchScoreboard } from '../../helpers/fetchScoreboard';
import * as actions from '../../actions';

jest.mock('../../helpers/fetchSeason.js');
jest.mock('../../helpers/fetchScoreboard.js');

describe('Day', () => {

  describe('Day container', () => {
    const mockAddSchedule = jest.fn();
    const mockAddScoreboard = jest.fn();
    const mockSetDate = jest.fn();
    let wrapper;

    it('should not display schedule if there are no games on day', () => {
      wrapper = shallow(<Day
        date={'2018-04-12'}
        schedule={schedule.dailygameschedule.gameentry}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-04-20'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(wrapper).toMatchSnapshot();
    });

    it('should not display scoreboard if there are no games on day', () => {
      wrapper = shallow(<Day
        date={'2018-04-09'}
        schedule={schedule.dailygameschedule.gameentry}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-04-09'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(wrapper).toMatchSnapshot();
    });

    it('should not display games if selected date length is not 10', () => {
      wrapper = shallow(<Day
        date={'2018-04'}
        schedule={[schedule]}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);
      
      expect(wrapper).toMatchSnapshot();
    });

    it('should not display games if selected date length is not 10', () => {
      wrapper = shallow(<Day
        date={'2018-05'}
        schedule={[schedule]}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-04'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(wrapper).toMatchSnapshot();
    });

    it('should display scoreboard if date is before todays date', () => {
      wrapper = shallow(<Day
        date={'2018-04-12'}
        schedule={[schedule]}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);
      
      expect(fetchScoreboard).toHaveBeenCalled();
    });

    it('should display schedule if selected date is after todays date', () => {
      wrapper = shallow(<Day
        date={'2018-04-18'}
        schedule={schedule.dailygameschedule.gameentry}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);
      
      expect(fetchSeason).toHaveBeenCalled();
    });

    it('should display a loading gif if state.isLoading is true', () => {
      wrapper.setState({isLoading: true});
      expect(wrapper).toMatchSnapshot();
    });

    it('should display schedule when the component is updated', () => {
      wrapper = shallow(<Day
        date={'2018-04-18'}
        schedule={schedule.dailygameschedule.gameentry}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);

      const mockPrevProps = {date: '2018-04-12'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(fetchSeason).toHaveBeenCalled();
    });

    it('should display scorebaord when the component is updated', () => {
      wrapper = shallow(<Day
        date={'2018-04-02'}
        schedule={schedule.dailygameschedule.gameentry}
        scoreboard={scoreboard.scoreboard.gameScore}
        addSchedule={mockAddSchedule}
        addScoreboard={mockAddScoreboard}
        setDate={mockSetDate}
      />);
      
      const mockPrevProps = {date: '2018-04-12'};
      wrapper.instance().componentDidUpdate(mockPrevProps);

      expect(fetchScoreboard).toHaveBeenCalled();
    });
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