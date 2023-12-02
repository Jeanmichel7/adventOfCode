const child_process = require("child_process");
const day = new Date().getDate();
const scriptPath = `./src/d${day}/solver.ts`;

child_process.execSync(`tsc ${scriptPath}`, { stdio: "inherit" });
child_process.execSync(`node src/d${day}/solver.js`, { stdio: "inherit" });
