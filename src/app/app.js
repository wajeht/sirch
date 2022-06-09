import { PORT } from "../config/constants.js";
import apiRoutes from "./api/api.js";
import * as AppController from "./app.controller.js";
import helmet from "helmet";
import compression from "compression";

import path from "path";
import express from "express";
const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(process.cwd(), "src", "public")))); // prettier-ignore

app.use("/api", apiRoutes);
app.use("/", AppController.getHomePage);
app.use("*", (req, res) => res.json({ url: req.originalUrl }));

// prettier-ignore
app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));

// http://localhost:4000/proxy/http://duckduckgo.com/search/?q=test
