import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import SkillsList from '../components/SkillsList';
// import SkillForm from '../components/SkillForm';
// import ProfileNav from '../components/ProfileNav';
import { QUERY_SINGLE_PROFILE, QUERY_ME, QUERY_BETS } from '../utils/queries';
import Auth from '../utils/auth';
import SimpleSidebar from '../components/SideBar';
import '../css/home.css'

const Profile = () => {
  const { profileId } = useParams();
  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const data = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // const betsData = useQuery(QUERY_BETS);
  // const betsResults = data?.bets || data?.bets || {};
  // console.log(betsData.data);
  // var returned = betsData.data;
  // console.log(returned.bets[0]);
  
  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/profile" />;
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (!profile?.name) {
    return (
      <div>
        <SimpleSidebar />
      </div>
      
    );
  }
console.log(profile)
  return (

    <div>
      
      <SimpleSidebar />
    </div>
  );
};

export default Profile;
