import axios from "axios";
import mime from "mime";
import { URL } from "url";

let lastProtoHost;

const regex = /\s+(href|src)=['"](.*?)['"]/g;

/**
 * If the URL has a query string, remove it. If the URL has no extension, return "text/html".
 * Otherwise, return the MIME type
 * @param url - The URL of the page to be rendered.
 * @returns The mime type of the url.
 */
const getMimeType = (url) => {
  if (url.indexOf("?") !== -1) {
    // remove url query so we can have a clean extension
    url = url.split("?")[0];
  }
  if (mime.getType(url) === "application/x-msdownload") return "text/html";
  return mime.getType(url) || "text/html"; // if there is no extension return as html
};

/**
 * It takes a url as a query parameter, fetches the content of that url, replaces all links in the
 * content with links to the proxy function and returns the content
 * @param req - The request object.
 * @param res - The response object.
 * @returns the response from the axios request.
 */
export async function getProxy(req, res) {
  const { url } = req.query; // get url parameter
  if (!url) {
    res.type("text/html");
    return res.end("You need to specify <code>url</code> query parameter");
  }

  axios
    .get(url, { responseType: "arraybuffer" }) // set response type array buffer to access raw data
    .then(({ data }) => {
      const urlMime = getMimeType(url); // get mime type of the requested url
      if (urlMime === "text/html") {
        // replace links only in html
        data = data.toString().replace(regex, (match, p1, p2) => {
          let newUrl = "";
          if (p2.indexOf("http") !== -1) {
            newUrl = p2;
          } else if (p2.substr(0, 2) === "//") {
            newUrl = "http:" + p2;
          } else {
            const searchURL = new URL(url);
            let protoHost = searchURL.protocol + "//" + searchURL.host;
            newUrl = protoHost + p2;

            if (lastProtoHost != protoHost) {
              lastProtoHost = protoHost;
              console.log(`Using '${protoHost}' as base for new requests.`);
            }
          }
          return ` ${p1}="${req.protocol}://${req.hostname}:${process.env.PORT}/api/proxy?url=${newUrl}"`;
        });
      }
      res.type(urlMime);
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
      res.end("Error");
    });
}

/**
 * It takes the URL of the request, appends it to the last URL that was requested, and then sends the
 * response back to the client
 * @param req - The request object.
 * @param res - The response object.
 * @returns the response from the axios request.
 */
export async function getPipe(req, res) {
  if (!lastProtoHost) {
    res.type("text/html");
    return res.end(
      "You need to specify <code>url</code> query parameter first"
    );
  }

  const url = lastProtoHost + req.originalUrl;
  console.log({ lastProtoHost });
  console.log({ url });

  axios
    .get(url, { responseType: "arraybuffer" }) // set response type array buffer to access raw data
    .then(({ data }) => {
      const urlMime = getMimeType(url); // get mime type of the requested url
      res.type(urlMime);
      res.send(data);
    })
    .catch((error) => {
      res.status(501);
      res.end("Not Implemented");
    });
}
