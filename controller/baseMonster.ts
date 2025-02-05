import {
	BaseMonster,
} from "../model/interfaces/monster.js";
import { postBaseMonster, getAllBaseMonsters } from "../model/monsterInfo.js";



const addBaseMonster = (body: BaseMonster) => {
	return postBaseMonster(body);
};

const queryAllBaseMonsters = async () => {
	return await getAllBaseMonsters();
};

//AFFINITY

export {
	addBaseMonster,
	queryAllBaseMonsters,
};
