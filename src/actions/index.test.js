import actions from './index';

describe('actions', () => {
  it('should match the snapshot', () => {
    expect(actions).toMatchSnapshot();
  });
});