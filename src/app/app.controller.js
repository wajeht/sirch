import path from "path";

export async function getHomePage(req, res) {
  res.sendFile(
    path.resolve(path.join(process.cwd(), "src", "public", "index.html"))
  );
}

export async function ensureAuth(req, res) {}
export async function svelteHandler(req, res) {}
