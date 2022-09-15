// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

window.addEventListener('keypress', function (e) {
   // const guess = String.fromCharCode(e.charCode)
   const guess = e.key
   game1.makeGuess(guess)
   console.log(game1.getStatus())
   game1.getPuzzle()
})

const game1 = new Hangman('Cat', 2)

game1.getPuzzle()