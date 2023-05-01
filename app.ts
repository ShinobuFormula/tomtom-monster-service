import express from "express";
const app = express();
//middlewares
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

//database
import { connectToDB } from "./db.js";

//routes
import monsterInfoRouter from "./router/monsterInfo.js";
import captureRouter from "./router/capture.js";

connectToDB();

app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
	origin: "*",
	credentials: true,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/monsterinfo", monsterInfoRouter());
app.use("/capture", captureRouter());

app.get("/", function (req, res) {
	res.send("MonsterInfo micro services");
});

app.listen(3001, () => {
	console.log("Monster service is running");
});
