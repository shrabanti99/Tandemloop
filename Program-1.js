class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }

  calculate(a, b, operation) {
    switch (operation) {
      case "+":
        return this.add(a, b);
      case "-":
        return this.subtract(a, b);
      case "*":
        return this.multiply(a, b);
      case "/":
        return this.divide(a, b);
      default:
        return "Invalid operation";
    }
  }
}

const myCalculator = new Calculator();

const a = parseFloat(prompt("Enter the first number:"));
const b = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /):");

const result = myCalculator.calculate(a, b, operation);
console.log("The Result is: " + result);
