const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	//base case: if num is negative number return 1
  if(num === 0) {
    return 1;
  }
  return num * (factorial(num - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
