var data = require("./data.json");
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
    data.map(function (line) {
        var lineFormated = line.replace(/one|two|three|four|five|six|seven|eight|nine/gi, function (matched) { return template[matched]; });
        console.log("lineFormated : ", lineFormated);
        var indexFirst = lineFormated.search(/[0-9]/);
        var tmp = lineFormated.split("").reverse().join("");
        var indexLast = tmp.search(/[0-9]/);
        // console.log("first : ", line[indexFirst]);
        // console.log("last : ", tmp[indexLast]);
        var tot = +(lineFormated[indexFirst] + tmp[indexLast]);
        result += tot;
    });
    console.log("result : ", result);
};
// solverd1_1();
solverd1_2();
