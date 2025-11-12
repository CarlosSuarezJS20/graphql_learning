const platformVariants = [
	['PC'],
	['Nintendo Switch'],
	['PlayStation 5'],
	['Xbox Series X'],
	['PC', 'PlayStation 5'],
	['PC', 'Xbox Series X'],
	['PlayStation 5', 'Xbox Series X'],
	['PC', 'Nintendo Switch', 'PlayStation 5'],
	['PC', 'PlayStation 5', 'Xbox Series X'],
	['PC', 'PlayStation 5', 'Mac'],
	['PC', 'PlayStation', 'Xbox', 'Mobile'],
	['PC', 'PlayStation 4', 'PlayStation 5'],
	['PC', 'PlayStation 4', 'Xbox One'],
	['PC', 'Nintendo Switch', 'Mobile'],
	['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
];

const basePublishers = [
	'Nintendo',
	'FromSoftware',
	'Santa Monica Studio',
	'Supergiant Games',
	'CD Projekt Red',
	'ConcernedApe',
	'Rockstar Games',
	'Mojang Studios',
	'Larian Studios',
	'Bethesda Game Studios',
	'Guerrilla Games',
	'Sabotage Studio',
	'ZA/UM',
	'3909 LLC',
	'Annapurna Interactive',
	'Capybara Games',
	'Hi-Rez Studios',
	'Digital Extremes',
	'Deck Nine',
	'Arrowhead Game Studios',
	'LucasArts',
	'Double Fine Productions',
	'Playdead',
	'Respawn Entertainment',
	'Obsidian Entertainment',
	'Telltale Games',
	'Sucker Punch Productions',
	'Massive Monster',
	'Thunderful Publishing',
	'Coffee Stain Studios',
	'Klei Entertainment',
	'Motion Twin',
	'Future Friends Games',
	'Yacht Club Games',
	'Bossa Studios',
	'Hello Games',
	'Subset Games',
	'Team Cherry',
	'Facepunch Studios',
	'Hinterland Studio',
	'InnerSloth',
	'Monomi Park',
	'Housemarque',
	'Dontnod Entertainment',
	'Supermassive Games',
	'Inkle Studios',
	'Red Hook Studios',
	'Motion Capture Studios',
	'TinyBuild',
	'Chucklefish',
];

const publishers = basePublishers.slice(0, 50).map((name, index) => ({
	id: (index + 1).toString(),
	name,
}));

const baseGames = [
	{
		title: 'The Legend of Zelda: Tears of the Kingdom',
		platform: ['Nintendo Switch'],
		publisherId: '1',
	},
	{
		title: 'Elden Ring',
		platform: ['PlayStation 5', 'Xbox Series X', 'PC'],
		publisherId: '2',
	},
	{
		title: 'God of War: Ragnarök',
		platform: ['PlayStation 4', 'PlayStation 5'],
		publisherId: '3',
	},
	{
		title: 'Hades',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 5', 'Xbox One'],
		publisherId: '4',
	},
	{
		title: 'Cyberpunk 2077',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
		publisherId: '5',
	},
	{
		title: 'Stardew Valley',
		platform: ['PC', 'Nintendo Switch', 'Mobile'],
		publisherId: '6',
	},
	{
		title: 'The Witcher 3: Wild Hunt',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
		publisherId: '5',
	},
	{
		title: 'Minecraft',
		platform: ['PC', 'PlayStation', 'Xbox', 'Mobile'],
		publisherId: '8',
	},
	{
		title: 'Red Dead Redemption 2',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
		publisherId: '7',
	},
	{
		title: 'Baldur’s Gate 3',
		platform: ['PC', 'PlayStation 5', 'Mac'],
		publisherId: '9',
	},
	{
		title: 'Starfield',
		platform: ['PC', 'Xbox Series X'],
		publisherId: '10',
	},
	{
		title: 'Horizon Forbidden West',
		platform: ['PlayStation 4', 'PlayStation 5'],
		publisherId: '11',
	},
	{
		title: 'Sea of Stars',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X'],
		publisherId: '12',
	},
	{
		title: 'Disco Elysium',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
		publisherId: '13',
	},
	{
		title: 'Return of the Obra Dinn',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
		publisherId: '14',
	},
	{
		title: 'Outer Wilds',
		platform: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
		publisherId: '15',
	},
	{
		title: 'Celestial Chronicles',
		platform: ['PC', 'PlayStation 5'],
	},
	{
		title: 'Neon Drift: Tokyo Night',
		platform: ['PC', 'Xbox Series X'],
	},
	{
		title: 'Chrono Sentinels',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Verdant Skies',
		platform: ['PC', 'Nintendo Switch'],
	},
	{
		title: 'Ironbound Odyssey',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Mythic Realms',
		platform: ['PC', 'PlayStation 5', 'Nintendo Switch'],
	},
	{
		title: 'Echoes of Aether',
		platform: ['PC', 'PlayStation 5', 'Mac'],
	},
	{
		title: 'Quantum Paradox',
		platform: ['PC', 'Xbox Series X'],
	},
	{
		title: 'Crystal Tides',
		platform: ['PC', 'Nintendo Switch'],
	},
	{
		title: 'Vanguard Protocol',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Luminous Horizon',
		platform: ['PC', 'PlayStation 5', 'Nintendo Switch'],
	},
	{
		title: 'Shattered Moon',
		platform: ['PC', 'Xbox Series X'],
	},
	{
		title: 'Aurora Rising',
		platform: ['PC', 'PlayStation 5'],
	},
	{
		title: 'Fableforge',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 5'],
	},
	{
		title: 'Solaris Drift',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Phantom Cipher',
		platform: ['PC', 'PlayStation 5'],
	},
	{
		title: 'Tempest Frontier',
		platform: ['PC', 'Xbox Series X', 'Nintendo Switch'],
	},
	{
		title: 'Cascade Echo',
		platform: ['PC', 'PlayStation 5', 'Mac'],
	},
	{
		title: 'Riftbound Saga',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Nova Genesis',
		platform: ['PC', 'PlayStation 5'],
	},
	{
		title: 'Nightfall Protocol',
		platform: ['PC', 'Xbox Series X'],
	},
	{
		title: 'Arcane Compass',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 5'],
	},
	{
		title: 'Elysian Drift',
		platform: ['PC', 'PlayStation 5', 'Mac'],
	},
	{
		title: 'Starlit Dominion',
		platform: ['PC', 'Xbox Series X'],
	},
	{
		title: 'Chronicle of Ember',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 5'],
	},
	{
		title: 'Abyss Walkers',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Silverline Odyssey',
		platform: ['PC', 'PlayStation 5'],
	},
	{
		title: 'Epoch Resonance',
		platform: ['PC', 'Xbox Series X', 'Nintendo Switch'],
	},
	{
		title: 'Ironclad Legends',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Mystic Aurora',
		platform: ['PC', 'Nintendo Switch'],
	},
	{
		title: 'Catalyst of Worlds',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
	{
		title: 'Radiant Vanguard',
		platform: ['PC', 'PlayStation 5'],
	},
	{
		title: 'Echoforge Legacy',
		platform: ['PC', 'Xbox Series X'],
	},
	{
		title: 'Zenith Eclipse',
		platform: ['PC', 'Nintendo Switch', 'PlayStation 5'],
	},
	{
		title: 'Moonlit Sovereign',
		platform: ['PC', 'PlayStation 5', 'Mac'],
	},
	{
		title: 'Galactic Lattice',
		platform: ['PC', 'PlayStation 5', 'Xbox Series X'],
	},
];

const games = Array.from({ length: 50 }, (_, index) => {
	const template = baseGames[index] ?? {};

	return {
		id: (index + 1).toString(),
		title: template.title ?? `Game ${index + 1}`,
		platform: template.platform ?? platformVariants[index % platformVariants.length],
		publisherId:
			template.publisherId ??
			(((index % publishers.length) + 1).toString()),
	};
});

const baseAuthors = [
	{ name: 'Jane Doe', verified: true },
	{ name: 'John Smith', verified: false },
	{ name: 'Emily Carter', verified: true },
	{ name: 'Michael Brown', verified: false },
	{ name: 'Sophia Turner', verified: true },
	{ name: 'Liam Johnson', verified: false },
	{ name: 'Olivia White', verified: true },
	{ name: 'Noah Green', verified: false },
	{ name: 'Ava Martinez', verified: true },
	{ name: 'Ethan Lewis', verified: true },
	{ name: 'Harper Collins', verified: false },
	{ name: 'Mason Rivera', verified: true },
	{ name: 'Isabella Brooks', verified: false },
	{ name: 'Lucas Kim', verified: true },
	{ name: 'Amelia Patel', verified: true },
	{ name: 'Sebastian Flores', verified: false },
];

const authors = Array.from({ length: 50 }, (_, index) => {
	const template = baseAuthors[index];

	return {
		id: (index + 1).toString(),
		name: template?.name ?? `Author ${index + 1}`,
		verified: template?.verified ?? index % 2 === 0,
	};
});

const baseReviewSnippets = [
	'An incredible open-world experience with unmatched attention to detail.',
	'A masterpiece — rich storytelling and challenging combat.',
	'Beautiful art direction and fluid gameplay, but a bit repetitive at times.',
	'Solid mechanics, though the pacing could be better.',
	'Good foundation but too many bugs at launch.',
	'Relaxing and wholesome; perfect for winding down.',
	'An epic story with phenomenal voice acting.',
	'Creative gameplay with tons of replay value.',
	'Visually stunning with a deeply emotional narrative.',
	'Entertaining but lacks long-term depth.',
	'Ambitious sci-fi with impressive scope and exploration.',
	'Stunning visuals and a strong continuation of the saga.',
	'A love letter to classic RPGs with gorgeous pixel art.',
	'Narrative masterpiece with unforgettable characters.',
	'Unique mystery that rewards careful observation.',
	'Mind-bending exploration with a satisfying time-loop payoff.',
];

const reviewAdditions = [
	'Follow-up impressions show the adventure still feels fresh.',
	'After more hours, the combat depth really shines.',
	'Replay reminded me how atmospheric the world can be.',
	'Multiplayer sessions added surprising longevity.',
	'Post-patch experience is dramatically smoother.',
	'The cozy charm keeps pulling me back in nightly.',
	'New game plus highlights just how epic the story is.',
	'Creative blocks sparked by its sandbox tools.',
	'Photo mode reveals details I missed the first time.',
	'Multiplayer heists offer chaotic fun in short bursts.',
	'Exploration keeps uncovering hidden narrative threads.',
	'Side quests pack emotional punches on repeat playthroughs.',
	'Retro inspirations continue to delight.',
	'Second ending proved even more powerful than the first.',
	'Puzzle variety keeps the experience sharp.',
	'Time-loop secrets reward patience and curiosity.',
	'Weekly challenges breathe new life into the campaign.',
	'Lore hunting runs prove endlessly satisfying.',
	'Combat builds feel distinct on every replay.',
	'Co-op chaos creates unforgettable moments.',
	'Story DLC cements it as a modern classic.',
	'Seasonal updates keep the farm life engaging.',
	'Endgame trials showcase superb boss design.',
	'Procedural worlds still surprise after dozens of hours.',
	'Character arcs endure as some of the finest in gaming.',
	'Heist planning remains tense and rewarding.',
	'Base building scratches that sci-fi survival itch.',
	'Skill trees encourage wildly different play styles.',
	'Old-school charm mixes well with modern polish.',
	'Investigation twists kept me glued until the finale.',
	'Minimalist art direction still feels striking.',
	'Quantum puzzles reward every careful observation.',
	'Seasonal events keep the community engaged.',
	'Boss encounters demand mastery of every mechanic.',
	'Companion stories deepen the overarching plot.',
	'Dynamic weather adds a new layer of immersion.',
	'Crafting systems feel intuitive and rewarding.',
	'Soundtrack continues to be a standout highlight.',
	'Exploration rewards curiosity at every turn.',
	'Endings vary dramatically based on key decisions.',
	'Combat animations remain fluid and satisfying.',
	'Photo mode additions inspire creative captures.',
	'Mod support extends the game’s longevity.',
	'World events make the universe feel alive.',
	'Performance patches have smoothed frame drops.',
	'Community challenges keep me coming back weekly.',
	'Season pass content feels worth the investment.',
	'PvP balance has improved dramatically.',
	'Daily quests offer quick, meaningful progression.',
	'Collaborative raids are chaotic in the best way.',
];

const reviewSnippets = [...baseReviewSnippets, ...reviewAdditions];

const reviews = Array.from({ length: 50 }, (_, index) => ({
	id: (index + 1).toString(),
	rating: ((index % 5) + 6),
	content: reviewSnippets[index % reviewSnippets.length],
	authorId: ((index % authors.length) + 1).toString(),
	gameId: (((index * 3) % games.length) + 1).toString(),
}));

// Ensure ratings for base snippets
reviews.forEach((review, index) => {
	if (index < baseReviewSnippets.length) {
		const predefinedRatings = [
			9, 10, 8, 7, 6, 9, 10, 8, 9, 7, 8, 9, 9, 10, 8, 10,
		];
		review.rating = predefinedRatings[index];
	}
});

export default { games, reviews, authors, publishers };
