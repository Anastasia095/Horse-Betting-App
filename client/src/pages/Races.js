import React from 'react';
import Header from '../components/Header';
import RaceCalendar from '../components/Calendar';
import MainSchedule from '../components/MainSchedule';
import '../css/calendar.css'
import '../css/home.css'
import Footer from '../components/Footer';
const Races = () => {
  return (
    <div>
      <Header />
      <div className='racepage'>
        <RaceCalendar/>
        <MainSchedule/>
      </div> 
      <Footer />
    </div>
  );
};

export default Races;