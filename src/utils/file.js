"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initNewFile = void 0;
var fs = require("fs");
var path = require("path");
// const getLatestMatchingFolder = (): string | null => {
//   const parentDirectory = path.join(__dirname, "..");
//   const isDirectory = (source: string) => fs.lstatSync(source).isDirectory();
//   const getDirectories = (source: string) =>
//     fs
//       .readdirSync(source)
//       .map((name) => path.join(source, name))
//       .filter(isDirectory);
//   const directories = getDirectories(parentDirectory);
//   const matchingDirectories = directories.filter((dir) => {
//     const dirName = path.basename(dir);
//     return dirName.match(/^d\d+$/);
//   });
//   if (matchingDirectories.length === 0) {
//     return null;
//   }
//   // matchingDirectories.sort();// utile ?
//   return matchingDirectories[matchingDirectories.length - 1];
// };
// const saveDataInFile = (data: any) => {
//   const latestFolder = getLatestMatchingFolder();
//   if (!latestFolder) {
//     // console.error("Aucun dossier trouvé");
//     return;
//   }
//   // console.log(`Dernier dossier trouvé: ${latestFolder}`);
//   const dataFileName = "data.json";
//   const dataFilePath = path.join(latestFolder, dataFileName);
//   fs.writeFileSync(dataFilePath, JSON.stringify(data));
// };
// const initSolver: String =
//   '\
// import data from "./data.json"; \n\
// import data from "./data.json"; \n\
// \n\
// const main = () => {\n\
//   console.log(data);\n\
// };\n\
// \n\
// main();\n\
// ';
var initNewFile = function (day, data) {
    // const latestFolder = getLatestMatchingFolder();
    // console.log(`Dernier dossier trouvé: ${latestFolder}`);
    // let folderNumber = 0;
    // if (latestFolder) {
    //   const folderName = path.basename(latestFolder);
    //   folderNumber = parseInt(folderName.replace("d", ""));
    // }
    //const data = require("./data.json");
    var initSolver = "const dataD".concat(day, " = require(\"./data.json\"); \n\nconst solvD").concat(day, " = () => {\n  console.log(dataD").concat(day, ");\n};\n\nsolvD").concat(day, "();");
    var nextFolderName = "d".concat(day);
    var nextFolder = path.join(__dirname, "..", nextFolderName);
    if (!fs.existsSync(nextFolder))
        fs.mkdirSync(nextFolder);
    var dataFileName = "data.json";
    var dataFilePath = path.join(nextFolder, dataFileName);
    if (!fs.existsSync(dataFilePath))
        fs.writeFileSync(dataFilePath, data);
    var solverFileName = "solver.ts";
    var solverFilePath = path.join(nextFolder, solverFileName);
    if (!fs.existsSync(solverFilePath))
        fs.writeFileSync(solverFilePath, initSolver);
};
exports.initNewFile = initNewFile;
