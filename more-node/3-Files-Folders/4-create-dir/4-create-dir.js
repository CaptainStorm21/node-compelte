const fs = require ('fs');

// fs.mkdir ("storage-files", err=>{
//     if(err){
//         throw err
//     }

//     console.log('dir is created')
// })

if (fs.existsSync("storage")){
    console.log("Already there")
} else {
    fs.mkdir ("storage", err=>{
        if(err){
            throw err
        }
    
        console.log('dir is created')
    })
}