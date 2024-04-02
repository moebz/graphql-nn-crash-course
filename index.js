import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const port = 4000;

const resolvers = {
  Query: {
    reviews() {
      return db.reviews;
    },
    games() {
      console.log("db", db);
      return db.games;
    },
    authors() {
      return db.authors;
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port,
  },
});

console.log("Server ready at port", port);
