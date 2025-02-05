import mongoose from "mongoose";

import { PassiveInterface } from "./interfaces/passive";

const passiveSchema = new mongoose.Schema<PassiveInterface>({
	name: { type: String, required: true },
	description: String,
	trigger: {
		when: { type: String, required: true },
		actionType: { type: String, required: true },
		from: String,
		to: String,
		type: { type: String },
		targetType: String,
	},
	effects: [
		{
			targetType: { type: String, required: true },
			type: { type: String, required: true },
			side: { type: String, required: true },
			power: { type: Number, required: false },
			status: { type: String, required: false },
			percentage: { type: String, required: false },
		}
	],
});

const passiveModel = mongoose.model<PassiveInterface>("Passive", passiveSchema);

const getAllPassives = async () => {
	const passives = await passiveModel.find();
	return passives;
};

const postPassive = (sentPassive: PassiveInterface) => {
	const passive = new passiveModel(sentPassive);
	return passive.save();
};

const updatePassive = async (id, body) => {
	const passive = await passiveModel.findOneAndUpdate({ _id: id }, body, {
		new: true,
	});
	passive.save();
};

export { getAllPassives, postPassive, updatePassive };
