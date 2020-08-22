/*  Objects.js: Sample code for APW:JS Lecture 1
Jake Levy
Aug 2020

This file demonstrates basic object literals and how to access their members.
*/
//Objects can be defined literally
var obj = {name: "Jake", hobbies: ["Judo", "Jiujitsu", "reading", "netflix"], age: 36 };

//access object members with dot notation syntax
var name = obj.name;

var mostFun = obj.hobbies[0];

var old = obj.age;
console.log(`${name} loves ${mostFun} but ${old} is too old for it!`);

obj = {name: "Vasil", hobbies: ["Karate", "heavy metal"], age: 50};

console.log(`${obj.name} loves ${obj.hobbies[0]} but ${obj.age} is too young for it!`);
// I did not call my boss "old"

const other = {name: "Jack", hobbies: ["reading", "databases"], age: 50};


//other = obj;  //This is not allowed because of the const declaration

other.name = "bill"; //this IS allowed

console.log(`${other.name} loves ${other.hobbies[0]} but ${other.age} is too young for it!`);


var objFunc = {name:"Steve", hobbies: ["Star Wars", "Building"], age: function(){
    return Number(2020) - Number(1947);
}
	      };
//Note that age is now the name of a function so to run it, I need the parens
//or else it will just return the actual definition as a String
console.log(`${objFunc.name} loves ${objFunc.hobbies[1]} but ${objFunc.age()} is too old`);
