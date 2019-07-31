/* 1.Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Tasks

truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".

truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".

truncateString("A-", 1) should return "A...".

truncateString("Absolutely Longer", 0) should return "...".

truncateString("Absolutely Longer", -1) should return "...".

*/ 
function truncateString(string, num) {
    if (num >= 0) {
        if (string.length > num) {
            var result = string.slice(0, num) + "...";
        } else {
            var result = string + "...";
        }
        return result;
    } else {
        return "...";
    }
}
console.log(truncateString("hellooooooooooo", 5));
console.log(truncateString("hellooooooooooo", -1));


/*2-)Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Tasks

confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("Open sesame", "same") should return true.
Do not use the built-in method .endsWith() to solve the challenge.
confirmEnding("Abstraction", "action") should return true.
*/ 
function confirmEnding(string, ending) {
    if (string != "" & ending != "") {
        if (string.slice((string.length) - (ending.length), string.legth) == ending) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(confirmEnding("Abstraction", ""));
console.log(confirmEnding("Abstraction", "on"));