const reverseString = function(string) {
  //i: string
  //o: string in reverse.
  //convert a string to an array to use a method to add the last ele to the front.
  // OR
  // let newStr = '';
  // string = string.split('');
  // while(string.length > 0) {
  //   newStr += string.pop();
  // }
  // return newStr;
  //OR
  return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
