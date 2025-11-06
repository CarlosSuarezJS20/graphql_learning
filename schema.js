export const typeDefs = `#graphql
  interface Node {
    id: ID!
  }

  # Author
  
  type Author implements Node {
    id:ID!
    name: String!
    verified: Boolean!
    reviews: [Review]!
  }

  # Game

  type Game{
    id: ID!
    title: String!
    platform: [String!]!
  }

  type Publisher {
  id: ID!
  name: String!
  games: [String!]!
}

# user actions

  type Review{
    id: ID!
    rating: Int!
    content: String!
  }



  type Query{
    node(id: ID!): Node
    reviews: [Review]
    review(id:ID!):Review  
    games: [Game]
    game(id:ID!):Game
    authors:[Author]
    author(id:ID!):Author
    publishers: [Publisher]
    publisher(id:ID!):Publisher
  }
    
  type Mutation{
    createReview(content:String!, rating:Int!):Review
  }

  type Mutation{
    createPublisher(name:String!, games: [String!]!):Publisher
  }
`;
