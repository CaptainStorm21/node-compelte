const fs = require ('fs');

//asysnch
// const files = fs.readdirSync('./')
// console.log(files)

//asynch
fs.readdir('./', function(err, files){
  if (err) console.log('Err', err);
  else console.log('Result', files)
})