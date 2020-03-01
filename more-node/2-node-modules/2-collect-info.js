const readline = require ('readline');

const r1 = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

r1.question("HOw do you like Node?", answer => {
    console.log(`Your Answer is ${ answer }`)
}) 