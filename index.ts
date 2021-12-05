import {GraphQLServer} from "graphql-yoga";

const dummies = [
    {
        id: "12345",
        name: "toto",
    },
    {
        id: "12346",
        name: "titi"
    }
]

const typeDefs = `
type Dummy {
    id: ID
    name: String
}
type Query {
    getAll: [Dummy]
}
`;

const resolvers = {
    Query: {
        getAll: () => dummies
    }
}

const server = new GraphQLServer({typeDefs, resolvers});
server.start(() => console.log("server running on http://localhost:4000"));