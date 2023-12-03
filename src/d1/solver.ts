const data = require("./data.json");

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

  data.map((line) => {
    const lineFormated = line.replace(
      /one|two|three|four|five|six|seven|eight|nine/gi,
      (matched) => template[matched]
    );
    console.log("lineFormated : ", lineFormated);

    let indexFirst = lineFormated.search(/[0-9]/);
    const tmp = lineFormated.split("").reverse().join("");
    let indexLast = tmp.search(/[0-9]/);
    // console.log("first : ", line[indexFirst]);
    // console.log("last : ", tmp[indexLast]);

    let tot = +(lineFormated[indexFirst] + tmp[indexLast]);
    result += tot;
  });

  console.log("result : ", result);
};

// solverd1_1();
solverd1_2();
