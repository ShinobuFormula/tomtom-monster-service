import mongoose from "mongoose";
import { TraitInterface } from "./interfaces/trait";

const traitSchema = new mongoose.Schema<TraitInterface>({
	name: { type: String, required: true },
	matrix: {
		colerique: Number,
		sanguin: Number,
		flegmatique: Number,
		melancolique: Number,
	},
	rawMatrix: { type: [Number], required: true },
});

const traitModel = mongoose.model<TraitInterface>("Trait", traitSchema);

const getAllTraits = async () => {
	const traits = await traitModel.find();
	return traits;
};

const getTraitByName = async (traitName: string) => {
	const trait = await traitModel.findOne({
		name: traitName,
	});
	return trait;
};

const postTrait = (sentTrait: TraitInterface) => {
	const trait = new traitModel(sentTrait);
	return trait.save();
};

const updateTrait = async (id: string, body) => {
	const trait = await traitModel.findOneAndUpdate({ _id: id }, body, {
		new: true,
	});
	return trait.save();
};

export { getAllTraits, getTraitByName, postTrait, updateTrait };
