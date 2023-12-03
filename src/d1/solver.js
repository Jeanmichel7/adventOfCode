var data = require("./data.json");
// const data = require("./dataDemo.json");
var solverd1_1 = function () {
    console.log(data);
    var result = 0;
    data.map(function (line) {
        var indexFirst = line.search(/[0-9]/);
        var tmp = line.split("").reverse().join("");
        var indexLast = tmp.search(/[0-9]/);
        // console.log("first : ", line[indexFirst]);
        // console.log("last : ", tmp[indexLast]);
        var tot = +(line[indexFirst] + tmp[indexLast]);
        result += tot;
    });
    console.log("result : ", result);
};
var solverd1_2 = function () {
    console.log(data);
    var result = 0;
    var regex = /[0-9]|one|two|three|four|five|six|seven|eight|nine/;
    var template = {
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
    var reverseTemplate = {
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
    data.map(function (line) {
        var lineFormated = line.replace(/one|two|three|four|five|six|seven|eight|nine/gi, function (matched) { return template[matched]; });
        console.log("lineFormated : ", lineFormated);
        var indexFirst = lineFormated.search(/[0-9]/);
        console.log("first : ", lineFormated[indexFirst]);
        var reverseLineFormated = line
            .split("")
            .reverse()
            .join("")
            .replace(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/gi, function (matched) { return reverseTemplate[matched]; });
        console.log("reverseLineFormated : ", reverseLineFormated);
        var indexLast = reverseLineFormated.search(/[0-9]/);
        console.log("last : ", reverseLineFormated[indexLast]);
        // const tmp = lineFormated.split("").reverse().join("");
        // let indexLast = tmp.search(/[0-9]/);
        // console.log("last : ", tmp[indexLast]);
        var tot = +(lineFormated[indexFirst] + reverseLineFormated[indexLast]);
        console.log("tot : ", tot);
        result += tot;
    });
    console.log("result : ", result);
};
// solverd1_1();
//55652
solverd1_2();
