/*simpleReq.js 
A simple demonstration of importing data with the require statement.
*/

//To access anything exported in another file, it must be imported
let hello = require('./simpleExport.js').hello;
//Here we import each item individually
let sayHello = require('./simpleExport.js').sayHello;

console.log(hello);
sayHello();
