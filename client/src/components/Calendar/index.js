import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { ADD_RACES } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import {
    Button,
} from '@chakra-ui/react'

function RaceCalendar() {
    const [addRaces] = useMutation(ADD_RACES);
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
    const todaysDate = formatDate(date)


   


    //   console.log(date);

    return (
        <div className='app aside'>
            <h1 className='text-center'>Enter Race Day</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                <Button as={'a'} className="btn btn-lg btn-light m-2" variant={'link'} href={'/events/' + todaysDate}>{todaysDate}</Button>
            </p>
            <div id='tournamentImg'>
                <p>Enter our Tournament and Win Big!</p>
            </div>
        </div>
    );
}

export default RaceCalendar;
