import { PassiveInterface } from "../model/interfaces/passive";
import { postPassive } from "../model/passive";

const addPassive = (sentPassive: PassiveInterface) => {
	return postPassive(sentPassive);
};

export { addPassive };
