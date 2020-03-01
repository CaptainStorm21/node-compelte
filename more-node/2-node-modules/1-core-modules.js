const path = require ("path");
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads' );
console.log(`\n`)
console.log("outdated " + dirUploads);
console.log(`\n`)
const util = require("util");
util.log(path.basename(__filename));
util.log(" ^ The name of the current file");

console.log(`\n`)
const v8 = require ('v8');
util.log(v8.getHeapStatistics());
//memory usage


console.log(`\n`)
