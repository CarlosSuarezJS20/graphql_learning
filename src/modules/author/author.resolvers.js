import db from '../../../_db.js';

export const authorResolvers = {
	Query: {
		authors() {
			return db.authors;
		},
		author(_, { id }) {
			return db.authors.find((author) => author.id === id);
		},
		authorSearch(_, { search }) {
			console.log(search);
			return db.authors.filter((author) => author.name.toLowerCase().includes(search.toLowerCase()));
		}
	},
	Author: {
		reviews(parent) {
			return db.reviews.filter((review) => review.authorId === parent.id);
		},
	},
	Mutation: {
		createAuthor(_, { name, verified = false }) {
			const author = {
				id: Math.floor(Math.random() * 1000000).toString(),
				name,
				verified,
				createdAt: new Date().toISOString(),
			};

			db.authors.push(author);
			return author;
		},
	},
};

export default authorResolvers;

