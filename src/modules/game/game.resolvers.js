import db from '../../../_db.js';

export const gameResolvers = {
	Query: {
		games() {
			return db.games;
		},
		game(_, { id }) {
			return db.games.find((game) => game.id === id);
		},
	},
	Game: {
		reviews(parent) {
			return db.reviews.filter((review) => review.gameId === parent.id);
		},
	},
	Mutation: {
		deleteGame(_, { id }) {
			const game = db.games.find((gameItem) => gameItem.id === id);
			if (!game) {
				throw new Error('Game not found');
			}

			db.games = db.games.filter((gameItem) => gameItem.id !== id);
			return db.games;
		},
	},
};

export default gameResolvers;

