import express, { Request, Response } from "express";

import {
	getAllSkills,
	getSkillByName,
	postSkill,
	updateSkill,
} from "../model/skill.js";
import { getAllBaseMonsters, getBaseMonsterByName, postBaseMonster } from "../model/monsterInfo.js";

const baseMonsterRouter = () => {
	const router = express.Router();

	router.get("/", async (req: Request, res: Response) => {
		try {
			res.json(await getAllBaseMonsters())
		} catch (error) {
			res.status(404).send("Ressource not found or unreachable");
		}
	});

	router.get("/", async (req: Request, res: Response) => {
		try {
			res.json(await postBaseMonster(req.body))
		} catch (error) {
			res.status(400).send("Empty body or wrong data");
		}
	});

	router.get("/:name", async(req: Request, res: Response) => {
		try {
			res.json(getBaseMonsterByName(req.params.name))
		} catch (error) {
			res.status(404).send("Ressource not found or unreachable");
		}
	})

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
