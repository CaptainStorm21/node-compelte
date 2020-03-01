'use strict';

const fs = require('fs');

//creates new file and adds a string
fs.writeFileSync('data.txt', 'added file');

//overwrites previous
fs.writeFileSync('data.txt', 'my name is node\n');

//add a text to preexistent file
fs.appendFileSync('data.txt', "this is added");