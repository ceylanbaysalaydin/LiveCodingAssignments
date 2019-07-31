/* 1. Seconds to Minutes
Create a function that accepts one argument (seconds) and converts it into minutes and seconds and returns back.

Example input: (94)
Example output: "1 minutes and 34 seconds"

*/

function secondsConverter(seconds){
    var minutes=Math.floor(seconds/60);
    var sec=(seconds%60);
    return String(minutes) + " minutes " + String(sec) + " seconds" ;
}
 console.log(secondsConverter(94));
 console.log(secondsConverter(78));



 /*2. Print the written number with prefix
Create a function that accepts one argument (number) and returns it as a string with 'Number is: " prefix.

Example input: (22)
Example output: "Number is: 22" */ 


function number(num){
    return "Number is: " + String(num);
}
console.log(number(5));
console.log(number(22));



/*3. Remove the 2nd string from the 1th string
Create a function that accepts two arguments(firstString, secondString) and removes the second string from the first string.

Example input: ('I am a happy person.', 'person')
Example output: "I am a happy ." */ 

function removeString(firstString, secondString){
     var str=firstString.split(secondString);
     var string=str.join('');
     return string;
}
console.log(removeString('Hello my name is Ceylan','my'));



/*4. Replace the 2nd string with the 3rd string
Create a function that accepts two arguments(firstString, secondString, thirdString) and replaces the 2nd string with the 3rd one in the 1th string.

Example input: ('I am a bad person.', 'bad', 'good')
Example output: "I am a good person."

 */
function replaceString(firstString, secondString, thirdString){
    var string=firstString.replace(secondString,thirdString);
    return string
}
console.log(replaceString('Hello my name is ceylan','name','surname'));



/*5. Return the closest bigger even number of the given number
Create a function that accepts one argument(number) and returns the closest bigger even number of given number.

Example input: (354)
Example output: 356

Example input: (23)
Example output: 24 */

function biggerEvenNumber(number){
    if(number%2==0){
        number+=2;
    }else{
        number++;
    }
    return number;
}
console.log(biggerEvenNumber(354));
console.log(biggerEvenNumber(23));



/*6. Create a simple calculator function
Create a function that accepts three arguments(number1, number2, theMathOperator) and does a calculation based on the given math operator* and returns the result.

Math operators: +, -, /, *
Example input: (11,5,'+')
Example output: 16

Example input: (50,20,'/')
Example output: 2.5 */ 
function calc(num1,num2,operator){
    var result;
    if(operator==="+"){
        result=num1+num2;
    }
    else if(operator==="-"){
        result=num1-num2;
    }
    else if(operator==="*"){
        result=num1*num2;
    }
    else if(operator==="/"){
        result=num1/num2;
    }
    else {
        result='Unknown Operator'
    }
    console.log(result);
}
calc(1,5,'+');
calc(1,5,'-');
calc(2,5,'*');
calc(50,20,'/');




