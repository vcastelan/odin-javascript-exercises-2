const removeFromArray = function(array, ...args) {
  //i: array and some other argument(s)
  //o: array with some arguments removed/filtered out.
  return array.filter(ele => !args.includes(ele))
};

// Do not edit below this line
module.exports = removeFromArray;
