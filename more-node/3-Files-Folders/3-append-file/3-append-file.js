const fs = require ('fs');

const md = `

#This is a new filter: 

we can write tet to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile
`

fs.writeFile("./notes.md", md.trim(), err=>{
    if(err){
        throw err;
    }
    console.log("file saved")
});