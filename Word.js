var Letter = require("./letter.js")


function Word(keyword) {
    this.array = [];
    this.compare = "";
    for (var i = 0; i < keyword.length; i++) {
        this.array.push(new Letter(keyword[i]))
    }
    this.keywordString = function () {
        var correctWord = "";
        for (var j = 0; j < this.array.length; j++) {
            correctWord += this.array[j].returnLetter() + " ";
        }
        return correctWord
    }
    this.guessCheck = function (userInput) {
        for (var s = 0; s < this.array.length; s++) {
            this.array[s].guessCheck(userInput)
        }
    }

}


module.exports = Word;