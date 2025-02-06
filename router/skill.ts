import express, { Request, Response } from "express";
import { getAllSkills, getSkillByName, postSkill, updateSkill } from "../model/skill.js";
import { loadSkills } from "../controller/preload.js";


const skillRouter = () => {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        try {
            res.json(await getAllSkills());
        } catch (error) {
            res.status(404).send("Ressource not found or unreachable");
        }
    });

    router.get("/:name", async (req: Request, res: Response) => {
        try {
            const skill = await getSkillByName(req.params.name);
            if (skill === null) throw new Error();
            else res.json(skill)
        } catch (error) {
            res.status(404).send("Ressource not found or unreachable");
        }
    });

    router.post("/", async (req: Request, res: Response) => {
        try {
            res.json(await postSkill(req.body));
            loadSkills();
        } catch (error) {
            res.status(404).send("Empty body or wrong data");
        }
    });

    router.put("/:id", async (req: Request, res: Response) => {
        try {
            res.json(await updateSkill(req.params.id, req.body));
            loadSkills();
        } catch (error) {
            res.status(404).send("Empty body or wrong data");
        }
    });

    return router;
};

export default skillRouter;