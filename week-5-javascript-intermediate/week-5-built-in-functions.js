/*
use built in functions

1. Find Highest Number inside an array
Write a function that takes an array returns highest number of the array

*/
function highestNum(arr) {
    return Math.max(...arr);
}
var arr = [0, 5, 3, 16, 10];
console.log(highestNum(arr));

/*
2. count words inside a string
Write a function that takes an and retruns a nmuber of words. ('words leave after space')

Example input: countWords('Hello World!')
Example output: "2"

*/
function countWords(string) {
    return string.split(" ").length;
}
var string = "Hello world!";
console.log(countWords(string));

/*
3. find number of the letters
write a function that takes 2 elements one is a letter the other is an array.

first convert to array to a string. return numbers of the letters inside the string

Example input: countLetters('e',['Hello','Worlds!'])
Example output: "1"
*/
function numberOfLetter(letter, wordArray) {
    let count = 0;
    var word = wordArray.join("");
    for (var i = 0; i < word.length; i++) {
        if (letter.toLowerCase() === word[i].toLowerCase()) {
            count += 1;
        }
    }
    return count;
}
//var letter="e";
var letter = "E";
var wordArray = ["Hello", "Worlds!"];
console.log(numberOfLetter(letter, wordArray));