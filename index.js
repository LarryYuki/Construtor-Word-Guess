const inquirer = require('inquirer');
const Letter = require('./Letter')
const Word = require('./Word')

let gen = function () {
    let wordArray = ['apple', 'banana', 'cat', 'homunculus', 'Basketball', 'ufo']
    let totNum = wordArray.length
    let randInx = Math.floor(Math.random() * totNum)
    let ranWord = wordArray[randInx]
    console.log(ranWord);

    console.log(randInx);

    let ranLetter = new Word(ranWord)
    console.log(ranLetter);
    let underscore = [];
    ranLetter.array.forEach(lett => {
        underscore.push('_')
    })
    console.log(underscore);
}

guess = () => {
    gen();
    inquirer
        .prompt({
            type: "input",
            message: 'Guess a letter!',
            name: 'letterInput',
            validate: ans => {
                if (ans.length === 1) {
                    return true;
                } else {
                    return 'stop';
                }
            }
        })
        .then(res => {
            Letter();
            console.log(
                checking(res.letterInput)
            );

            // console.log(res.letterInput);
        })
}
guess();