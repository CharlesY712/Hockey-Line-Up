import React from 'react';
import Game from './Game';
import { shallow } from 'enzyme';

describe('Game', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Game/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
