// Property Decorators

const toUpper = (target: any, key: string) => {
  let value = target[key];

  const getter = () => value;
  const setter = (newValue: any) => {
    value = newValue.toUpperCase();
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
};

export class Person {
  @toUpper
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Davi Silva");
console.log(person.name);
