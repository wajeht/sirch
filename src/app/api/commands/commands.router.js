import * as CommandsController from "./commands.controller.js";

import express from "express";
const commands = express.Router();

commands.get("/", CommandsController.getCommands);

export default commands;
