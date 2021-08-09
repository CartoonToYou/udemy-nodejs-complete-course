const { buildSchema } = require("graphql");

/* Like Router in RestAPIs */
/* *** Like JSON Structure *** */
/* type String, Integer, Boolean ... with (!) === required */
module.exports = buildSchema(`
  type TestData {
    text: String!
    views: Int!
  }

  type RootQuery {
    hello: TestData!
  }

  schema {
    query: RootQuery
  }
`);
