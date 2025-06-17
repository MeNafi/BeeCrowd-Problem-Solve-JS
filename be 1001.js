var input = require('fs').readFileSync('/dev/stdin', 'utf8'); //comment this line if you want to test input example 
// var input = `10 
// 9`;  // this is an input example for testing purposes
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

const X = A + B;
console.log ("X = " +X);
