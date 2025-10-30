import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js';

// resolvers
const resolvers = {
	Query: {
		games() {
			return db.games;
		},
		reviews() {
			return db.reviews;
		},
		authors() {
			return db.authors;
		},
		review(_, { id }) {
			return db.reviews.find((review) => review.id === id);
		},
		game(_, { id }) {
			return db.games.find((game) => game.id === id);
		},
		author(_, { id }) {
			return db.authors.find((author) => author.id === id);
		},
	},
	Author: {
		reviews(_, { id }) {
			return db.reviews.filter((review) => review.id === id);
		},
	},
	Mutation: {
		createReview(_, {content, rating}) {
			const review = {
				id: Math.floor(Math.random() * 1000000).toString(),
				rating,
				content
			};
			db.reviews.push(review);
			return review;
		},
	},
};

//Server
const server = new ApolloServer({
	typeDefs,
	resolvers
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log('server ready port' + url, 4000);
