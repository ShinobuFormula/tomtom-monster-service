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
		type: String,
		target: String,
	},
	events: [
		{
			targetType: { type: String, required: true },
			target: { type: String, required: true },
			effects: [
				{
					type: { type: String, required: true },
					power: Number,
				},
			],
		},
	],
});

const passiveModel = mongoose.model<PassiveInterface>("Passive", passiveSchema);

const getAllPassives = async () => {
	const passives = await passiveModel.find();
	return passives;
};

export { getAllPassives };
