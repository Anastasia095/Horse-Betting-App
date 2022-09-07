import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';

function RaceCalendar () {
  const [date, setDate] = useState(new Date());
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
console.log(formatDate(date));

  return (
        <div className='app aside'>
            <h1 className='text-center'>Enter Race Day</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toString()}
            </p>
            <div id='tournamentImg'>
                <p>Enter our Tournament and Win Big!</p>
            </div>
        </div> 
  );
}

export default RaceCalendar;
