const fs = require ("fs");
const fileData = require ("./data.json");

fileData.countriesList.forEach( c => {
    fs.appendFile("./data.md", `${c.country}: ${c.city} \n`, err => {
        if(err) {
            throw err;
        }
    });
});