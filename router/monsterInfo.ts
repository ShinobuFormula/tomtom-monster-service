import express from "express";
import {
	addMonsterInfo,
	addAffinity,
	queryAllMonsterInfos,
	queryAllAffinities,
	queryEffectiveness,
} from "../controller/monsterInfo.js";

import { getAllPassives, postPassive } from "../model/passive.js";
import {
	getAllTraits,
	getTraitByName,
	postTrait,
	updateTrait,
} from "../model/trait.js";
import {
	getAllSkills,
	getSkillByName,
	postSkill,
	updateSkill,
} from "../model/skill.js";

const monsterInfoRouter = () => {
	const router = express.Router();

	router.get("/", async (req, res) => {
		const monsterInfo = await queryAllMonsterInfos();
		if (monsterInfo) res.json(monsterInfo);
		else res.status(400).send("Can't retrieve monster infos");
	});

	router.post("/", async (req, res) => {
		res.json(await addMonsterInfo(req.body));
	});

	//AFFINITY

	router.get("/affinity", async (req, res) => {
		res.json(await queryAllAffinities());
	});

	router.post("/affinity", async (req, res) => {
		res.json(await addAffinity(req.body));
	});

	router.get("/affinity/:attackType/:defenseType", async (req, res) => {
		res.json(
			await queryEffectiveness(req.params.attackType, req.params.defenseType)
		);
	});

	//PASSIVE

	router.get("/passive", async (req, res) => {
		res.json(await getAllPassives());
	});

	router.post("/passive", async (req, res) => {
		res.json(await postPassive(req.body));
	});

	//TRAIT

	router.get("/trait", async (req, res) => {
		res.json(await getAllTraits());
	});

	router.get("/trait/:name", async (req, res) => {
		res.json(await getTraitByName(req.params.name));
	});

	router.post("/trait", async (req, res) => {
		res.json(await postTrait(req.body));
	});

	router.put("/trait/:id", async (req, res) => {
		const updatedTrait = await updateTrait(req.params.id, req.body);
		if (updatedTrait) res.json(updatedTrait);
	});

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

export default monsterInfoRouter;
