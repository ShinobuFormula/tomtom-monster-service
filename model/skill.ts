import mongoose from "mongoose";
import { Skill, Effect } from "./interfaces/skill";

const skillSchema = new mongoose.Schema<Skill>({
	name: { type: String, required: true },
	description: String,
	type: { type: String, required: true },
	cost: {
		type: { type: String, required: true },
		value: { type: Number, required: true },
	},
	effects: [{
		targetType: { type: String, required: true },
		type: { type: String, required: true },
		power: { type: Number, required: true },
		status: { type: String, required: false },
		percentage: { type: Number, required: false },
		_id: false
	}],
	targetType: { type: String, required: true },
	priority: { type: Number, required: true },
});

const skillModel = mongoose.model<Skill>("Skill", skillSchema);

const getAllSkills = async () => {
	const skills = await skillModel.find();
	return skills;
};

const getSkillByName = async (skillName: string) => {
	const skill = await skillModel.findOne({
		name: skillName,
	});
	return skill;
};

const postSkill = (sentSkill: Skill) => {
	const skill = new skillModel(sentSkill);
	return skill.save();
};

const updateSkill = async (id: string, body) => {
	const skill = await skillModel.findOneAndUpdate({ _id: id }, body, {
		new: true,
	});
	return skill.save();
};

export { getAllSkills, getSkillByName, postSkill, updateSkill };
