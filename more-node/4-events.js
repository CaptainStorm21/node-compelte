const EventEmitter = require ('events');

//create instance of a class
const emitter = new EventEmitter();
//class is a human
//pbject is a specific person 

//register a listener
//place listener above .emit
//call it synch
emitter.on('messageLogged', function(){
  console.log('listerner called')
})

//emit = making a noise
// produce something
//we raised an event but 
//we havent listeend to the noise
emitter.emit('messageLogged');

