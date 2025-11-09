export const typeDefs = `#graphql

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Game{
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }

  type Publisher {
  id: ID!
  name: String!
}

# user actions

  type Review{
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }

  type Query{
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
    createReview(content:String!, rating:Int!):Review,
    createPublisher(name:String!, games: [String!]!):Publisher,
    deleteGame(id:ID!):[Game!]!
  }


`;
