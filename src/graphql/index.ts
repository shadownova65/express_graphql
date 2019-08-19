import userResolver from './resolvers/userResolvers';
import pokemonResolvers from './resolvers/pokemonResolvers';

const RootResolver = {
  ...userResolver,
  ...pokemonResolvers,
  hello: () => ('Hello World!')
}

export default RootResolver;