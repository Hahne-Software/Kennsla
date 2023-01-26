import express from "express";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

console.log("Starting Kennsla server...");

// init and start express server
const app = express();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return "Hello world!";
    },
};

// add graphql endpoint
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }),
);

app.listen(3000, () => {
    console.log("Kennsla server started...");
    console.log("GraphQL-Endpoint: http://localhost:3000/graphql");
});
