import React from 'react';
import Header from '../components/Header';
import RaceCalendar from '../components/Calendar';
import MainSchedule from '../components/MainSchedule';
import '../css/calendar.css'
const Races = () => {
  return (
    <div>
      <Header />
      <div className='racepage'>
        <RaceCalendar/>
        <MainSchedule/>
      </div> 
    </div>
  );
};

export default Races;