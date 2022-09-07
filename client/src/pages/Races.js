import React from 'react';
import Header from '../components/Header';
import RaceCalendar from '../components/Calendar';
import RaceDay from '../components/raceDay';
import '../css/calendar.css'
import '../css/home.css'
import Footer from '../components/Footer';
const Races = () => {
  return (
    <div>
      <Header />
      <div className='racepage'>
        <RaceCalendar/>
        <RaceDay/>
      </div> 
      <Footer />
    </div>
  );
};

export default Races;