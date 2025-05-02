"use strict";
// simple and union types
let stringsArr = ["one", "two", "three"];
let twoKindOfData = ["Ford", "Benc", 2020];
let mixedData = [
    "string",
    43,
    true,
    45,
    "string2",
];
console.log(stringsArr, twoKindOfData, mixedData);
// typles
// 1. here we can add same data
let ourTuples = ["alex", 43, true];
ourTuples.unshift("sj");
ourTuples.push(45);
console.log(ourTuples);
// 2. Here we can't add data
let ourTuples2 = ["alex", 43, true];
// ourTuples2.push(false) // Does not work
// Named typles
// 1. destructuring Named typles
let graph = [42.42, 41.41];
let [a, b] = graph;
console.log(a, b);
// 2. destructuring simple typles
let graph2 = [42.42, "string"];
let [n, s] = graph2;
console.log(n, s);
// Objects
// 1.
let myObj = {
    name: "alex",
    age: 43,
};
console.log(myObj);
// 2. with optional parameter
let myObj2 = {
    name: "alex",
    age: 43,
};
myObj2.hasJob = true;
console.log(myObj2);
let myObj3 = {
    name: "alex",
    age: 43,
};
myObj3.hasJob = true;
console.log(myObj3);
let myObj4 = {
    name: "alex",
    age: 43,
};
myObj4.hasJob = false;
console.log(myObj4);
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 10] = "A";
    Grade[Grade["B"] = 11] = "B";
    Grade[Grade["C"] = 12] = "C";
    Grade[Grade["D"] = 13] = "D";
    Grade[Grade["E"] = 14] = "E";
})(Grade || (Grade = {}));
console.log(Grade.E);
