function upperParams(param1: string, param2: string) {
  return <T extends new (...args: any[]) => any>(target: T) =>
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
}

@upperParams("param1", "param2")
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal("Bonny", "black");

console.log({ animal });
