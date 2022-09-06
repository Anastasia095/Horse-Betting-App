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

  type Checkout {
    session: ID
  }

  type Bets {
    _id: ID
    name: String
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    bets: [Bets]
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

  type Horses{
    horse: String
    id_horse: Int
    jockey: String
    trainer: String
    age: Int
    weight: String
    number: Int
    form: String
    position: Int
    distance_beaten: String
    sp: String
    id_race: Int

  }

  type Query {
    bets(horse: String): [Bets]
    bet(_id: ID!): Bets
    order(_id: ID!): Order
    horses(id_race: Int): [Horses]
    racesToday(date: String): [Races]
    races: [Races]
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    checkout(products: [ID]!): Checkout
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addOrder(bets: [ID]!): Order
    addHorses(horse: String, id_horse: Int, jockey: String, trainer: String,  age: Int, weight: String, form: String, position: Int, distance_beaten: String, sp: String, id_race: Int): Horses
    addProfile(name: String!, email: String!, password: String!, birthdate: String!): Auth
    login(email: String!, password: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
    addRaces(age: String, canceled: Int, course: String, date: String, distance: String, finished: Int, id_race: Int): Races
  }
`;

module.exports = typeDefs;
