/* functions.js
An example of how functions can be used.
A simple example of a callback.
Functions in NodeJS are often provided to be run later, when the event queue
"gets around to it". These kinds of functions are called "callbacks".  

We will discuss this further when we discuss events in NodeJS.
*/
//Simple function definition
function sampleFunction(){
    console.log("This function has no parameters and returns nothing");
}

sampleFunction();//call the function

function sampleFunction2(parameter){
    
    console.log("Parameter is: " + parameter);//here parameter can be anything
}

function howToUseA(callback){
    var num = 5;
    console.log("After this line I will run the callback");
    callback(num);//here we are assuming callback is a valid function that
                  //accepts a single parameter of some type
}

howToUseA(sampleFunction2);

//how to use an anonymous function
// These are usually **SIMPLE** functions that are not needed anywhere else.
//Rather than give these functions their own module, it's more to define them
//when needed

howToUseA(  (someParam) => {
    console.log(`Parameter ${someParam} squared is ${someParam *someParam}`);
});

//We can assign functions to variables and pass them arround
var square = function(param){
    return param*param;
}

var cube = function(param){
    return param*param*param;
}

var hyperCube = function(param){
    return square(param) * square(param);
}

//or store them in arrays
var mathArr = [square, cube, hyperCube];


//or use them as arguments to functions
function moreCallBacks(callBack, param){
    console.log(callBack(param));
}

for (i=0 ; i<mathArr.length; i++){
    moreCallBacks(mathArr[i], 5);
}
