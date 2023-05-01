import { effectTypeEnum, targetTypeEnum } from "./fight";

enum targetEnum {
	TO = "to",
	FROM = "from",
}

enum triggerWhenEnum {
	BEFORE = "before",
	PREVENT = "prevent",
	AFTER = "after",
}

interface PassiveInterface {
	name: string;
	description: string;
	trigger: {
		when: `${triggerWhenEnum}`;
		actionType: `${effectTypeEnum}`;
		from: string;
		to: string;
		type: string;
		target: string;
	};
	events: [
		{
			targetType: `${targetTypeEnum}`;
			target: `${targetEnum}`;
			effects: [
				{
					type: `${effectTypeEnum}`;
					power: number;
				}
			];
		}
	];
}

export { PassiveInterface };
