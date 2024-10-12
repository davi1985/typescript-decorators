// method decorators
const logExecutionTime = (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`${propertyKey} executed in ${(end - start).toFixed(2)} ms`);

    return result;
  };

  return descriptor;
};

class ExampleExecutionTime {
  @logExecutionTime
  compute(value: number): number {
    let sum = 0;

    for (let i = 0; i < value; i++) {
      sum += i;
    }

    return sum;
  }
}

const exampleExecutionTime = new ExampleExecutionTime();
exampleExecutionTime.compute(10000);
