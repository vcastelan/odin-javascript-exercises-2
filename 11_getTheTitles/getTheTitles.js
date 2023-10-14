const getTheTitles = function(books) {
  //i: array of book objects
  //o: an array of book titles
  //use an array methods. aka filter
  return books.map(ele => ele.title);
};

// Do not edit below this line
module.exports = getTheTitles;
