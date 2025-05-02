// simple and union types
let stringsArr: string[] = ["one", "two", "three"];
let twoKindOfData: (string | number)[] = ["Ford", "Benc", 2020];
let mixedData: (string | number | boolean)[] = [
  "string",
  43,
  true,
  45,
  "string2",
];
console.log(stringsArr, twoKindOfData, mixedData);

// typles
// 1. here we can add same data
let ourTuples: [string, number, boolean] = ["alex", 43, true];
ourTuples.unshift("sj");
ourTuples.push(45);
console.log(ourTuples);

// 2. Here we can't add data
let ourTuples2: readonly [string, number, boolean] = ["alex", 43, true];
// ourTuples2.push(false) // Does not work

// Named typles
// 1. destructuring Named typles
let graph: [x: number, y: number] = [42.42, 41.41];
let [a, b] = graph;
console.log(a, b);
// 2. destructuring simple typles
let graph2: [number, string] = [42.42, "string"];
let [n, s] = graph2;
console.log(n, s);

// Objects
// 1.
let myObj: object = {
  name: "alex",
  age: 43,
};

console.log(myObj);

// 2. with optional parameter
let myObj2: { name: string; age: number; hasJob?: boolean } = {
  name: "alex",
  age: 43,
};
myObj2.hasJob = true;
console.log(myObj2);

// 3. with Type
type myObj3Type = {
  name: string;
  age: number;
  hasJob?: boolean;
};

let myObj3: myObj3Type = {
  name: "alex",
  age: 43,
};
myObj3.hasJob = true;
console.log(myObj3);
// 4. Interface
interface myObj4Int {
  name: string;
  age: 43;
  hasJob?: boolean;
}

let myObj4: myObj4Int = {
  name: "alex",
  age: 43,
};

myObj4.hasJob = false;
console.log(myObj4);

// Enums
enum Grade {
  A = 10,
  B,
  C,
  D,
  E,
}
console.log(Grade.E);
