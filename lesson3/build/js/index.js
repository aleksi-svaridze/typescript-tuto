"use strict";
// array
let arr1 = ["one", "two", "three"];
arr1.push("four");
console.log(arr1);
// mixed array with Union type
let mixedArr = [23, "str", true, 43];
mixedArr.push(false);
mixedArr.unshift(true);
console.log(mixedArr);
// mixed array with Tuples
let mixedArray = [true, "me", 43];
// let mixedArray2: readonly [boolean, string, number] = [true, "me", 43];
mixedArray.unshift(23);
mixedArray.push("string");
console.log(mixedArray);
// array: named tuples
let namedArray = [43, "alex"];
// destructuring named tuple array
let [a, b] = namedArray;
console.log(a, b);
// destructuring simple tuple array
let simpleTupleArray = [14, "Maya"];
let [c, d] = simpleTupleArray;
console.log(c, d);
let myObj = {
    title: "Passengers",
    year: 2010,
    janre: "Fantastic",
};
console.log(myObj.year);
// Enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
