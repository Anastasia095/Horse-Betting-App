import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

export const QUERY_RACES = gql`
  query Races {
    races {
      date
      course
      age
    }
  }
`;

//racesToday refers to resolver that will be used for this Query, I spent all day on this... Ana
export const QUERY_RACES_TODAY = gql`
  query racesToday($date: String) {
    racesToday(date: $date) {
      date
      course
      age
    }
  }
`;