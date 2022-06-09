import express from "express";
const api = express.Router();

import CommandsRouter from "./commands/commands.router.js";
import AuthController from "./auth/auth.router.js";
import ProxyRouter from "./proxy/proxy.router.js";

api.use("/auth", AuthController);
api.use("/commands", CommandsRouter);
api.use("/proxy", ProxyRouter);

export default api;
