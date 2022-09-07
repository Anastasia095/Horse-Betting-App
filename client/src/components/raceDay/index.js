import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RaceSchedule from '../RacesByDaye';
const axios = require("axios");
var moment = require('moment');

const MainSchedule = () => {
    const { eventid } = useParams();
    console.log(eventid)
    const [races, getRaces] = useState('');
    useEffect(() => {
        getAllraces();
   }, []);
    const options = {
        method: 'GET',
        url: 'https://horse-racing-usa.p.rapidapi.com/racecards',
        params: { date: eventid },
        headers: {
            'X-RapidAPI-Key': 'cb4bee5a1amsh26c0be09d81f012p19f5bdjsn7964190293ea',
            'X-RapidAPI-Host': 'horse-racing-usa.p.rapidapi.com'
        }
    };

   const getAllraces  = () => {

    axios.request(options).then((response) => {
        console.log(response.data);
        const allRaces = response.data
        getRaces(allRaces);
    }).catch(function (error) {
        console.error(error);
    });
}
    console.log(races)

    return (
        <div class="homemiddle">
            <h1>Race Track Schedule</h1>
        <RaceSchedule
        races = {races}/>
        </div>
    );
};

export default MainSchedule;