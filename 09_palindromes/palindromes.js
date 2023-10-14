const palindromes = function (string) {
  // i: word
  // o: boolean, word is spelled same backwards and forwards
  //use recursion
  //base case:
  //if the word length is only 1 letter return true
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
