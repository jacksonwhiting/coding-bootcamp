let tempConversion = function (fahrenheit) {
   let celcius = (fahrenheit - 32) * (5 / 9);
   let kelvin = ((fahrenheit - 32) * (5 / 9)) + 273.15;
   return {
      fahrenheit,
      celcius,
      kelvin
   }
};

let conversion = tempConversion(32);

console.log(`The Kelvin conversion is ${conversion.kelvin}`);