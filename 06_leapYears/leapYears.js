const leapYears = function(years) {
  //i: years in number format aka 1900. 
  //o: boolean to determine whether passed in year is a leap year or not.
  //using an if statement to check whether passed in arg is a leap year. using the modulo operator to be divisble 
  //by 4 and not divsible by 100 or divsible by 400.
  if(years % 4 === 0 && ((years % 100 !== 0) || years % 400 === 0)) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
