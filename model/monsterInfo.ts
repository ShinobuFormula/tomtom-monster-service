import mongoose from "mongoose";

const monsterInfoSchema = new mongoose.Schema({
	name: String,
	type: [String],
	stats: {
		hp: Number,
		attack: Number,
		def: Number,
		speed: Number,
		stamina: Number,
		balance: Number,
	},
	image: String,
	passive: String,
	skills: [String],
});

const monsterInfoModel = mongoose.model("MonsterInfo", monsterInfoSchema);

const getAllMonsterInfos = async () => {
	const monsters = await monsterInfoModel.find();
	return monsters;
};

const postMonsterInfo = (monsterInfo) => {
	const monster = new monsterInfoModel(monsterInfo);
	return monster.save();
};

const updateMonsterInfo = async (id, body) => {
	const monster = await monsterInfoModel.findOneAndUpdate({ _id: id }, body, {
		new: true,
	});
	monster.save();
};

export { getAllMonsterInfos, postMonsterInfo, updateMonsterInfo };
