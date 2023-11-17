import express from 'express';
import { typeDefs } from './graphql/tasks/schema.js';
import { resolvers } from './graphql/tasks/resolvers.js';
import { ApolloServer} from 'apollo-server-express';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 9000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  }

startServer();