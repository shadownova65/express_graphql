import {buildSchema} from 'graphql';

export default buildSchema(`
  type Test {
    hello: String
  }

  type Detail {
    _id: ID
    pokemon: Pokemon
    name: String!
    base_exp: Int
    abilities: [String]
    height: Int
    weight: Int
    avatar: String
    types: [String]

  }

  type Pokemon {
    _id: ID
    name: String!
    url: String!
    detail: Detail
  }

  type User {
    _id: String!
    name: String!
    pokemons: [Pokemon]
  }

  input UserInput {
    name: String!
  }

  type RootQuery {
    user(name: String!): User
    hello: String
    addPokemon(userId: String!): String
    getPokemons: [Detail]
    getDetail(name: String!): Detail
  }

  type RootMutation {
    createUser(name: String!): User

  }

  schema {
    query: RootQuery
    mutation: RootMutation 
  }
`)