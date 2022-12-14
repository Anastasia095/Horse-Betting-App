//added localStorage package to keep track of days
const { Races, Horses } = require('../models');
const axios = require("axios");
var moment = require('moment');

const options = {
  method: 'GET',
  url: 'https://horse-racing-usa.p.rapidapi.com/racecards',
  params: { date: moment().format('YYYY[-]MM[-]DD') },

  headers: {
    'X-RapidAPI-Key': 'cb4bee5a1amsh26c0be09d81f012p19f5bdjsn7964190293ea',
    'X-RapidAPI-Host': 'horse-racing-usa.p.rapidapi.com'
  }
};

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
function hasOneDayPassed() {
  var date = new Date().toLocaleDateString();
  console.log(date)
  if (localStorage.getItem("app_date") == date)
    return false;

  localStorage.setItem("app_date", date);
  return true;
}

exports.runOncePerDay = () => {
  if (!hasOneDayPassed()) {
    console.log("FALSE");
    return false;
  }
  const data = axios.request(options).then(function (response) {
    console.log(response);
    console.log(response.data);
    console.log("Getting races");
    var result = response.data;
    async function init(i) {
      await sleep(i * 7000);
      apiscript(i);
    };
    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };
    function apiscript(i, b) {
      console.log("==================>" + i);
      console.log(result[i].id_race);
      var race_id = result[i].id_race;
      console.log("==================>" + race_id);
      const options2 = {
        method: 'GET',
        url: 'https://horse-racing-usa.p.rapidapi.com/race/'
          + race_id,
        headers: {
          'X-RapidAPI-Key': 'cb4bee5a1amsh26c0be09d81f012p19f5bdjsn7964190293ea',
          'X-RapidAPI-Host': 'horse-racing-usa.p.rapidapi.com'
        }
      };

      console.log("AXIOS FUNCTION count"+ i);
      axios.request(options2).then(function (response) {
        const horsesData = response.data.horses;
        horsesData.forEach(function (itm) {
          itm.id_race = result[i].id_race;
          delete itm['odds'];
          delete itm['poolData'];
          delete itm['non-runner'];
        });
        try {
          Horses.insertMany(horsesData);
        } catch (err) {
          console.error(err);
        };

      }).catch(function (error) {
        console.error(error);
      });

      // i++;
    }
      let i = 0;
      // let b = 0;
      console.log('length test' + result.length);
    for(i; i < result.length; i++) {
      console.log("loop test")
      console.log(result.length);
      console.log("Iteration " + i);
        init(i);
    };

    try {
      Races.insertMany(result);
    } catch (err) {
      console.error(err);
    };
  }).catch(function (error) {
    console.error(error);
  });

};
