//importing built in modules
const path = require("path");

//full path to the dir
console.log(__dirname);


//full path to the file
console.log(__filename);

console.log(`The file name is ${path.basename(__filename)}`);
console.log(`The dir name is ${path.basename(__dirname)}`);

