import * as fs from "fs";
import * as path from "path";

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

const initNewFile = (day: number, data: any) => {
  // const latestFolder = getLatestMatchingFolder();
  // console.log(`Dernier dossier trouvé: ${latestFolder}`);

  // let folderNumber = 0;
  // if (latestFolder) {
  //   const folderName = path.basename(latestFolder);
  //   folderNumber = parseInt(folderName.replace("d", ""));
  // }

  //const data = require("./data.json");

  const initSolver: string =
    '\
const data = require("./data.json"); \n\
\n\
const main = () => {\n\
  console.log(data);\n\
};\n\
\n\
main();';

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
