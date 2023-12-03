var child_process = require("child_process");
// const day = new Date().getDate();
var day = 1;
var scriptPath = "./src/d".concat(day, "/solver.ts");
child_process.execSync("tsc ".concat(scriptPath), { stdio: "inherit" });
child_process.execSync("node src/d".concat(day, "/solver.js"), { stdio: "inherit" });
