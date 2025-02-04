import {
	postAffinity,
	getAllAffinities,
	getEffectiveness,
} from "../model/affinity.js";
import {
	BaseMonster,
	monsterType,
} from "../model/interfaces/monster.js";
import { TraitInterface } from "../model/interfaces/trait.js";
import { postMonsterInfo, getAllMonsterInfos } from "../model/monsterInfo.js";
import {
	getAllTraits,
	getTraitByName,
	postTrait,
	updateTrait,
} from "../model/trait.js";

const checkStats = (stats) => { };

const addMonsterInfo = (body: BaseMonster) => {
	return postMonsterInfo(body);
};

const queryAllMonsterInfos = async () => {
	return await getAllMonsterInfos();
};

//AFFINITY

const addAffinity = (body) => {
	return postAffinity(body);
};

const queryAllAffinities = async () => {
	return await getAllAffinities();
};

const queryEffectiveness = async (
	attackType: `${monsterType}`,
	defenseType: `${monsterType}`
) => {
	const attackTypeAffinities = await getEffectiveness(attackType);
	if (attackTypeAffinities?.affinities[defenseType])
		return attackTypeAffinities.affinities["defenseType"];
	return false;
};

export {
	checkStats,
	addMonsterInfo,
	addAffinity,
	queryAllAffinities,
	queryEffectiveness,
	queryAllMonsterInfos,
};
