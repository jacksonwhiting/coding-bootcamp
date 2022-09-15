const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = "playing"
}

let wordInBrowser = document.querySelector("#hangmanWord")
let remainingGuessesBrowser = document.querySelector("#guessesLeft")

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    wordInBrowser.textContent = puzzle;
    remainingGuessesBrowser.textContent = this.getStatus();
}

let missingLetters = (word, guessedLetters, remainingGuesses) => {
    let stillPlaying = false

    word.forEach((item) => {
        if (!guessedLetters.includes(item) && remainingGuesses >= 0) {
            stillPlaying = true
        }
    })

    return stillPlaying
    return stillPlaying;
}

Hangman.prototype.calculateStatus = function () {
    if (this.remainingGuesses <= 0) {
        this.status = "failed"
    } else if (missingLetters(this.word, this.guessedLetters, this.remainingGuesses)) {
        this.status = "playing"
    } else {
        this.status = "finished"
    };
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status === "playing") {
        if (isUnique && !isBadGuess) {
            this.guessedLetters.push(guess)
            this.calculateStatus()
        } else if (isUnique && isBadGuess) {
            this.guessedLetters.push(guess)
            this.remainingGuesses--
            this.calculateStatus()
        } else {
            console.log(`You already guessed the letter ${guess}.`)
        }
    }
}

Hangman.prototype.getStatus = function () {
    if (this.status === "playing") {
        return `You have ${this.remainingGuesses} guesses remaining.`
    } else if (this.status === "failed") {
        return `Nice try, the word was "${this.word.join("")}"`
    } else {
        return 'Great work, you guessed the word'
    };
}