import { Passive } from "./passive";
import { Skill } from "./skill";

enum monsterTypeEnum {
	AERIAL = "aerial",
	FIRE = "fire",
	GHOST = "ghost",
	MARTIAL = "martial",
	MENTAL = "mental",
	NEUTRAL = "neutral",
	PLANT = "plant",
	POISON = "poison",
	ROCK = "rock",
	SPATIAL = "spatial",
	VOLT = "volt",
	WATER = "water",
}

enum monsterStatsEnum {
	ATK = "attack",
	BALANCE = "balance",
	DEF = "def",
	HP = "hp",
	SPEED = "speed",
	STAMINA = "stamina",
}

type monsterType = `${monsterTypeEnum}`;

interface BaseMonster {
	name: string;
	type: monsterType[];
	baseStats: {
		hp: number;
		attack: number;
		def: number;
		speed: number;
		stamina: number;
		balance: number;
	};
	image: string;
	allPassives: string[];
	allSkills: string[];
	eggSkills: string[];
}

interface FightMonster {
	_id: string;
	name: string;
	type: monsterType[];
	stats: {
		hp: number;
		attack: number;
		def: number;
		speed: number;
		stamina: number;
		balance: number;
	};
	image: string;
	passive: Passive;
	skills: Skill[];
}

interface FlatFightMonster {
	_id: string;
	name: string;
	type: monsterType[];
	stats: {
		hp: number;
		attack: number;
		def: number;
		speed: number;
		stamina: number;
		balance: number;
	};
	image: string;
	passive: string;
	skills: string[];
}

interface Team {
	first: FightMonster,
	second: FightMonster,
	third: FightMonster,
	fourth: FightMonster
}

interface FlatTeam {
	first: FlatFightMonster,
	second: FlatFightMonster,
	third: FlatFightMonster,
	fourth: FlatFightMonster
}

interface Stock {
	pc: FightMonster[];
}

export {
	BaseMonster,
	FightMonster,
	FlatFightMonster,
	Stock,
	Team,
	FlatTeam,
	monsterType,
	monsterTypeEnum,
	monsterStatsEnum
};
