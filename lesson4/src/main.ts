type sumFunction = (a: number, b: number) => number;

let sum: sumFunction = (c, d) => {
  return c + d;
};

console.log(sum(4, 8));
