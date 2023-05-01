enum monsterType {
	FIRE = "fire",
	PLANT = "plant",
	WATER = "water",
	NEUTRAL = "neutral",
	MARTIAL = "martial",
	MENTAL = "mental",
	POISON = "poison",
	AERIAL = "aerial",
	VOLT = "volt",
	ROCK = "rock",
	GHOST = "ghost",
	SPATIAL = "spatial",
}

interface MonsterInfoInterface {
	name: string;
	type: [`${monsterType}`];
	stats: {
		hp: number;
		attack: number;
		def: number;
		speed: number;
		stamina: number;
		balance: number;
	};
	image: string;
	passive: [string];
	trait: string;
	skills: [string];
}

interface MonsterInterface {
	name: string;
	type: [`${monsterType}`];
	stats: {
		hp: number;
		attack: number;
		def: number;
		speed: number;
		stamina: number;
		balance: number;
	};
	image: string;
	passive: {};
	trait: string;
	skills: [{}];
}

export { MonsterInfoInterface, MonsterInterface, monsterType };
