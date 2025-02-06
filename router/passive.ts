import express, { Request, Response } from "express";
import { getAllPassives, getPassiveByName, postPassive, updatePassive } from "../model/passive.js";
import { loadPassives } from "../controller/preload.js";


const passiveRouter = () => {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        try {
            res.json(await getAllPassives());
        } catch (error) {
            res.status(404).send("Ressource not found or unreachable");
        }
    });

    router.get("/:name", async (req: Request, res: Response) => {
        try {
            const passive = await getPassiveByName(req.params.name);
            if (passive === null) throw new Error();
            else res.json(passive)
        } catch (error) {
            res.status(404).send("Ressource not found or unreachable");
        }
    });

    router.post("/", async (req: Request, res: Response) => {
        try {
            res.json(await postPassive(req.body));
            loadPassives();
        } catch (error) {
            res.status(400).send("Wrong data or empty body");
        }
    });

    router.put("/:id", async (req: Request, res: Response) => {
        try {
            res.json(await updatePassive(req.params.id, req.body));
            loadPassives();
        } catch (error) {
            res.status(404).send("Empty body or wrong data");
        }
    });

    return router;
};

export default passiveRouter;