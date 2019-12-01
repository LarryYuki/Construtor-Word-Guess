const Letter = require('./Letter')

function Word(keyword) {
    this.array = []
    keyword.split("").forEach(lett => {
        this.array.push(new Letter(lett))
    });
    this.print = function () {
        let result = ""
        this.array.forEach(lett => {
            result += lett.printing() + " "
        })
        console.log(result)
        return result
    } //this.check 

}
//make some tests for our words here
// let test = new Word("test")
// console.log(test)
// test.print()

module.exports = Word