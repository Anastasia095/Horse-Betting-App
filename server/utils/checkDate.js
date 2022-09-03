//added localStorage package to keep track of days
const { Races } = require('../models');
const axios = require("axios");
var moment = require('moment');

const options = {
    method: 'GET',
    url: 'https://horse-racing-usa.p.rapidapi.com/results',
    params: { date: moment().format('YYYY[-]MM[-]DD')  },
    
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
        return false;
    }
    const data = axios.request(options).then(function (response) {

        var result = response.data;
        console.log(result);

        try {
            Races.insertMany(result);
        } catch (err) {
            console.error(err);
        }

    }).catch(function (error) {
        console.error(error);
    });
}


