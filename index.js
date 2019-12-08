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

function startGame() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                correctWord.guessCheck(input)
                displayLetter = correctWord.keywordString()
                if (correctWord.compare === displayLetter) {
                    console.log("Sorry", input, "not in word")
                    lives--
                    console.log("Only", lives, "guesse(s) left.")
                    if (lives === 0) {
                        gameOver()
                    } else {
                        print()
                        startGame()
                    }
                } else {
                    console.log("Well done!")
                    guessLeft--
                    print();
                    if (guessLeft === 0) {
                        console.log("You are right, keep guessing:");
                        newGame()
                        print();
                        startGame();
                    } else {
                        startGame()
                    }
                }
            } else if (input.length === 0) {
                consoel.log("Choose something.");
                startGame()
            } else {
                console.log("Only one letter.")
                startGame()
            }
        } else {
            gameOver()
        }
    })
}

function displayWord() {
    displayLetter = correctWord.keywordString()
    console.log(displayLetter);
    correctWord.compare = displayLetter
}

function gameOver() {
    {
        console.log("You loss")
        inquirer.prompt([{
            type: "confirm",
            name: "playAgain",
            message: "Try again?"
        }]).then(function (response) {
            if (response.playAgain) {
                newGame()
                print()
                startGame();
            } else {
                console.log("bye bye")
            }
        })
    }
}

function print() {
    displayWord()
}
newGame()
print()
startGame();