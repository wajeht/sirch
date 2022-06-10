import { PORT } from "../utils/constants.js";
import apiRoutes from "./api/api.js";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import cors from "cors";

import express from "express";
const app = express();

app.use(
  helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false })
);
app.use(cors({ origin: "*" }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.resolve(path.join(process.cwd(), "src", "public")))
);

app.use("/api", apiRoutes);

// svelte handler
app.use("*", (req, res, next) => {
  try {
    res.sendFile(
      path.resolve(path.join(process.cwd(), "src", "public", "index.html"))
    );
  } catch (err) {
    next(err);
  }
});

// error handler
app.use((err, req, res, next) => {
  return res.redirect("/not-found");
});

app.listen(PORT, () =>
  console.log(`App is running at http://localhost:${PORT}`)
);

// http://localhost:4000/proxy/http://duckduckgo.com/search/?q=test
