import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!, $birthdate: String!) {
    addProfile(name: $name, email: $email, password: $password, birthdate: $birthdate) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const ADD_RACES = gql`
mutation Mutation($age: String, $canceled: Int, $course: String, $date: String, $distance: String, $finished: Int, $idRace: Int) {
  addRaces(age: $age, canceled: $canceled, course: $course, date: $date, distance: $distance, finished: $finished, id_race: $idRace) {
    id_race
    finished
    distance
    date
    course
    canceled
    age
  }
  }
`;
