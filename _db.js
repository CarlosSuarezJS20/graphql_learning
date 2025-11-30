const platformVariants = [
	'PC',
	'NINTENDO',
	'PLAYSTATION',
	'XBOX',
	'PC',
	'XBOX',
	'PLAYSTATION',
	'NINTENDO',
	'XBOX',
	'MAC',
	'PC',
	'PLAYSTATION',
	'XBOX',
	'NINTENDO',
	'PC',
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
		platform: 'NINTENDO',
		publisherId: '1',
	},
	{
		title: 'Elden Ring',
		platform: 'PLAYSTATION',
		publisherId: '2',
	},
	{
		title: 'God of War: Ragnarök',
		platform: 'PLAYSTATION',
		publisherId: '3',
	},
	{
		title: 'Hades',
		platform: 'PC',
		publisherId: '4',
	},
	{
		title: 'Cyberpunk 2077',
		platform: 'PC',
		publisherId: '5',
	},
	{
		title: 'Stardew Valley',
		platform: 'PC',
		publisherId: '6',
	},
	{
		title: 'The Witcher 3: Wild Hunt',
		platform: 'PC',
		publisherId: '5',
	},
	{
		title: 'Minecraft',
		platform: 'PC',
		publisherId: '8',
	},
	{
		title: 'Red Dead Redemption 2',
		platform: 'PC',
		publisherId: '7',
	},
	{
		title: 'Baldur\'s Gate 3',
		platform: 'PC',
		publisherId: '9',
	},
	{
		title: 'Starfield',
		platform: 'XBOX',
		publisherId: '10',
	},
	{
		title: 'Horizon Forbidden West',
		platform: 'PLAYSTATION',
		publisherId: '11',
	},
	{
		title: 'Sea of Stars',
		platform: 'PC',
		publisherId: '12',
	},
	{
		title: 'Disco Elysium',
		platform: 'PC',
		publisherId: '13',
	},
	{
		title: 'Return of the Obra Dinn',
		platform: 'PC',
		publisherId: '14',
	},
	{
		title: 'Outer Wilds',
		platform: 'PC',
		publisherId: '15',
	},
	{
		title: 'Celestial Chronicles',
		platform: 'PC',
	},
	{
		title: 'Neon Drift: Tokyo Night',
		platform: 'XBOX',
	},
	{
		title: 'Chrono Sentinels',
		platform: 'PC',
	},
	{
		title: 'Verdant Skies',
		platform: 'NINTENDO',
	},
	{
		title: 'Ironbound Odyssey',
		platform: 'PC',
	},
	{
		title: 'Mythic Realms',
		platform: 'PC',
	},
	{
		title: 'Echoes of Aether',
		platform: 'MAC',
	},
	{
		title: 'Quantum Paradox',
		platform: 'XBOX',
	},
	{
		title: 'Crystal Tides',
		platform: 'NINTENDO',
	},
	{
		title: 'Vanguard Protocol',
		platform: 'PC',
	},
	{
		title: 'Luminous Horizon',
		platform: 'PC',
	},
	{
		title: 'Shattered Moon',
		platform: 'XBOX',
	},
	{
		title: 'Aurora Rising',
		platform: 'PLAYSTATION',
	},
	{
		title: 'Fableforge',
		platform: 'NINTENDO',
	},
	{
		title: 'Solaris Drift',
		platform: 'PC',
	},
	{
		title: 'Phantom Cipher',
		platform: 'PLAYSTATION',
	},
	{
		title: 'Tempest Frontier',
		platform: 'PC',
	},
	{
		title: 'Cascade Echo',
		platform: 'MAC',
	},
	{
		title: 'Riftbound Saga',
		platform: 'PC',
	},
	{
		title: 'Nova Genesis',
		platform: 'PLAYSTATION',
	},
	{
		title: 'Nightfall Protocol',
		platform: 'XBOX',
	},
	{
		title: 'Arcane Compass',
		platform: 'NINTENDO',
	},
	{
		title: 'Elysian Drift',
		platform: 'MAC',
	},
	{
		title: 'Starlit Dominion',
		platform: 'XBOX',
	},
	{
		title: 'Chronicle of Ember',
		platform: 'NINTENDO',
	},
	{
		title: 'Abyss Walkers',
		platform: 'PC',
	},
	{
		title: 'Silverline Odyssey',
		platform: 'PLAYSTATION',
	},
	{
		title: 'Epoch Resonance',
		platform: 'PC',
	},
	{
		title: 'Ironclad Legends',
		platform: 'PC',
	},
	{
		title: 'Mystic Aurora',
		platform: 'NINTENDO',
	},
	{
		title: 'Catalyst of Worlds',
		platform: 'PC',
	},
	{
		title: 'Radiant Vanguard',
		platform: 'PLAYSTATION',
	},
	{
		title: 'Echoforge Legacy',
		platform: 'XBOX',
	},
	{
		title: 'Zenith Eclipse',
		platform: 'NINTENDO',
	},
	{
		title: 'Moonlit Sovereign',
		platform: 'MAC',
	},
	{
		title: 'Galactic Lattice',
		platform: 'PC',
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

// Generate more reviews with better distribution across games
const reviews = Array.from({ length: 200 }, (_, index) => {
	// Distribute reviews across games more evenly
	// Each game gets multiple reviews with varied ratings
	const gameId = ((index % games.length) + 1).toString();
	
	// Create varied ratings (1-10) for more realistic averages
	// Use a pattern that gives different games different rating distributions
	const ratingPattern = (index % 10);
	let rating;
	if (ratingPattern < 2) {
		rating = 9 + (index % 2); // 9-10 (high ratings)
	} else if (ratingPattern < 5) {
		rating = 7 + (index % 2); // 7-8 (good ratings)
	} else if (ratingPattern < 7) {
		rating = 5 + (index % 2); // 5-6 (average ratings)
	} else if (ratingPattern < 9) {
		rating = 3 + (index % 2); // 3-4 (low ratings)
	} else {
		rating = 1 + (index % 2); // 1-2 (very low ratings)
	}
	
	return {
		id: (index + 1).toString(),
		rating,
		content: reviewSnippets[index % reviewSnippets.length],
		authorId: ((index % authors.length) + 1).toString(),
		gameId,
	};
});

// Ensure some popular games have more reviews with varied ratings
// Add extra reviews for first 10 games to ensure they have good averages
const popularGames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
popularGames.forEach((gameNum, gameIndex) => {
	// Add 5-10 additional reviews per popular game
	const extraReviews = 5 + (gameIndex % 6);
	for (let i = 0; i < extraReviews; i++) {
		const reviewIndex = reviews.length;
		const rating = 6 + (i % 5); // Ratings between 6-10
		reviews.push({
			id: (reviewIndex + 1).toString(),
			rating,
			content: reviewSnippets[(reviewIndex + i) % reviewSnippets.length],
			authorId: ((reviewIndex + i) % authors.length + 1).toString(),
			gameId: gameNum.toString(),
		});
	}
});

export default { games, reviews, authors, publishers };
