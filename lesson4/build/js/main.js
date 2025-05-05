"use strict";
let total = (a, ...params) => {
    return a - params.reduce((prev, curr) => prev + curr);
};
console.log(total(100, 1, 2, 3, 4, 5));
