/*
    1. Reverse text
    Given a string of characters as input, write a function that returns it with the characters reversed. Don't use reverse function, use loops.

    Example input: reverseText(Hello World!)
    Example output: "!dlroW olleH"
*/
function reverseText(string) {
    var letterArray = [];
    var reversedString;
    for (var i = 0; i < string.length; i++) {
        letterArray.unshift(string[i]);
    }
    reversedString = letterArray.join('');
    return reversedString;
}
var string = "Hello World!";
console.log(reverseText(string));

/* 
   2. Palindrome checker
   A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this. Don't use reverse function, use loops.

   Example input: isPalindrome('kayak')
   Example output: true

   Example input: isPalindrome('name')
   Example output: false
*/
function isPalindrome(word) {
    var reversedWord, spaceless1, spaceless2;
    reversedWord = reverseText(word);
    if (word.indexOf(' ') >= 0) {
        spaceless1 = word.split(" ").join("");
        spaceless2 = reversedWord.split(" ").join("");
        if (spaceless1 === spaceless2) {
            return true;
        } else return false;
    }
    if (word === reversedWord) {
        return true;
    } else return false;

}
var word = "was it a car or a cat i saw"; //palindrome phrase example
//var word="kayak";
console.log(isPalindrome(word));

/*
 3. FizzBuzz
Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 2, print out “Fizz”; 
when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. Use for loops.

Example input: fizzBuzz(11)
Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]
 */

function FizzBuzz(num) {
    let myFizzBuzz=[];
    for (i = 1; i <= num; i++) {
        if (i% 2 === 0 && i % 3 === 0) {
            myFizzBuzz.push("Fizz Buzz");
        } else if (i % 2 === 0) {
            myFizzBuzz.push("Fizz");
        } else if (i % 3 === 0) {
            myFizzBuzz.push("Buzz");
        } else myFizzBuzz.push(i);
    }
    return myFizzBuzz;
}
console.log(FizzBuzz(11));


/*

4. Reverse Array
Given an array of items, reverse the order. Don't use reverse function, use loops.

Example input: reverseArray([22, 'hi', 12])
Example output: [12, 'hi', 22]

*/
function reverseArray(arr){
    let reversedArray=[];
  /* 1st 
     var i=arr.length-1;
     while(i>=0){
        reversedArray.push(arr[i])
        i--;
    }   */
    /* 2nd 
        for(i=arr.length-1; i>=0; i--){
        reversedArray.push(arr[i]);
    }  */
    // 3rd 
    for(i=0; i<arr.length; i++){
        reversedArray.unshift(arr[i]);
    }
    return reversedArray; 
}
let arr=[22,'hi',12];
console.log(reverseArray(arr));

/*

5. Reverse Words
Given a phrase, reverse the order of the characters of each word. Don't use reverse function, use loops.

Example input: reverseWords('I love JavaScript!')
Example output: 'I evol !tpircSavaJ'

*/
function reverseWords(text){
    var wordArray=text.split(' ');
    var resultArray=[];
    for(i=0;i<wordArray.length;i++){
        resultArray.push(reverseText(wordArray[i]));
    }
    return resultArray.join(' ');
}
text='I love JavaScript!'
console.log(reverseWords(text));


/*
6. Capitalization
Given a phrase, capitalize every word.

Example input: capitalizeWords('i love javaScript!')
Example output: 'I Love JavaScript!
*/
function capitalizeWords(lovercaseText){
    var wordArray=lovercaseText.split(' ');
    for(i=0; i<wordArray.length;i++){
        word=wordArray[i];
        word=word.split("");
        var firstLetter=word[0];
        firstLetter=firstLetter.toUpperCase();
        word.splice(0,1,firstLetter);
        word=word.join('');
        wordArray[i]=word; 
        result=wordArray.join(" ");
    }
    return result;
}
lovercaseText='i love javaScript!';
console.log(capitalizeWords(lovercaseText));

/*

7. Subtract two Sets
Given two arrays that contains integers, remove the integers of second array from the first.

Example input: subctractArray([1, 2, 4, 6], [2, 6])
Example output: [1, 4]


*/
function subctractArray(arr1,arr2){
        for( let i=0; i<arr2.length; i++){
            let index=arr1.indexOf(arr2[i]);
            arr1.splice(index,1);
        }
    return arr1;
}
var arr1=[1, 2, 4, 6];
var arr2=[2, 6];
console.log(subctractArray(arr1,arr2));
