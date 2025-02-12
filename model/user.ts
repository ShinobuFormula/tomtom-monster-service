import mongoose from "mongoose";
import { Team } from "./interfaces/monster";

const userSchema = new mongoose.Schema({
	pseudo: {
		type: String,
		required: true,
	},
	firstname: {
		type: String,
		required: false,
	},
	lastname: {
		type: String,
		required: false,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	birthdate: {
		type: Date,
		required: false,
	},
	stock: {
		type: String,
		required: false,
	},
	team: [{
		type: Object,
		required: false,
		default: {},
	}],
});

const userModel = mongoose.model("user", userSchema);


const updateTeam = async (userId: string, tempUser) => {
	//Need some changes bc it aint updating team
	const user = await userModel.findOneAndUpdate({ _id: userId }, tempUser, { new: true })
	user.save();
	return user;
}

export {
	updateTeam
}