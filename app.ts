import express from "express";
const app = express();
//middlewares
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

//database
import { connectToDB } from "./db.js";

//routes
import baseMonsterRouter from "./router/baseMonster.js";
import passiveRouter from "./router/passive.js";

connectToDB();

app.use(bodyParser.json());
app.use(cookieParser());

var corsOptions = {
	origin: true,
	credentials: true,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/monster", baseMonsterRouter());
app.use("/passive", passiveRouter())
// app.use("/capture", captureRouter());

app.get("/", function (req, res) {
	res.send("MonsterInfo micro services");
});

app.listen(3001, () => {
	console.log("Monster service is running");
});
