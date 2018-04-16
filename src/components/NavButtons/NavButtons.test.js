import React from 'react';
import NavButtons from './NavButtons';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavButtons/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
