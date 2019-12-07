var Word = require("./word.js");
var inquirer = require("inquirer")

var wordArray = ['apple', 'banana', 'cat', 'homunculus', 'Basketball', 'ufo'];
var randomWord = "";
var displayLetter = "";
var correctWord;
var guessLeft;
var lives = 8

function newGame() {
    randomWord = "";
    var ran = parseInt(Math.floor(Math.random() * (wordArray.length)))
    randomWord = wordArray[ran]
    correctWord = new Word(randomWord)
    guessLeft = correctWord.array.length
}
displayLetter = correctWord.keywordString()
console.log(displayLetter);
correctWord.compare = displayLetter