const fs = require ("fs");

// sync 
// const text = fs.readFileSync("./Reade.md", "UTF-8");
//    console.log(text);

//async
fs.readFile("./Reade.md", "UTF-8", (err, text) =>{
    console.log("file reads");
    console.log(text);
})

//image
fs.readFile("./whatever.jpg",  (err, img) =>{

    if(err){
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }

    console.log("file reads");
    console.log(img);
})
