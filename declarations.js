/*  Lecture 1 Sample code: Declarations (var vs let) & functions
Jake Levy
Aug 2020
APW: JS
*/

//Let is the preferred and recommended declaration to use in modern ECMA/JS
//but your text is a little older than let and mostly uses var declarations
var myStr = "This is an example of a string";
var otherStr = 'You can also define strings like this';

var integer = 5;
var myOther = 6;
var floater = 5.55555;
//I can mix numbers up like I would in "real life" math.
var answer1 = integer+floater;
var answer2 = integer/myOther;
//concatenating a number to a string makes the whole result into a string
console.log("First Answer: " + answer1);
//special "integer division" is not a thing in JS
console.log("Second Answer: " + answer2);


//Scoping & Functions
function sampleFunc(){
    //example of "hoisting" variables
    //var declarations are given value of "undefined" if used before
    //declaration.  But it does not cause an Error.

    //null and undefined are DIFFERENT values that mean basically the same
    //thing: "this value is undefined".  Undefined is auto-assigned to vars
    //that have not yet received a value.  Null is given by programmers
    
    console.log(`i Before Block: ${i}`);
    //let variables do not have the same benefit
    
	 //when i is declared here
    if (!i) { //you can check the existence of variables declared with var
	//they can be "hoisted" by being declared later.
	
	var i = 10;

	console.log(`i Inside Block: ${i}`);
    }
    console.log(`i Outside Block : ${i}`);// here we are still referring to the
    //same i above 

    
    //let x = 15; //uncomment for example of variable shadowing
    if (i) { //you can't check existence as easily for let declarations
	//let declarations are only accessble inside the scope in which they
	//are declared, after their declaration.

	let x = 12; //this is a different x (different scope)
	console.log(`x Inside Block: ${x}`);
    }
//    console.log(`Outside Block : ${x}`); //uncomment for error
}

sampleFunc(); //call simple function


