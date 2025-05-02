let myName: string = "alex"; // explisit method

let myAge: number = 43;

let hasJob: boolean = false;

console.log(
  `My name is ${myName}. I am ${myAge} years old. At this tame I have ${
    hasJob ? "a job" : "no job"
  }.`
);

let a: number = 20;
let b: number = 10;

const returnSomeNumber = (a: number, b: number) => {
  console.log(`${a} / ${b} is ${a / b}`);
};

returnSomeNumber(a, b);
