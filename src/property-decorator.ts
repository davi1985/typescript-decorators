function propertyDecorator(
  classPrototype: Object,
  propertyName: string | symbol
): any {
  console.log(classPrototype);
  console.log(propertyName);

  let upperCasedValue: string;

  return {
    get: () => upperCasedValue,
    set: (value: string) => {
      upperCasedValue = value.toUpperCase();
    },
  };
}

export class Person {
  @propertyDecorator
  name: string;
  @propertyDecorator
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  greeting(msg: string) {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName() {
    return this.name + " " + this.lastName;
  }

  set fullName(fullName: string) {
    const words = fullName.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;

    this.name = firstName;
    this.lastName = words.join(" ");
  }
}

const person = new Person("Davi", "Silva", 39);
// console.log(person.greeting("hello"));

console.log(person.fullName);