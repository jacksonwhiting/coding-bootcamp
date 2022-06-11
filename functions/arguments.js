//Calculates a tip amount when provided the totalbill and the tip percentage
let tipCalc = function (total, tipPerc = .2) {
   let tipAmount = total * tipPerc;
   let message = `A ${tipPerc *100}% tip on $${total} would be $${tipAmount}`
   return message;
};


console.log(tipCalc(230));