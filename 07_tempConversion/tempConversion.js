const convertToCelsius = function(farenheit) {
  //i: farenheit number
  //o: celsius number rounded to the nearest decimal
  let celsius = 5 / 9 * (farenheit - 32) 
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  //i: celsius number
  //o: farenheit number rounded to the nearest decimal
  let farenheit = (9 / 5 * celsius) + 32;
  return Math.round(farenheit* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
