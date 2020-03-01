console.log('util.js');

const name1 = "JD";
console.log("this is the output from utils.js " + name1);

const name2 = "Karmen";
module.exports = name2;

const name3 = require('./utils.js');
console.log('exported out of utils.js ' + name3);

//function export
const add = function (a, b) {
    return a + b;
}
module.exports = add;

const stringAdd = function (userName) {
    return "This is the string from utils written by " + userName;
}
module.exports = stringAdd;