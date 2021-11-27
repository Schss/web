interface User {
	id: number;
	username: string;
	games: GameSecondsPlayed[];
}

interface Game {
	id: number;
	title: string;
	description: string;
	images: string[];
	ageRating: string;
}

interface GameSecondsPlayed {
	game: Game;
	gameSecondsPlayed: number;
}

interface DB {
	users: User[];
	games: Game[];
}

