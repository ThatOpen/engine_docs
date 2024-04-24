import * as fs from "fs";

fs.rmSync("docs/api", { recursive: true, force: true });
fs.rmSync("docs/tutorials", { recursive: true, force: true });
fs.rmSync("temp", { recursive: true, force: true });
fs.mkdirSync("temp");
