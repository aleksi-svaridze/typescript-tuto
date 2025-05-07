"use strict";
class Coder {
    constructor(name, age, hasJob) {
        this.name = name;
        this.age = age;
        this.hasJob = hasJob;
        this.getName = () => {
            return `My name is ${this.name}`;
        };
        this.getJob = () => {
            return `I have ${this.hasJob ? "a job" : "no job"}`;
        };
        this.name = name;
        this.age = age;
        this.hasJob = hasJob;
    }
    getAge() {
        return `My age is ${this.age}`;
    }
    setName(x) {
        return `My new name is ${x}`;
    }
}
const alex = new Coder("alex", 43, true);
console.log(alex.getJob());
class Human extends Coder {
    constructor(hoby, name, age, hasJob) {
        super(name, age, hasJob);
        this.hoby = hoby;
        this.hoby = hoby;
    }
    getHoby() {
        console.log(`My hoby is to ${this.hoby}`);
    }
}
const sara = new Human("Listen the Rock music", "Sara", 42, false);
sara.getHoby();
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Matsoni = new Guitarist("Matsoni", "Guitar");
console.log(Matsoni.play("plays"));
