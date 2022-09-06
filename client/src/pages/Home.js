import React from 'react';
import { useQuery } from '@apollo/client';

import UpcomingEvents from '../components/UpcomingRaces';
import { useNavigate } from 'react-router-dom';
import { QUERY_PROFILES } from '../utils/queries';
import '../css/home.css'
import MainSchedule from '../components/MainSchedule';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <Header />
      <div id="horses">
        <div id="signupbox">
          <h1>Hundreds of Races Every Week!</h1>
          <button
          onClick={() => navigate('/signup')}>Sign Up Now</button>
        </div>
      </div>
      <div id='main-schedule'>
        <MainSchedule/>
      </div>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UpcomingEvents
              // profiles={profiles}
              // title="Upcoming Races"
            />
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
