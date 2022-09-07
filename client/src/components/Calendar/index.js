import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';


function RaceCalendar () {
  const [date, setDate] = useState(new Date());
  console.log(date);
    
  return (
        <div className='app aside'>
            <h1 className='text-center'>Enter Race Day</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
            <div id='tournamentImg'>
                <p>Enter our Tournament and Win Big!</p>
            </div>
        </div> 
  );
}

export default RaceCalendar;
