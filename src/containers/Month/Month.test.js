import React from 'react';
import Month from './Month';
import { shallow } from 'enzyme';

describe('Month', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Month/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
