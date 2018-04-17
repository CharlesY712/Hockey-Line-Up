import { fetchSeason } from '../helpers/fetchSeason';
import mockSchedule from '../mocks/mockSchedule';

describe('fetchSeason', () => {
  
  describe('regular season fetch', () => {

    let response, url, base, ext, options, date;
    
    beforeEach(() => {
      date = '2018-04-02';
      response = mockSchedule;
      base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
      ext = '/2017-2018/daily_game_schedule.json?fordate=20180402';
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
      fetchSeason(date);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });
    
    it('should return an array of games', async () => {
      const expected = mockSchedule;
      const games = await fetchSeason(date);
      expect(games).toEqual(expected);
    });
    
    it('should throw an error', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 500,
          message: 'Error'
        })
      );
      const expected = {
        status: 500,
        message: 'Error'
      };
      const apiCall = fetchSeason(date);
      expect(apiCall).rejects.toEqual(expected);
    });
  });

  describe('playoff fetch', () => {

    let response, url, base, ext, options, date;
    
    beforeEach(() => {
      date = '2018-04-13';
      response = mockSchedule;
      base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
      ext = '/2018/daily_game_schedule.json?fordate=20180413';
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
      fetchSeason(date);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });
    
    it('should return an array of games', async () => {
      const expected = mockSchedule;
      const games = await fetchSeason(date);
      expect(games).toEqual(expected);
    });
    
    it('should throw an error', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 500,
          message: 'Error'
        })
      );
      const expected = {
        status: 500,
        message: 'Error'
      };
      const apiCall = fetchSeason(date);
      expect(apiCall).rejects.toEqual(expected);
    });
  });
});