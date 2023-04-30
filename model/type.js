import mongoose from "mongoose";

const typeSchema = new mongoose.Schema({
	name: String,
});

const typeModel = mongoose.model("types", typeSchema);

const getAllTypes = async () => {
	const types = await typeModel.find();
	return types;
};

export { getAllTypes };
