import express from "express";
import {
	addMonsterInfo,
	addAffinity,
	queryAllMonsterInfos,
	queryAllAffinities,
	queryAllTypes,
	queryEffectiveness,
} from "../controller/monsterInfo.js";

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

	router.get("/type", async (req, res) => {
		res.json(await queryAllTypes());
	});

	return router;
};

export default monsterInfoRouter;
