import db from '../../../_db.js';

export const reviewResolvers = {
	Query: {
		reviews(_, { limit = 10, offset = 0 }) {
			// Validate pagination parameters
			const validLimit = Math.max(1, Math.min(100, limit)); 
			console.log(validLimit);// Limit between 1 and 100
			const validOffset = Math.max(0, offset);
			console.log(validOffset);
			
			const totalCount = db.reviews.length;
			const paginatedReviews = db.reviews.slice(validOffset, validOffset + validLimit);
			
			// Create edges with cursors (using ID as cursor)
			const edges = paginatedReviews.map((review) => ({
				node: review,
				cursor: review.id, // Using ID as cursor for simplicity
			}));
			
			// Calculate page info
			const hasNextPage = validOffset + validLimit < totalCount;
			const hasPreviousPage = validOffset > 0;
			const startCursor = edges.length > 0 ? edges[0].cursor : null;
			const endCursor = edges.length > 0 ? edges[edges.length - 1].cursor : null;
			
			return {
				edges,
				pageInfo: {
					hasNextPage,
					hasPreviousPage,
					startCursor,
					endCursor,
				},
				totalCount,
			};
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
		createReview(_, { review }) {
			const newReview = {
				id: Math.floor(Math.random() * 1000000).toString(),
				...review,
				createdAt: new Date().toISOString()
			};
			db.reviews.push(newReview);
			return newReview;
		}
	},
};

export default reviewResolvers;
