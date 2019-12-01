function Letter(char) {
    this.stringValue = char;
    this.guessed = false;
    this.printing = function () {
        if (this.guessed == true) {
            return this.stringValue
        } else {
            return '_'
        }
        // if (this.guessed)

    }
    this.checking = function (guess) {
        if (this.stringValue == guess) {
            this.guessed = true
        } else {
            console.log(guess + " was not a good guess, guess again")
        }
        return "Happy thanksgiving"
    }
}
console.log();

module.exports = Letter

let a = new Letter("a")
// console.log(a)
// console.log(a.printing())
// console.log(a.checking("b"))
// console.log(a.printing())
// console.log(a.checking("a"))
// console.log(a.printing())



// const inquirer = require('inquirer');

// function game() {


//     inquirer
//         .prompt({
//             type: 'input',
//             name: 'letterGuess',
//             message: 'guess letter:'
//         })
//         .then(res => {
//             let LetterCheck = new Letter(res.letterGuess);

//             console.log({
//                 string_value: LetterCheck.stringValue,
//                 checking: LetterCheck.checking(res.letterGuess),
//                 printing: LetterCheck.printing()
//             });
//         });
// }
// game();