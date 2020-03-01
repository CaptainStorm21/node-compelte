
//input
// process.stdin;
//output
// process.stdout;


// process.stdout.write('hello');
// process.stdout.write("good morning \n\n\n" );
//output hellogood morning
//
//

const questions = [
    "What is your name?",
    "What is your fav color",
    "Do you like Node?"
]

const ask = ( i = 0 ) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `)
}

ask();