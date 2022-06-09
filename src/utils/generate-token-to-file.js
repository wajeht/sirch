#!/usr/bin/env node

import crypto from "crypto";
import fs from "fs/promises";

(async function generateTokenToFile() {
  try {
    const generatedToken = crypto.randomUUID();
    const token = `TOKEN="${generatedToken}"`;

    await fs.writeFile(".env", token);
    const env = await fs.readFile(".env", "utf8");

    console.log({ env });
  } catch (error) {
    console.error(error);
  }
})();
