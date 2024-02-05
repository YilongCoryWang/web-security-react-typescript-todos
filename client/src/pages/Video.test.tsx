// const video = require('./video');
import Video from './Video'

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

test('plays video', () => {
  const spy = jest.spyOn(Video, 'play' as never);

  expect(spy).toHaveBeenCalled();
});