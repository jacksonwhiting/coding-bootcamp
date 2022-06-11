//Enter the grade number in decimal points
let letterGradeCalc = function (num) {
   let perc = `${num * 100}%`
   if (num > .89) {
      return (`You got an A (${perc})`);
   } else if (num > .79 && num < .90) {
      return (`You got a B (${perc})`);
   } else if (num > .69 && num < .80) {
      return (`You got a C (${perc})`);
   } else if (num > .59 && num < .70) {
      return (`You got a D (${perc})`);
   } else {
      return (`You got an F (${perc})`)
   }
};

let grade = function (totalPoints, ActualPoints) {
   let num = ActualPoints / totalPoints;
   console.log(letterGradeCalc(num));
};

grade(20, 16);