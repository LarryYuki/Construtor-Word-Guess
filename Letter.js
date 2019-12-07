function Letter(char) {
    this.stringValue = char;
    this.guessed = false;
    this.guessCheck = function (userInput) {
        if (userInput === this.stringValue) {
            this.guessed = true
        }
    }
    this.returnLetter = function () {
        if (this.guessed === false) {
            return "_"
        } else {
            return this.stringValue
        }
    }
}

module.exports = Letter