/*
// const dataD3 = require("./dataDemo.json");
const dataD3 = require("./data.json");

let symbole = "";

const includeSymbole = (c) => {
  if (c == undefined) return false;
  // const symb = "*#+-$/=<>@^&|?_!";
  return symbole.includes(c);
};

const charIsAdj = (dataD3, y, x) => {
  if (y - 1 >= 0) {
    if (x - 1 >= 0 && includeSymbole(dataD3[y - 1][x - 1])) return true;
    if (includeSymbole(dataD3[y - 1][x])) return true;
    if (x + 1 <= dataD3[y].length - 1 && includeSymbole(dataD3[y - 1][x + 1]))
      return true;
  }

  if (x - 1 >= 0 && includeSymbole(dataD3[y][x - 1])) return true;
  if (x + 1 <= dataD3[y].length - 1 && includeSymbole(dataD3[y][x + 1]))
    return true;

  if (y + 1 <= dataD3.length - 1) {
    if (x - 1 >= 0 && includeSymbole(dataD3[y + 1][x - 1])) return true;
    if (includeSymbole(dataD3[y + 1][x])) return true;
    if (x + 1 <= dataD3[y].length - 1 && includeSymbole(dataD3[y + 1][x + 1]))
      return true;
  }

  return false;
};

const wordIsAdj = (word, y, x, dataD3) => {
  if (word == "") return false;

  console.log("word : ", word);
  console.log("i : ", y);
  console.log("j : ", x);
  console.log("dataD3[i][j] : ", dataD3[y][x]);

  for (let i = 0; i < word.length; i++) {
    if (charIsAdj(dataD3, y, x + i)) return true;
  }
  return false;
};

const solvD3 = () => {
  console.log(dataD3);
  let sum = 0;

  for (let i = 0; i < dataD3.length; i++) {
    for (let j = 0; j < dataD3[i].length; j++) {
      const c = dataD3[i][j];
      if (!c.match(/[0-9]/) && c != "." && !symbole.includes(c))
        symbole += dataD3[i][j];
    }
  }
  console.log("symbole : ", symbole);

  for (let i = 0; i < dataD3.length; i++) {
    for (let j = 0; j < dataD3[i].length; j++) {
      let word = "";
      while (dataD3[i][j] && dataD3[i][j].match(/[0-9]/)) {
        word += dataD3[i][j];
        j++;
      }

      if (word != "" && wordIsAdj(word, i, j - word.length, dataD3)) {
        console.log("word : ", word);
        sum += parseInt(word);
      }
      // const item = dataD3[i][j];
      // console.log("item : ", item);
    }
  }
  console.log("sum : ", sum);
};

solvD3();
*/

const dataD3 = require("./data.json");
// const dataD3 = require("./dataDemo.json");

const includeSymbole = (c) => {
  // if (c == undefined) return false;
  // // const symb = "*#+-$/=<>@^&|?_!";
  // return symbole.includes(c);
  if (c == undefined) return false;
  if (c == ".") return false;

  if (c.match(/[0-9]/)) return true;
  else return false;
};

const extractWord = (dataD3, y, x) => {
  let word = "";
  // let initIndex = x;
  while (x > 0 && dataD3[y][x - 1].match(/[0-9]/)) {
    x--;
  }
  while (x < dataD3[y].length && dataD3[y][x].match(/[0-9]/)) {
    word += dataD3[y][x];
    dataD3[x][y] = ".";
    x++;
  }
  return word;
};

const charIsAdj = (dataD3, y, x) => {
  let tab: String[] = [];

  if (y - 1 >= 0) {
    if (x - 1 >= 0 && includeSymbole(dataD3[y - 1][x - 1]))
      tab.push(extractWord(dataD3, y - 1, x - 1));
    if (includeSymbole(dataD3[y - 1][x]))
      tab.push(extractWord(dataD3, y - 1, x));
    if (x + 1 <= dataD3[y].length - 1 && includeSymbole(dataD3[y - 1][x + 1]))
      tab.push(extractWord(dataD3, y - 1, x + 1));
  }

  if (x - 1 >= 0 && includeSymbole(dataD3[y][x - 1]))
    tab.push(extractWord(dataD3, y, x - 1));
  if (x + 1 <= dataD3[y].length - 1 && includeSymbole(dataD3[y][x + 1])) {
    tab.push(extractWord(dataD3, y, x + 1));
  }

  if (y + 1 <= dataD3.length - 1) {
    if (x - 1 >= 0 && includeSymbole(dataD3[y + 1][x - 1]))
      tab.push(extractWord(dataD3, y + 1, x - 1));
    if (includeSymbole(dataD3[y + 1][x]))
      tab.push(extractWord(dataD3, y + 1, x));
    if (x + 1 <= dataD3[y].length - 1 && includeSymbole(dataD3[y + 1][x + 1]))
      tab.push(extractWord(dataD3, y + 1, x + 1));
  }

  // console.log("tab : ", tab);
  const resultTab = tab.filter((e, i, tab) => tab.indexOf(e) === i);
  console.log("resultTab : ", resultTab);
  if (resultTab.length == 2) {
    return +resultTab[0] * +resultTab[1];
  } else return 0;
};

const solvD3 = () => {
  console.log(dataD3);
  let sum = 0;

  for (let i = 0; i < dataD3.length; i++) {
    for (let j = 0; j < dataD3[i].length; j++) {
      const c = dataD3[i][j];
      if (c == "*") {
        let test = 0;
        if ((test = charIsAdj(dataD3, i, j)) != 0) {
          console.log("test : ", test);
          sum += test;
        }
      }
    }
  }
  console.log("sum : ", sum);
};

solvD3();
