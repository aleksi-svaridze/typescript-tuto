class Coder {
  public constructor(
    private readonly name: string,
    private readonly age: number,
    public readonly hasJob: boolean
  ) {
    this.name = name;
    this.age = age;
    this.hasJob = hasJob;
  }

  protected getName = (): string => {
    return `My name is ${this.name}`;
  };

  private getAge(): string {
    return `My age is ${this.age}`;
  }

  public getJob = (): string => {
    return `I have ${this.hasJob ? "a job" : "no job"}`;
  };

  protected setName(x: string): string {
    return `My new name is ${x}`;
  }
}

const alex = new Coder("alex", 43, true);
console.log(alex.getJob());

class Human extends Coder {
  constructor(public hoby: string, name: string, age: number, hasJob: boolean) {
    super(name, age, hasJob);
    this.hoby = hoby;
  }

  getHoby(): void {
    console.log(`My hoby is to ${this.hoby}`);
  }
}

const sara = new Human("Listen the Rock music", "Sara", 42, false);
sara.getHoby();

// Interface

interface Musician {
  name: string;
  instrument: string;
  play: (action: string) => string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Matsoni = new Guitarist("Matsoni", "Guitar");

console.log(Matsoni.play("plays"));
