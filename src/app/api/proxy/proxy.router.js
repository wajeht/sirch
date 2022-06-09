import * as ProxyController from "./proxy.controller.js";

import express from "express";
const proxy = express.Router();

proxy.get("/", ProxyController.getProxy);
proxy.get("/*", ProxyController.getPipe);

export default proxy;
