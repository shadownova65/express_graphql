import {buildSchema} from 'graphql';

export default buildSchema(`
  type Test {
    hello: String
  }

  type Detail {
    _id: ID!
    name: String
    base_exp: Int
    abilities: [String]
    height: Int
    weight: Int
    avatar: String
    types: [String]
  }

  type Pokemon {
    _id: ID!
    name: String!
    url: String!
    detail: Detail
  }

  type User {
    _id: String!
    name: String!
  }

  input UserInput {
    name: String!
  }

  type RootQuery {
    user(name: String!): User
    hello: String
  }

  type RootMutation {
    createUser(name: String!): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation 
  }
`)