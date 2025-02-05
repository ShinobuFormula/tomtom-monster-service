import express from "express";

import {
	getAllSkills,
	getSkillByName,
	postSkill,
	updateSkill,
} from "../model/skill.js";

const baseMonsterRouter = () => {
	const router = express.Router();
	//SKILL

	router.get("/skill", async (req, res) => {
		res.json(await getAllSkills());
	});

	router.get("/skill/:name", async (req, res) => {
		res.json(await getSkillByName(req.params.name));
	});

	router.post("/skill", async (req, res) => {
		res.json(await postSkill(req.body));
	});

	router.put("/skill/:id", async (req, res) => {
		const updatedTrait = await updateSkill(req.params.id, req.body);
		if (updatedTrait) res.json(updatedTrait);
	});

	return router;
};

export default baseMonsterRouter;
