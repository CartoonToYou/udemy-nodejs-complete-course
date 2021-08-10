const { buildSchema } = require("graphql");

/* Like Router in RestAPIs */
/* *** Like JSON Structure *** */
/* type String, Integer, Boolean ... with (!) === required */
// type TestData {
//   text: String!
//   views: Int!
// }
// type RootQuery {
//   hello: TestData!
// }
// schema {
//   query: RootQuery
// }
module.exports = buildSchema(`
  type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String!
    creator: User!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    status: String!
    posts: [Post!]!
  }

  input UserInputData {
    email: String!
    name: String!
    password: String!
  }

  type RootQuery {
    hello: String
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

/*
createUser recieve param *userInput* with type UserInputData
return User data with type User
*/
