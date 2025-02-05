import { effectType, targetType } from "./action";
import { monsterType } from "./monster";
import { PassiveEffect } from "./skill";

enum triggerWhenEnum {
	BEFORE = "before",
	PREVENT = "prevent",
	AFTER = "after",
}

type triggerWhenType = `${triggerWhenEnum}`;

interface PassiveInterface {
	name: string;
	description: string;
	trigger: {
		when: triggerWhenType
		from: string;
		actionType?: effectType
		to?: string;
		type?: monsterType;
		targetType?: targetType
	};
	effects: PassiveEffect[];
}

export { PassiveInterface };
