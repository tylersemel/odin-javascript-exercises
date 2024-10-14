function roundToOneDecimal(number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  //formula to convert fahrenheit to celsius
  let celsius = (fahrenheit - 32) * (5 / 9);
  let celsiusRounded = roundToOneDecimal(celsius);
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  //formula to convert celsius to fahrenheit
  let fahrenheit = (celsius * (9 / 5) + 32);
  let fahrenheitRounded = roundToOneDecimal(fahrenheit);
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
