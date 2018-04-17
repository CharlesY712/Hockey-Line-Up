import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps } from './Header';
import { schedule }  from '../../mocks/mockSchedule';
import * as actions from '../../actions';

describe('Header', () => {

  describe('Header container', () => {
    let wrapper;
    let mockPathDay = {pathname: '/day'};
    let mockPathWeek = {pathname: '/week'};
    let mockPathMonth = {pathname: '/month'};
    let mockPathHome = {pathname: '/'};
    
    it('should match the snapshot for day', () => {
      wrapper = shallow(<Header location={mockPathDay}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot for week', () => {
      wrapper = shallow(<Header location={mockPathWeek}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot for month', () => {
      wrapper = shallow(<Header location={mockPathMonth}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot for home', () => {
      wrapper = shallow(<Header location={mockPathHome}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should call handleChange on date change', () => {
      const mockFunction = jest.fn();
      wrapper = shallow(<Header
        location={mockPathMonth}
        setDate={mockFunction}
      />);
      const spy = jest.spyOn(wrapper.instance(), 'handleChange');
      const mockEvent = { target: {
        value: '2018-04-14'
      }};
        
      wrapper.instance().handleChange(mockEvent);
      
      expect(spy).toHaveBeenCalled();
    });

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