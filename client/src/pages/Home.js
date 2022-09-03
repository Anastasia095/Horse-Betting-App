import React from 'react';
import { useQuery } from '@apollo/client';

import UpcomingEvents from '../components/UpcomingRaces';

import { QUERY_PROFILES } from '../utils/queries';
import '../css/home.css'
import MainSchedule from '../components/MainSchedule';
import Header from '../components/Header';
const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <Header />
      <div id="horses">
        <div id="signupbox">
          <h1>Hundreds of Races Every Week!</h1>
          <button>Sign Up Now</button>
        </div>
      </div>
      <div id='main-schedule'>
        <MainSchedule />
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
    </main>
  );
};

export default Home;
