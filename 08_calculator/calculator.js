const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
	// return Math.pow(a, b);
  let total = 1;
  for (let i = 0; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }

  let total = num;

  for (let i = num - 1; i > 0; i--) {
    total *= i;
  }

  return total;
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
