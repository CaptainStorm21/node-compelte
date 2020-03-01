const fs = require ("fs")

const writeStream = fs.createWriteStream("./myFile.txt", "UTF-8")
const readStream = fs.createReadStream('./lorem.txt', "UTF-8")

// readStream.on("data", data => {
//     writeStream.write(data)
// })

// process.stdout.write("GOOD")
// process.stdout.write(" MORNING \n")

process.stdin.pipe(writeStream)