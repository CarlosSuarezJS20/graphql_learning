import db from '../../../_db.js';

export const publisherResolvers = {
	Query: {
		publishers() {
			return db.publishers;
		},
		publisher(_, { id }) {
			return db.publishers.find((publisher) => publisher.id === id);
		},
	},
	Publisher: {
		games(parent) {
			if (Array.isArray(parent.games)) {
				return parent.games;
			}

			return db.games
				.filter((game) => game.publisherId === parent.id)
				.map((game) => game.title);
		},
	},
	Mutation: {
		createPublisher(_, { name, games }) {
			const publisher = {
				id: Math.floor(Math.random() * 1000000).toString(),
				name,
				games,
			};

			db.publishers.push(publisher);
			return publisher;
		},
	},
};

export default publisherResolvers;

