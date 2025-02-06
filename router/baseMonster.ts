import express, { Request, Response } from "express";
import { getAllBaseMonsters, getBaseMonsterByName, postBaseMonster, updateBaseMonster } from "../model/baseMonster.js";

const baseMonsterRouter = () => {
	const router = express.Router();

	router.get("/", async (req: Request, res: Response) => {
		try {
			res.json(await getAllBaseMonsters())
		} catch (error) {
			res.status(404).send("Ressource not found or unreachable");
		}
	});

	router.get("/:name", async (req: Request, res: Response) => {
		try {
			const monster = await getBaseMonsterByName(req.params.name);
			if (monster === null) throw new Error();
			else res.json(monster)
		} catch (error) {
			res.status(404).send("Ressource not found or unreachable");
		}
	})

	router.post("/", async (req: Request, res: Response) => {
		try {
			res.json(await postBaseMonster(req.body))
		} catch (error) {
			res.status(400).send("Empty body or wrong data");
		}
	});

	router.put("/:id", async (req: Request, res: Response) => {
		try {
			res.json(await updateBaseMonster(req.params.id, req.body));
		} catch (error) {
			res.status(404).send("Empty body or wrong data");
		}
	});


	return router;
};

export default baseMonsterRouter;
