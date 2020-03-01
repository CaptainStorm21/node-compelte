'use strict';

//gets called in first
require('./utils.js');

//second
const name = "Legend";
console.log("this is the output from app.js " +  name);


//export'
const name3 = "Viking Thor";
module.exports = name3;

//add function 
const add = require('./utils.js')
const result = add(3, 5);
console.log('the result from add function ' + result)

//adding a param to the function
const outputString = require('./utils.js');
const output1 = outputString('Josephine Jones');
console.log(output1);