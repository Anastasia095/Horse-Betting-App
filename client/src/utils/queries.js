import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
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
export const QUERY_HORSES = gql`
  query horses($id_race: Int) {
    horses(id_race: $id_race) {
      horse
      id_horse
      jockey
      trainer
      age
      weight
      form
      position
      distance_beaten
      sp
      id_race
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
      id_race
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_BETS = gql`
  query bets {
    bets {
      user
      horse
      price
    }
  }
`;