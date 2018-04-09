import { username, password } from '../apiKey';

const seasonName = '2016-2017-regular';
const url = `https://api.mysportsfeeds.com/v1.2/pull/nhl/${seasonName}/full_game_schedule.json`;

const fetchSeason = async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    }
  });
  const json = await response.json();
  console.log(json);
  return json;
};

export default fetchSeason;