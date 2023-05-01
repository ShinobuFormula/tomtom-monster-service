import {
	postAffinity,
	getAllAffinities,
	getEffectiveness,
} from "../model/affinity.js";
import { postMonsterInfo, getAllMonsterInfos } from "../model/monsterInfo.js";
import { getAllTypes } from "../model/type.js";

const checkStats = (stats) => {};

const addMonsterInfo = (body) => {
	return postMonsterInfo(body);
};

const addAffinity = (body) => {
	return postAffinity(body);
};

const queryAllMonsterInfos = async () => {
	return await getAllMonsterInfos();
};

const queryAllAffinities = async () => {
	return await getAllAffinities();
};

const queryEffectiveness = async (attackType, defenseType) => {
	return await getEffectiveness(attackType, defenseType);
};

const queryAllTypes = async () => {
	return await getAllTypes();
};

export {
	checkStats,
	addMonsterInfo,
	addAffinity,
	queryAllAffinities,
	queryAllTypes,
	queryEffectiveness,
	queryAllMonsterInfos,
};
