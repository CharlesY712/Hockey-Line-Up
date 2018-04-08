// import { username, password } from '../../apiKey';

const username = 'CharlesY712'
const password = 'Anton712'
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
  console.log(json)
  return json;
};

// $.ajax
// ({
//   type: "GET",
//   url: {pull-url},
//   dataType: 'json',
//   async: false,
//   headers: {
//     "Authorization": "Basic " + btoa({username} + ":" + {password})
//   },
//   data: '{ "comment" }',
//   success: function (){
//     alert('Thanks for your comment!'); 
//   }
// });

export default fetchSeason;