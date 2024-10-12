// Parameter Decorators

const validatePositive = (
  target: any,
  methodName: string,
  parameterIndex: number
) => {
  const originalMethod = target[methodName];

  target[methodName] = function (...args: any[]) {
    const num = args[parameterIndex];

    if (typeof num !== "number" || num <= 0) {
      throw new Error(
        `O argumento na posição ${
          parameterIndex + 1
        } do método ${methodName} deve ser um número positivo.`
      );
    }

    return originalMethod.apply(this, args);
  };
};

class MathOperations {
  divide(dividend: number, @validatePositive divisor: number) {
    return dividend / divisor;
  }
}

// Testando o exemplo
const math = new MathOperations();

// Exemplo válido
try {
  const result1 = math.divide(10, -2);
} catch (error) {
  console.log(error);
}
// console.log(`Resultado da divisão: ${result1}`); // Saída esperada: "Resultado da divisão: 5"
