import list from "./commands.list.js";

/**
 * !NOTE: *** REFACTOR THIS! ***
 *
 * It takes a query string from the user, checks if it's a direct command or a
 * search command, and then redirects the user to the appropriate URL
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns a JSON object with the following properties:
 */
export async function getCommands(req, res) {
  const query = Object.keys(req.query);

  // throw error if search does not contain q as query param
  // for example:	`api/command/?q=`
  if (query.length != 1 && !query.includes("q")) {
    return res.status(404).json({
      status: "error",
      statusCode: res.statusCode,
      query: req.query,
      based_url: req.baseUrl,
      request_url: req.originalUrl,
      message: "You must use the proper format!",
      example: {
        "direct-commands": "/api/commands/?q=!myprofile",
        "search-commands": "/api/commands/?q=!bang testing one to three",
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
    if (req.query.q.startsWith("!")) {
      // list available commands
      if (req.query.q == "!cmds") return res.status(200).json(list);

      // direct commands
      url = list["direct-commands"][req.query.q];
      if (url) return res.redirect(url);
    }

    // searched terms
    bang = "!default";
    keywords = req.query.q;
  } else {
    // otherwise extract given bang command and keywords
    // for example: 	!bang testing one two three
    bang = req.query.q.split(" ")[0];
    keywords = req.query.q.split(" ").slice(1).join(" "); // prettier-ignore
  }

  const preBang = bang;
  // undefined bang command within our list will redirect to default command in our list
  if (!list["search-commands"][bang]) {
    // since duckduckgo provides most of the bang commands
    // this is the code that remaps without providing our own bangs
    // for example:		!bing search something
    // will be   ->     !default !bing  something
    if (bang.startsWith("!")) {
      keywords = " " + preBang + " " + keywords;
      bang = "!default";
    } else {
      bang = "!default";
    }
  }

  // otherwise use exist command
  url = list["search-commands"][bang] + keywords;
  //   url = list["search-commands"][bang];

  return res.redirect(url);

  // //   api response
  //   return res.status(200).json({
  //     status: "success!",
  //     statusCode: res.statusCode,
  //     query: req.query,
  //     based_url: req.baseUrl,
  //     request_url: req.originalUrl,
  //     message: "The resource was returned successfully!",
  //     data: url,
  //   });

  //   // the code below are for proxing
  //   const protocol = req.protocol;
  //   const host = req.get("host");
  //   const proxy = `${protocol}://${host}/proxy?url=${url}`;
  //   // // http://localhost:4000/proxy?url=https://duckduckgo.com/?q=dfasdf&ia=web
  //   res.redirect(`/?load=${proxy}`);
}
