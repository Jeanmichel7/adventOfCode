import * as fs from "fs";
import * as path from "path";

const initNewFile = (day: number, data: any) => {
  const initSolver: string = `\
const dataD${day} = require("./data.json"); \n\
\n\
const solvD${day} = () => {\n\
  console.log(dataD${day});\n\
};\n\
\n\
solvD${day}();`;

  const nextFolderName = `d${day}`;
  const nextFolder = path.join(__dirname, "..", nextFolderName);
  if (!fs.existsSync(nextFolder)) fs.mkdirSync(nextFolder);

  const dataFileName = "data.json";
  const dataFilePath = path.join(nextFolder, dataFileName);
  if (!fs.existsSync(dataFilePath)) fs.writeFileSync(dataFilePath, data);

  const solverFileName = "solver.ts";
  const solverFilePath = path.join(nextFolder, solverFileName);
  if (!fs.existsSync(solverFilePath))
    fs.writeFileSync(solverFilePath, initSolver);
};

export { initNewFile };
