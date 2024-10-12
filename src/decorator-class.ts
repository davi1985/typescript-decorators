/**
 * Function decorators can be written with the function keyword or arrow functions,
 * but if the decorator is written with arrow functions, the decorator needs to be declared before the class.
 * Decorators built with the function keyword do not need this because of JavaScript hoisting.
 */

const decorator = <T extends new (...args: any[]) => any>(target: T) =>
  class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.toUpper(args[0]);
      this.color = this.toUpper(args[1]);
    }

    toUpper(value: string) {
      return value.toUpperCase();
    }
  };

@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal("Bonny", "black");

console.log({ animal });
