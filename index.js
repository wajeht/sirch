import path from "path";
import fs from "fs";
import express from "express";

import iframe from "./iframe.js";

const app = express();

const PORT = process.env.PORT || 5001;

// use a real database for production
const maps = {
  // direct commands
  "!gh": "https://github.com/wajeht",
  "!website": "https://jaw.cool/",
  "!prime": "https://prime.jawstrength.com",
  "!coaching": "https://jawstrength.com",
  // search commands
  "!p": "https://prime.jawstrength.com?q=",
  "!imdb": "http://imdb.com/search/title?",
  "!default": "http://api.duckduckgo.com/?q=n",
};

app.get("/search", (req, res) => {
  try {
    const dashboardTemplatePath = path.resolve(path.join(process.cwd()),"dashboard.html"); // prettier-ignore

    fs.access(dashboardTemplatePath, (error) => {
      if (error) throw new Error("dashboard.html does not exist!");
    });

    return res.sendFile(dashboardTemplatePath);
  } catch (error) {
    console.error(error);
  }
});

app.get("/redirect", (req, res) => {
  const { url } = req.query;
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("X-Frame-Options", "*");
  res.send(iframe(url));
});

app.get("/api/search/", (req, res) => {
  const query = Object.keys(req.query);

  // throw error if search does not contain q as query param
  // for example:	`api/search/?q=`
  if (query.length != 1 && !query.includes("q")) {
    return res.json({
      status: "error",
      message: "You must use the proper format!",
      example: {
        "direct-commands": "/api/search/?q=!myprofile",
        "search-commands": "/api/search/?q=!bang testing one to three",
      },
    });
  }

  let bang = "";
  let keywords = "";
  let url = "";

  // search without a bang command will direct to default search with following keywords
  // or search using !direct command will direct to direct command
  if (req.query.q.split(" ").length === 1) {
    // direct command
    url = maps[req.query.q];
    if (maps[req.query.q]) return res.redirect(url);

    // searched terms
    keywords = req.query.q;
  } else {
    // otherwise extract given bang command and keywords
    // for example: 	!bang testing one two three
    bang = req.query.q.split(" ")[0];
    keywords = req.query.q.split(" ").slice(1).join(" "); // prettier-ignore
  }

  // undefined bang command within our list will redirect to default command in our maps
  if (!maps[bang]) bang = "!default";

  // otherwise use exist command
  url = maps[bang] + keywords;
  return res.redirect(url);
});

// prettier-ignore
app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));
