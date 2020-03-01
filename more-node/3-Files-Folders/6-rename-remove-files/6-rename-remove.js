const fs = require ('fs')

fs.renameSync("./data.json", "./RenameData.json");

fs.rename("./notes.md", "./RenameNotes.md", err=> {
    if(err){
        throw err;
    }
});

setTimeout(()=> {
    fs.unlinkSync("./ale.jpg")
}, 4000)