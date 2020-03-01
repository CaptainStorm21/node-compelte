const events = require ("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) =>{
    console.log(`${user}, ${message}`)
})

//customEvent online 10 must match customEvent on line 5
emitter.emit("customEvent", "Good Morning", "Lord of Shire");
emitter.emit("customEvent", "Good Evening", "Capt Storm");

//input from the user 
process.stdin.on( "data", data => {

    const input = data.toString().trim();

    if(input === "exit"){
        emitter.emit("customEvent", "CIAO", "You left :(!");
        process.exit();
    } 
    emitter.emit("customEvent", "What is your favorite word?", input );

});