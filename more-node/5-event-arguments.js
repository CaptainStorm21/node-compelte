const EventEmitter = require ('events');

//create instance of a class
const emitter = new EventEmitter();
//class is a human
//pbject is a specific person 

//register a listener
//place listener above .emit
//call it synch
emitter.on('messageLogged', function(arg){
  console.log('listerner called', arg)
})

/*
emitter.on('messageLogged', (arg) =>{
console.log('Listner called', arg)
})
*/



//raise an event
//add eventArgument
emitter.emit('messageLogged', {
  id: 1,
  url: 'http://'
});

/*
output 
listener called
{id: 1, url: 'http://'}

*/