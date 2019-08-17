//1. npm i express, graphql, express-graphql
//   database MongoDB
//2. import buildSchema from graphql, graphqlHTTP from express-graphql
import express from 'express';
import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
//create database connections
mongoose.connect('mongodb://localhost/ExpressGraphQL')
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
})
db.on('error', (err) => {
  console.log('database error: ', err);
})

//3. construct a schema
import schema from './graphql/schema'
// var schema = buildSchema(`
//   type Test {
//     hello: String
//   }
// `);


//4. build a resolver function for the root route
import root from './graphql/index'
// var root = {
//   hello: () => {
//     return 'Hello World!';
//   }
// }

//5. setup route with express
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL server is live on 4000'));