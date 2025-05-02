"use strict";
let myName = "alex"; // explisit method
let myAge = 43;
let hasJob = false;
console.log(`My name is ${myName}. I am ${myAge} years old. At this tame I have ${hasJob ? "a job" : "no job"}.`);
let a = 20;
let b = 10;
const returnSomeNumber = (a, b) => {
    console.log(`${a} / ${b} is ${a / b}`);
};
returnSomeNumber(a, b);
