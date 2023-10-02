const sumAll = function(int1, int2) {
  //i: 2 integers
  //o: sum of all numbers between the 2 integers
  // if any of the parameters is not a number return an "ERROR"
  if(typeof int1 !== 'number'|| typeof int2 !== 'number') return "ERROR"
  if(int1 < 0 || int2 < 0) return "ERROR"
  let min = int1;
  let max = int2;
  if(int1 > int2) {
    min = int2;
    max = int1;
  }
  //declare a sum variable to keep track of sum
  let sum = 0;
  //for a loop to add the integers while increasing one of the integers till it reaches the other
  for(let i = min; i <= max; i++) {
    sum += i;
  }
  //return the sum variable
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
