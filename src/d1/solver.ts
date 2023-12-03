const data = require("./data.json");
// const data = require("./dataDemo.json");

const solverd1_1 = () => {
  console.log(data);
  let result = 0;

  data.map((line) => {
    let indexFirst = line.search(/[0-9]/);
    const tmp = line.split("").reverse().join("");
    let indexLast = tmp.search(/[0-9]/);
    // console.log("first : ", line[indexFirst]);
    // console.log("last : ", tmp[indexLast]);

    let tot = +(line[indexFirst] + tmp[indexLast]);
    result += tot;
  });

  console.log("result : ", result);
};

const solverd1_2 = () => {
  console.log(data);
  let result = 0;
  const regex = /[0-9]|one|two|three|four|five|six|seven|eight|nine/;
  const template = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const reverseTemplate = {
    eno: 1,
    owt: 2,
    eerht: 3,
    ruof: 4,
    evif: 5,
    xis: 6,
    neves: 7,
    thgie: 8,
    enin: 9,
  };

  data.map((line) => {
    const lineFormated = line.replace(
      /one|two|three|four|five|six|seven|eight|nine/gi,
      (matched) => template[matched]
    );
    console.log("lineFormated : ", lineFormated);
    let indexFirst = lineFormated.search(/[0-9]/);
    console.log("first : ", lineFormated[indexFirst]);

    const reverseLineFormated = line
      .split("")
      .reverse()
      .join("")
      .replace(
        /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/gi,
        (matched) => reverseTemplate[matched]
      );
    console.log("reverseLineFormated : ", reverseLineFormated);
    let indexLast = reverseLineFormated.search(/[0-9]/);
    console.log("last : ", reverseLineFormated[indexLast]);

    // const tmp = lineFormated.split("").reverse().join("");
    // let indexLast = tmp.search(/[0-9]/);
    // console.log("last : ", tmp[indexLast]);

    let tot = +(lineFormated[indexFirst] + reverseLineFormated[indexLast]);
    console.log("tot : ", tot);
    result += tot;
  });

  console.log("result : ", result);
};

// solverd1_1();
//55652
solverd1_2();
