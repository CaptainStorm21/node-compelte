const fs = require ('fs');

const readStream = fs.createReadStream("./text.txt", "utf-8");

let fileText = "";

console.log("Feel free to type something ...");
readStream.on("data", data => {
    console.log(`I read ${data.length -1 } chars of text`);
    fileText += data;
});

readStream.once("data", data => {
    console.log(data);
})

readStream.on("end", ()=> {
    console.log("end of the file");
    console.log(`\n${fileText.length - 1 } total characters read`)
})