var child_process = require("child_process");
var day = 2;
var scriptPath = "./src/d".concat(day, "/solver.ts");
child_process.execSync("tsc ".concat(scriptPath), { stdio: "inherit" });
child_process.execSync("node src/d".concat(day, "/solver.js"), {
  stdio: "inherit",
});
