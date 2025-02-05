import express, { Request, Response } from "express";
import { getAllPassives, postPassive } from "../model/passive.js";


const passiveRouter = () => {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        try {
			res.json(await getAllPassives());
		} catch (error) {
			res.status(404).send("Ressource not found or unreachable");
		}
    });

    router.post("/", async (req: Request, res: Response) => {
        try {
            res.json(await postPassive(req.body));
        } catch (error) {
            res.status(400).send("Wrong data or empty body");
        }
    });

    return router;
};

export default passiveRouter;