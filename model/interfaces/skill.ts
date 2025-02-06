import { effectType, targetType } from "./action";
import { monsterType } from "./monster";
import { statusNameType } from "./status";

enum skillCostEnum {
	STAMINA = "stamina",
	HP = "hp",
	BALANCE = "balance",
}

enum sideEnum {
	TO = "to",
	FROM = "from",
}

type sideType = `${sideEnum}`;
type skillCostType = `${skillCostEnum}`

interface Skill {
	name: string;
	description: string;
	type: monsterType;
	cost: { type: skillCostType; value: number };
	effects: Effect[];
	targetType: targetType;
	priority: number;
}

interface Effect {
	targetType: targetType;
	type: effectType;
	power: number;
	status?: statusNameType;
	percentage?: number;
}

interface PassiveEffect {
	targetType: targetType;
	type: effectType;
	power: number;
	side: sideType;
	status?: statusNameType;
	percentage?: number;
}

export { Skill, Effect, PassiveEffect };
