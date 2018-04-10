import { username, password } from '../apiKey';

const seasonName = '2016-2017-regular';
const base = 'https://api.mysportsfeeds.com/v1.2/pull/nhl';
const ext = `/${seasonName}/full_game_schedule.json`;
const url = base + ext;

const fetchSeason = async () => {
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