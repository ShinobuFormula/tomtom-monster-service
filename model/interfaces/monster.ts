import { PassiveInterface } from "./passive";
import { SkillInterface } from "./skill";
import { statusInterface } from "./status";

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

interface Monster {
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


export {
	BaseMonster,
	Monster,
	monsterType,
	monsterTypeEnum,
	monsterStatsEnum
};
