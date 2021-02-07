var calc = require('./calculator.js');

let a = 10 ,b=5;

let sum = calc.add(a, b);
let sub = calc.sub(a, b);
let multi = calc.multi(a, b);
let division = calc.division(a, b);

console.log(sum, sub, multi, division);
