import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
