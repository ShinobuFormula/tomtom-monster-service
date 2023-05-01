import mongoose from "mongoose";

const affinitySchema = new mongoose.Schema({
	name: String,
	affinities: {},
});

const affinityModel = mongoose.model("affinities", affinitySchema);

const getAllAffinities = async () => {
	const affinities = await affinityModel.find();
	return affinities;
};

const postAffinity = (body) => {
	const affinity = new affinityModel(body);
	return affinity.save();
};

const updateAffinity = async (id, body) => {
	const affinity = await affinityModel.findOneAndUpdate({ _id: id }, body, {
		new: true,
	});
	affinity.save();
};

const getEffectiveness = async (attackType) => {
	const affinity = await affinityModel.findOne({
		name: attackType,
	});

	return affinity;
};

export { getAllAffinities, postAffinity, updateAffinity, getEffectiveness };
