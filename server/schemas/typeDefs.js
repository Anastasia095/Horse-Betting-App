const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    birthdate: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Races{
    age: String
    canceled: Int
    course: String
    date: String
    distance: String
    finished: Int
    id_race: Int

  }

  

  type Query {
    racesToday(date: String): [Races]
    races: [Races]
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, birthdate: String!): Auth
    login(email: String!, password: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
    addRaces(age: String, canceled: Int, course: String, date: String, distance: String, finished: Int, id_race: Int): Races
  }
`;

module.exports = typeDefs;
