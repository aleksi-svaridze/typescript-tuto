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
