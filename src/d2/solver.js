var dataBrut = require("./data.json");
var boulesMax = {
    red: 12,
    green: 13,
    blue: 14,
};
var ex1 = function (data) {
    var testnum = 0;
    var dataParsed = {};
    data.map(function (line) {
        var _a = line.split(": "), id = _a[0], data = _a[1];
        var ok = true;
        data.split("; ").map(function (elem) {
            elem.split(", ").map(function (item) {
                console.log("item : ", item);
                var _a = item.split(" "), quantity = _a[0], color = _a[1];
                if (color == "red" && quantity > 12)
                    ok = false;
                if (color == "green" && quantity > 13)
                    ok = false;
                if (color == "blue" && quantity > 14)
                    ok = false;
            });
        });
        if (ok)
            testnum += +id.split(" ")[1];
    });
    console.log("result : ", testnum);
    return dataParsed;
};
var ex2 = function (data) {
    var result = 0;
    var dataParsed = {};
    data.map(function (line) {
        var _a = line.split(": "), id = _a[0], data = _a[1];
        var maxRed = 0;
        var maxGreen = 0;
        var maxBlue = 0;
        // const tmpObj = {};
        data.split("; ").map(function (elem) {
            elem.split(", ").map(function (item) {
                console.log("item : ", item);
                var _a = item.split(" "), quantity = _a[0], color = _a[1];
                if (color == "red" && quantity > maxRed)
                    maxRed = +quantity;
                if (color == "green" && quantity > maxGreen)
                    maxGreen = +quantity;
                if (color == "blue" && quantity > maxBlue)
                    maxBlue = +quantity;
            });
        });
        result += maxBlue * maxGreen * maxRed;
        // dataParsed[id] = tmpObj;
    });
    console.log("TEST : ", result);
};
// type GameData = {
//   red: number;
//   green: number;
//   blue: number;
// };
// type Games = Record<string, GameData>;
// const tester = (data: Games) => {
//   let result = 0;
//   // console.log("data : ", data);
//   for (const [key, value] of Object.entries(data)) {
//     // console.log(key, value);
//     if (value.red > boulesMax.red) {
//       console.log("red : ", value.red);
//       continue;
//     }
//     if (value.green > boulesMax.green) {
//       console.log("green : ", value.green);
//       continue;
//     }
//     if (value.blue > boulesMax.blue) {
//       console.log("blue : ", value.blue);
//       continue;
//     }
//     // if (
//     //   value.red + value.green + value.blue >
//     //   boulesMax.red + boulesMax.green + boulesMax.blue
//     // ) {
//     //   console.log("sum : ", value.red + value.green + value.blue);
//     //   continue;
//     // }
//     // console.log("add : ", key.split(" ")[1]);
//     result += parseInt(key.split(" ")[1]);
//     // if (
//     //   value.red <= boulesMax.red &&
//     //   value.green <= boulesMax.green &&
//     //   value.blue <= boulesMax.blue
//     // ) {
//     //   console.log("add : ", key.split(" ")[1]);
//     // } else {
//     //   console.log("nope because : ", key.split(" ")[1]);
//     // }
//   }
//   return result;
// };
var main = function () {
    // const dataParsed = ex1(dataBrut);
    ex2(dataBrut);
    // console.log(dataParsed);
    // const result = tester(dataParsed);
    // console.log("result : " + result);
};
main();
