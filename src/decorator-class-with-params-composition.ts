type Constructor = new (...args: any[]) => any;

const upperParams = (param1: string, param2: string) => (target: Constructor) =>
  class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.toUpper(args[0], param1);
      this.color = this.toUpper(args[1], param2);
    }

    toUpper(value: string, param: string) {
      return value.toUpperCase() + " " + param.toUpperCase();
    }
  };

const log = (timeStamp: Date) => {
  console.log(`[${timeStamp}] - decorator called`);

  return (target: Constructor) => target;
};

@log(new Date())
@upperParams("param1", "param2")
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal("Bonny", "black");

console.log({ animal });
