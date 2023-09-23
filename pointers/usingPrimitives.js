/**
 * In JavaScript, primitives are immutable, and when used as a value in a variable, they are
 * usually stored by value.
 */

let num1 = 15;
let num2 = num1; // num2 here actually takes the value of num1 and saves it to itself, it doesn't take "num1" but 15.

console.log(num1) // 15
console.log(num2) // 15

// Therefore, if we change the value of num1 below, it doesn't affect the value of num2
num1 = 23

console.log(num1) // 23
console.log(num2) // 15