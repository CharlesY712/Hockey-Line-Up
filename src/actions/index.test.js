import actions from './index';

describe('actions', () => {
  it('should match the snapshot', () => {
    expect(actions).toMatchSnapshot();
  });
});

// each action needs to ahve test for correct type and correct payload