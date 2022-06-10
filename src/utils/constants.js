import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(path.join(process.cwd(), ".env")) });

export const PORT = process.env.PORT;
