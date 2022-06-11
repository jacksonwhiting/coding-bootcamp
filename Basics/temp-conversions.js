let fahrenheit = 95;

let celcius = (fahrenheit - 32) * (5/9);
console.log(celcius);

let kelvin = ((fahrenheit - 32) * (5/9)) + 273.15;
console.log(kelvin);

let age = 65;

//let isChild = age <= 7;
//let isSenior = age >= 65;

if (age <= 7) {
   console.log ('Is Child');
};

if (age >= 65){
   console.log ('Is Senior');
};

if (fahrenheit < 32) {
   console.log ("It's freezing");
} else if (fahrenheit > 89) {
   console.log ("It's sooooo hot");
} else {
   console.log ("Go for it - it's nice");
};

