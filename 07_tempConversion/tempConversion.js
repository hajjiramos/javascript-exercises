const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  let tempCel = parseFloat(celsius.toFixed(1));
  return tempCel;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  let tempFah = parseFloat(fahrenheit.toFixed(1));
  return tempFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
