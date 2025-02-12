import express, { Request, Response } from "express";
import { addMonsterToStock, getAllStocks, getStockById, removeMonsterFromStock, updateStockMonster } from "../model/stock.js";
import { controlUpdate } from "../controller/team.js";

const stockRouter = () => {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        try {
            res.json(await getAllStocks())
        } catch (error) {
            console.log(error);

            res.status(404).send("Ressource not found or unreachable");
        }
    });

    router.get("/:id", async (req: Request, res: Response) => {
        try {
            const monster = await getStockById(req.params.id);
            if (monster === null) throw new Error();
            else res.json(monster)
        } catch (error) {
            res.status(404).send("Ressource not found or unreachable");
        }
    })

    router.post("/:id", async (req: Request, res: Response) => {
        try {
            res.json(await addMonsterToStock(req.params.id, req.body))
        } catch (error) {
            res.status(400).send("Empty body or wrong data");
        }
    });

    router.put("/:id", async (req: Request, res: Response) => {
        try {
            res.json(await updateStockMonster(req.params.id, req.body));
        } catch (error) {
            res.status(404).send("Empty body or wrong data");
        }
    });

    router.delete("/:id/:monsterid", async (req: Request, res: Response) => {
        try {
            const monster = await removeMonsterFromStock(req.params.id, req.params.monsterid);
            if (monster === null) throw new Error();
            else res.json(monster)
        } catch (error) {
            res.status(404).send("Ressource not found or unreachable");
        }
    })

    router.put("/team/:id", async (req: Request, res: Response) => {
        try {
            res.json(await controlUpdate(req.params.id, req.body.stockId, req.body.team));
        } catch (error) {
            console.log(error);

            res.status(404).send("Empty body or wrong data");
        }
    })

    return router;
};

export default stockRouter;