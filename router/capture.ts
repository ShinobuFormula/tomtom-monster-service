import express from "express";
import { launchCapture } from "../controller/capture.js";

const captureRouter = () => {
	const router = express.Router();

	router.post("/launch/:zone", (req, res) => {
		res.json(launchCapture(req.params.zone));
	});

	router.post("/", (req, res) => {
		res.send("capture monster");
		// res.json(captureMonster(req.body));
	});

	return router;
};

export default captureRouter;
