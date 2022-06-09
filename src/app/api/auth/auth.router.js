import * as AuthController from "./auth.controller.js";

import express from "express";
const auth = express.Router();

auth.route("/").post(AuthController.postLogin);

export default auth;
