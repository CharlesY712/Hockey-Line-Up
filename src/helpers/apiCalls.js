import { username, password } from '../apiKey';


export const fetchSeason = async (seasonYear = '2017-2018', seasonType = '-playoff') => {
  if (seasonType === '-playoff') { seasonYear = seasonYear.slice(5); }
  try {
    const base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
    const ext = `/${seasonYear}${seasonType}/full_game_schedule.json`;
    const url = base + ext;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Authorization": "Basic " + btoa(username + ":" + password)
      }
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw Error;
  }
};

export const fetchScoreboard = async (seasonYear = '2017-2018', seasonType = '-playoff', date) => {
  if (seasonType === '-playoff') { seasonYear = seasonYear.slice(5); }
  if (date === undefined) { date = new Date().toJSON().slice(0, 10); }
  if (seasonYear.includes(date.slice(0, 4))) {
    try {
      const cleanDate = date.split('-').join('');
      const base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
      const ext = `/${seasonYear}${seasonType}/scoreboard.json?fordate=${cleanDate}`;
      const url = base + ext;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        }
      });
      const json = await response.json();
      return json;
    } catch (error) {
      throw Error;
    }
  }
};