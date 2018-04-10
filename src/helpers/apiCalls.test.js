import fetchSeason from './apiCalls';
// import { username, password } from '../apiKey';
import season from '../mocks/mockSeason';

describe('apiCalls', () => {
  describe('fetchSeason', () => {
    let response, url, base, ext, options;
    
    beforeEach(() => {
      response = season;
      base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
      ext = '/2016-2017-regular/full_game_schedule.json';
      url = base + ext;
      options = {
        "method": "GET",
        "headers": {"Authorization": "Basic Q2hhcmxlc1k3MTI6QW50b243MTI="}
      };
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));
    });

    it('should fetch with correct options', () => {
      fetchSeason();
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });
  });
});