"use strict";

class InvalidOperationError extends Error {
  constructor(operation) { super(`Unsupported operation: ${operation}`); this.name = "InvalidOperationError"; }
}
class DivideByZeroError extends Error {
  constructor() { super("Cannot divide by zero."); this.name = "DivideByZeroError"; }
}
class NegativeRootError extends Error {
  constructor(value) { super(`Cannot calculate a real square root of ${value}.`); this.name = "NegativeRootError"; }
}

function calculate(operation, num1, num2) {
  switch (operation) {
    case "add": return num1 + num2;
    case "divide":
      if (num2 === 0) throw new DivideByZeroError();
      return num1 / num2;
    case "power": return num1 ** num2;
    case "root":
      if (num1 < 0) throw new NegativeRootError(num1);
      return Math.sqrt(num1);
    case "subtract": return num1 - num2;
    default: throw new InvalidOperationError(operation);
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
for (const operation of operations) {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`${operation}(${num1}, ${num2}) = ${result}`);
  } catch (error) {
    console.log(`${operation} error: ${error.name} - ${error.message}`);
  }
}

for (const [operation, left, right] of [["root", -9, 0], ["modulo", 25, 0]]) {
  try {
    console.log(`${operation} result: ${calculate(operation, left, right)}`);
  } catch (error) {
    console.log(`Handled error: ${error.name} - ${error.message}`);
  }
}
