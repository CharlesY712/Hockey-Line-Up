import { username, password } from '../apiKey';

export const fetchScoreboard = async (date) => {
  const cleanDate = date.split('-').join('');
  let seasonYear;
  if (parseInt(cleanDate, 10) >= 20180411) {
    seasonYear = date.slice(0, 4);
  } else {
    seasonYear = (parseInt(cleanDate, 10) - 10000).toString().slice(0, 4) + '-' + date.slice(0, 4);
  }
  try {
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
    throw error;
  }
};