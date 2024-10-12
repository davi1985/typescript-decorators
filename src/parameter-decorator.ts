function methodParameter(target: Object, methodName: string, index: number) {
  console.log(target);
  console.log(methodName);
  console.log(index);
}

export class Person {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  greeting(@methodParameter msg: string) {
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
console.log(person.greeting("hello"));
