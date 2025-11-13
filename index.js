import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules in Node.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load all typeDefs
const typeDefsArray = loadFilesSync(
  path.resolve(__dirname, 'src/modules/**/*.graphql')
);

// Load all resolvers
const resolversArray = loadFilesSync(
  path.resolve(__dirname, 'src/modules/**/*.resolvers.js')
);

const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
