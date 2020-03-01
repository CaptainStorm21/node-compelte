const fs = require ("fs")

// fs.renameSync('./to-rename', './renamed')

//remove files 
fs.readdirSync("./to-rename").forEach(fileName =>{
    fs.unlinkSync(`./to-rename/${fileName}`);
})

//if you do not add above code 
//this will not remove folder with files
fs.rmdir ("./to-rename", err =>{
    if(err) {
        throw err
    }

    console.log("folder removed")
})