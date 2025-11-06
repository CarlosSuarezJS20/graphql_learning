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
		reviews(context) {
			console.log(context);
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
		publishers() {
			return db.publishers;
		},
		publisher(_, { id }) {
			return db.publishers.find((publisher) => publisher.id === id);
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

		createPublisher(_, {name, games}) {
			const publisher = {
				id: Math.floor(Math.random() * 1000000).toString(),
				name,
				games
			};

			console.log(publisher);

			db.publishers.push(publisher);
			return publisher;
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
