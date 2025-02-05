import mongoose from "mongoose";
import { BaseMonster } from "./interfaces/monster";

const baseMonsterSchema = new mongoose.Schema<BaseMonster>({
	name: String,
	type: [String],
	baseStats: {
		hp: Number,
		attack: Number,
		def: Number,
		speed: Number,
		stamina: Number,
		balance: Number,
	},
	image: String,
	allPassives: [String],
	allSkills: [String],
	eggSkills: [String]
});

const baseMonsterModel = mongoose.model("BaseMonster", baseMonsterSchema);

const getAllBaseMonsters = async () => {
	const monsters = await baseMonsterModel.find();
	return monsters;
};

const postBaseMonster = (baseMonster) => {
	const monster = new baseMonsterModel(baseMonster);
	return monster.save();
};

const updateBaseMonster = async (id, body) => {
	const monster = await baseMonsterModel.findOneAndUpdate({ _id: id }, body, {
		new: true,
	});
	return monster.save();
};

export { getAllBaseMonsters, postBaseMonster, updateBaseMonster };
