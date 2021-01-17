/*simpleExport.js
A file demonstrating how to make local data available in other files*/

//A local variable
let hello = "Hello World";

//A local function
let sayHello = function(){
    console.log("Hello from Imported Function");
}


//Adding these to the exports object makes them available anywhere I import
//this file. If I don't explicitly export something then its not available
//anywhere else, even if this file is imported. 
exports.hello = hello;
exports.sayHello = sayHello;
