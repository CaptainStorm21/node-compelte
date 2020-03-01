const fs = require("fs");

//synch - starting line 4 and 6 will execute right away
// console.log("starting reading the files");
// const files = fs.readdirSync("./assets");
// console.log("complete");

//async

console.log("starting reading the files");
fs.readdir("./assets", (err, files) => {
    if(err){
        throw err;
    }
    console.log("complete");
    console.log(files);

});


