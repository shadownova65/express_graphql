import userResolver from './resolvers/userResolvers';

const RootResolver = {
  ...userResolver,
  hello: () => ('Hello World!')
}

export default RootResolver;