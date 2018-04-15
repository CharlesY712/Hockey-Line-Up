import { username, password } from '../apiKey';


export const fetchSeason = async (date) => {
  if (date === undefined) { date = new Date().toJSON().slice(0, 10); }
  const seasonYear = date.slice(0, 4);
  const cleanDate = date.split('-').join('');
  try {
    const base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
    const ext = `/${seasonYear}/daily_game_schedule.json?fordate=${cleanDate}`;
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

export const fetchScoreboard = async (date) => {
  if (date === undefined) { date = new Date().toJSON().slice(0, 10); }
  const seasonYear = date.slice(0, 4);
  try {
    const cleanDate = date.split('-').join('');
    const base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
    const ext = `/${seasonYear}/scoreboard.json?fordate=${cleanDate}`;
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