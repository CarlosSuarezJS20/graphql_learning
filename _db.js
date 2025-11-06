// dummyData.js

let games = [
	{
		id: '1',
		title: 'The Legend of Zelda: Tears of the Kingdom',
		platform: ['Nintendo Switch'],
	},
	{
		id: '2',
		title: 'Elden Ring',
		platform: ['PlayStation 5', 'Xbox Series X', 'PC'],
	},
	{
		id: '3',
		title: 'God of War: Ragnarök',
		platform: ['PlayStation 4', 'PlayStation 5'],
	},
	{
		id: '4',
		title: 'Hades',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 5', 'Xbox One'],
	},
	{
		id: '5',
		title: 'Cyberpunk 2077',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		id: '6',
		title: 'Stardew Valley',
		platform: ['PC', 'Nintendo Switch', 'Mobile'],
	},
	{
		id: '7',
		title: 'The Witcher 3: Wild Hunt',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		id: '8',
		title: 'Minecraft',
		platform: ['PC', 'PlayStation', 'Xbox', 'Mobile'],
	},
	{
		id: '9',
		title: 'Red Dead Redemption 2',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		id: '10',
		title: 'Baldur’s Gate 3',
		platform: ['PC', 'PlayStation 5', 'Mac'],
	},
];

let authors = [
	{ id: '1', name: 'Jane Doe', verified: true },
	{ id: '2', name: 'John Smith', verified: false },
	{ id: '3', name: 'Emily Carter', verified: true },
	{ id: '4', name: 'Michael Brown', verified: false },
	{ id: '5', name: 'Sophia Turner', verified: true },
	{ id: '6', name: 'Liam Johnson', verified: false },
	{ id: '7', name: 'Olivia White', verified: true },
	{ id: '8', name: 'Noah Green', verified: false },
	{ id: '9', name: 'Ava Martinez', verified: true },
	{ id: '10', name: 'Ethan Lewis', verified: true },
];

let reviews = [
	{
		id: '1',
		rating: 9,
		content:
			'An incredible open-world experience with unmatched attention to detail.',
	},
	{
		id: '2',
		rating: 10,
		content: 'A masterpiece — rich storytelling and challenging combat.',
	},
	{
		id: '3',
		rating: 8,
		content:
			'Beautiful art direction and fluid gameplay, but a bit repetitive at times.',
	},
	{
		id: '4',
		rating: 7,
		content: 'Solid mechanics, though the pacing could be better.',
	},
	{
		id: '5',
		rating: 6,
		content: 'Good foundation but too many bugs at launch.',
	},
	{
		id: '6',
		rating: 9,
		content: 'Relaxing and wholesome; perfect for winding down.',
	},
	{
		id: '7',
		rating: 10,
		content: 'An epic story with phenomenal voice acting.',
	},
	{
		id: '8',
		rating: 8,
		content: 'Creative gameplay with tons of replay value.',
	},
	{
		id: '9',
		rating: 9,
		content: 'Visually stunning with a deeply emotional narrative.',
	},
	{ id: '10', rating: 7, content: 'Entertaining but lacks long-term depth.' },
];

let publishers = [
	{ id: '1', name: 'Nintendo' },
	{ id: '2', name: 'FromSoftware' },
	{ id: '3', name: 'Santa Monica Studio' },
	{ id: '4', name: 'Supergiant Games' },
	{ id: '5', name: 'CD Projekt Red' },
	{ id: '6', name: 'ConcernedApe' },
	{ id: '7', name: 'Rockstar Games' },
	{ id: '8', name: 'Mojang Studios' },
	{ id: '9', name: 'Larian Studios' },
	{ id: '10', name: 'Bethesda Game Studios' },
];

export default { games, reviews, authors, publishers };
