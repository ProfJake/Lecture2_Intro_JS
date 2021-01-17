/*simpleReq2.js 
A simple demonstration of importing data with the require statement.
*/

//To access anything exported in another file, it must be imported
let simpleImport = require('./simpleExport.js');

//Because we imported the entire file at one time, we have to access the
//imported functions through our local reference with dot notation
console.log(simpleImport.hello);
simpleImport.sayHello();
