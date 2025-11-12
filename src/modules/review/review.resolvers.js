import db from '../../../_db.js';

export const reviewResolvers = {
	Query: {
		reviews() {
			return db.reviews;
		},
		review(_, { id }) {
			return db.reviews.find((review) => review.id === id);
		},
	},
	Review: {
		game(parent) {
			return db.games.find((game) => game.id === parent.gameId);
		},
		author(parent) {
			return db.authors.find((author) => author.id === parent.authorId);
		},
	},
	Mutation: {
		createReview(_, { content, rating }) {
			const review = {
				id: Math.floor(Math.random() * 1000000).toString(),
				rating,
				content,
			};

			db.reviews.push(review);
			return review;
		},
	},
};

export default reviewResolvers;

