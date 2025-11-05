let a = 10;
let b = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(`Addition: ${a + b}`);
    break;
  case "-":
    console.log(`Subtraction: ${a - b}`);
    break;
  case "*":
    console.log(`Multiplication: ${a * b}`);
    break;
  case "/":
    console.log(`Division: ${a / b}`);
    break;
  default:
    console.log("Invalid operator");
}