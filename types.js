/* types.js
A file for the first lecture demo'ing basic types.
Jake Levy
Aug 2020
APW: JS
Edited: Jan 2021
*/
//It's important to note that loose typing is in play in JS

//Strings
//There are two ways to declare standard strings
var string1 = "This is a string";
var string2 = 'This is also a valid string';

//Numbers
//Numbers in JS are just numbers.  You don't need to differentiate
var num1 = 5;
var num2 = 2;
var answer  = num1/num2;

console.log("Answer: " + answer);


//Interesting stuff
//Loose typing means that stuff is what we treat it as
//But it can lead to some confusing results if you are careless.
var num3 = "5";
var mix = num3 * num2;//Node figures out this is supposed to be a Number
//because * is only numerical
//If a string CAN be converted to a valid Number then it can be used in
//arithmetic expressions

//However if the operator is also a String operator, then you'll get a String
//result
console.log("Mixed types can be used:" + mix);
var otherMix = num3+num2;

console.log("Other mix: " + otherMix);  //Here it becomes a string
//because + is a string operator as well, and one of the operands is a string


//Parsing Numbers from Strings
//its possible to pull a number out of a string using the parse methods
//these are provided by the runtime so are available always
let pi = parseFloat('3.14159')
let res = `Circles with a radius of 5 have area of ${pi * 25} units`;
console.log(res);


//And back again
let five = 5
console.log(five.toString());
five=null;

//Template Strings
//These are special Strings that allow interpolation (mixing data into strings)
//Interpolation is the *preferred* method for this.

console.log(`Template Strings mix data like this: ${mix}`);
//these will be more useful later but it's good to get used to them now


//Booleans
var yes = true;
var no = false;


//Arrays
var arr = []; //empty array
arr.push("first"); //push puts an element in the "last" space
arr.push("second");
arr.push("third");
for (i=0; i< arr.length; i++){
    console.log(arr[i]);
}
var answer = arr.pop(); //pop pulls the last element

console.log(`answer: ${answer}`);
var first = arr[0];//you can grab elements by index


for (index in arr){ //for-in loops use index numbers by default
    console.log(arr[index]);
}

var loc = arr.indexOf("second")
console.log(`second is in Position ${loc}`);

//Remove by index (or remove sub-Array)
//use arr.splice(Position, length);  Starts at Position, runs for length items
var removed = arr.splice(1,1);
console.log(`${removed} is Removed`);

//to work at the beginning of an Array use "shift"(add)  and  "unshift"(remove)
//Note that arrays are effectively any type of "linear data Structure"
//you can treat it like a stack (or reverseStack) or a Queue or whatever.

//NULL
//use the null value when you want to specifically give something "no value"
var not = null;

if (!not){
    //you can check for existence of var values
    console.log(`not value: ${not}`);
}

//anything can be set to null

//Erroneous Stuff
//uncomment below to see what doesn't work

//var bad = "cat"
//var badAns = num3 * bad; //here we get an error because it's nonsense

//Note that our code actually runs until it hits the error. Since compilation
//for JS is JIT, runtime errors are far more likely


