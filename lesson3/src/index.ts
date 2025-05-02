// array
let arr1: string[] = ["one", "two", "three"];
arr1.push("four");
console.log(arr1);

// mixed array with Union type
let mixedArr: (string | number | boolean)[] = [23, "str", true, 43];
mixedArr.push(false);
mixedArr.unshift(true);
console.log(mixedArr);

// mixed array with Tuples
let mixedArray: [boolean, string, number] = [true, "me", 43];
// let mixedArray2: readonly [boolean, string, number] = [true, "me", 43];
mixedArray.unshift(23);
mixedArray.push("string");
console.log(mixedArray);

// array: named tuples
let namedArray: [x: number, y: string] = [43, "alex"];
// destructuring named tuple array
let [a, b] = namedArray;
console.log(a, b);

// destructuring simple tuple array
let simpleTupleArray: [number, string] = [14, "Maya"];

let [c, d] = simpleTupleArray;
console.log(c, d);

// Objects
type Movie = {
  title: string;
  year: number;
  janre?: string;
};
let myObj: Movie = {
  title: "Passengers",
  year: 2010,
  janre: "Fantastic",
};

console.log(myObj.year);

// Enum
enum Grade {
  A,
  B,
  C,
  D,
}
