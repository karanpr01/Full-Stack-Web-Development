const { add, sub, mul, div} = require('./math.js');

const [,, operation, num1, num2] = process.argv;
const a = parseFloat(num1);
const b = parseFloat(num2);

switch (operation) {
   case 'add': console.log("Result", add(a,b));break;
   case 'sub': console.log("Result", sub(a,b));break;
   case 'mul': console.log("Result", mul(a,b));break;
   case 'div': console.log("Result", div(a,b));break;
   default: console.log("Invalid Operation: use add|sub|mul|div ");
   
}