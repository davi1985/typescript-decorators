// class decorators

const logger = <T extends { new (...args: any[]): {} }>(constructor: T) => {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      this.log(args);
    }

    private log(args: any[]) {
      console.log(
        `An instance of ${
          constructor.name
        } was created with arguments: ${JSON.stringify(args)}`
      );
    }
  };
};

@logger
class Person {
  constructor(public name: string, public age: number) {}
}

const person = new Person("Davi Silva", 30);
console.log(person);

// Class Decorators: Aplicados a classes.
// Method Decorators: Aplicados a métodos de uma classe.
// Property Decorators: Aplicados a propriedades de uma classe.
// Parameter Decorators: Aplicados a parâmetros de métodos de uma classe.
