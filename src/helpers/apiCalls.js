import { username, password } from '../apiKey';


const fetchSeason = async (seasonDate, seasonType) => {
  seasonDate = '2016-2017';
  seasonType = '-regular';
  const base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
  const ext = `/${seasonDate}${seasonType}/full_game_schedule.json`;
  const url = base + ext;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    }
  });
  const json = await response.json();
  return json;
};



export default fetchSeason;